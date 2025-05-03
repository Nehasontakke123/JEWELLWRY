import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import SimplePeer from "simple-peer";
import RecordRTC from "recordrtc";

const socket = io("http://localhost:7001");

const VideoCall = () => {
  const [stream, setStream] = useState(null);
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [callerSignal, setCallerSignal] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const peerRef = useRef(null);
  const recorderRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const userStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setStream(userStream);
        if (userVideo.current) {
          userVideo.current.srcObject = userStream;
        }
      } catch (error) {
        console.error("❌ Error accessing media devices:", error);
      }
    })();

    socket.on("offer", (data) => {
      console.log("📩 Offer Received:", data);
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });

    socket.on("answer", (data) => {
      console.log("📨 Answer Received:", data);
      setCallAccepted(true);
      if (peerRef.current) {
        peerRef.current.signal(data.signal);
      }
    });

    socket.on("candidate", (data) => {
      console.log("📡 ICE Candidate Received:", data);
      if (peerRef.current) {
        peerRef.current.addIceCandidate(new RTCIceCandidate(data.candidate));
      }
    });

    socket.on("receive_video", (data) => {
      console.log("📩 Received Video File from Peer");
      setVideoBlob(data.video);
    });

    return () => {
      socket.off("offer");
      socket.off("answer");
      socket.off("candidate");
      socket.off("receive_video");
    };
  }, []);

  

  const acceptCall = () => {
    if (!stream) return;

    setCallAccepted(true);
    peerRef.current = new SimplePeer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peerRef.current.on("signal", (signal) => {
      socket.emit("answer", { signal, from: socket.id, to: caller });
    });

    peerRef.current.on("stream", (remoteStream) => {
      console.log("🎥 Received remote stream");
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = remoteStream;
      }
    });

    peerRef.current.signal(callerSignal);
  };

  const endCall = () => {
    setCallEnded(true);
    if (peerRef.current) {
      peerRef.current.destroy();
      peerRef.current = null;
    }
  };

  // ✅ Start Recording
  const startRecording = () => {
    if (stream) {
      recorderRef.current = RecordRTC(stream, {
        type: "video",
        mimeType: "video/webm",
      });
      recorderRef.current.startRecording();
      setRecording(true);
    }
  };

  // ✅ Stop Recording
  const stopRecording = () => {
    if (recorderRef.current) {
      recorderRef.current.stopRecording(() => {
        const blob = recorderRef.current.getBlob();
        setVideoBlob(blob);

        // Send recorded video to backend
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          socket.emit("send_video", { video: base64data });
        };
      });
      setRecording(false);
    }
  };

  return (
    <div>
      <h2>Video Call</h2>
      <div>
        <video playsInline muted ref={userVideo} autoPlay />
        {callAccepted && !callEnded && <video playsInline ref={partnerVideo} autoPlay />}
      </div>
      <div>
        {!callAccepted && (
          <button onClick={() => callUser("some-user-id")}>Start Call</button>
        )}
        {receivingCall && !callAccepted ? (
          <button onClick={acceptCall}>Accept Call</button>
        ) : null}
        {callAccepted && <button onClick={endCall}>End Call</button>}

        {/* ✅ Recording Buttons */}
        {callAccepted && !recording && <button onClick={startRecording}>Start Recording</button>}
        {recording && <button onClick={stopRecording}>Stop Recording</button>}
      </div>

      {/* ✅ Show recorded video */}
      {videoBlob && (
        <div>
          <h3>Recorded Video:</h3>
          <video controls src={URL.createObjectURL(videoBlob)} />
        </div>
      )}
    </div>
  );
};

export default VideoCall;
