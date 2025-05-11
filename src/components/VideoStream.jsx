import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import '../assets/css/VideoStream.css';
import axios from "axios";

const socket = io("https://projectnewbackend1-1.onrender.com"); // Backend server

const VideoStream = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peerConnection = useRef(null);

    const [isCalling, setIsCalling] = useState(false);
    const [incomingCall, setIncomingCall] = useState(false);
    const [incomingOffer, setIncomingOffer] = useState(null);
    const [videoCallLink, setVideoCallLink] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("+919359481880"); // or get from input

    useEffect(() => {
        // Handle incoming offer
        socket.on("offer", async (offer) => {
            console.log("📞 Incoming call offer received");
            setIncomingOffer(offer);
            setIncomingCall(true);
        });

        // Handle incoming answer
        socket.on("answer", async (answer) => {
            if (peerConnection.current) {
                await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
            }
        });

        // Handle ICE candidates
        socket.on("ice-candidate", async (candidate) => {
            try {
                await peerConnection.current?.addIceCandidate(new RTCIceCandidate(candidate));
            } catch (error) {
                console.error("❌ Error adding ICE candidate:", error);
            }
        });

        return () => {
            socket.disconnect(); // Cleanup the socket connection
        };
    }, []);

    const createPeerConnection = () => {
        peerConnection.current = new RTCPeerConnection({
            iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        });

        peerConnection.current.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit("ice-candidate", event.candidate);
            }
        };

        peerConnection.current.ontrack = (event) => {
    if (remoteVideoRef.current) {
        let remoteStream = remoteVideoRef.current.srcObject;
        if (!remoteStream) {
            remoteStream = new MediaStream();
            remoteVideoRef.current.srcObject = remoteStream;
        }
        if (!remoteStream.getTracks().find(t => t.id === event.track.id)) {
            remoteStream.addTrack(event.track);
        }
    }
};

    };

    const acceptCall = async () => {
        setIncomingCall(false);
        createPeerConnection();

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            localVideoRef.current.srcObject = stream;
            stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));

            await peerConnection.current.setRemoteDescription(new RTCSessionDescription(incomingOffer));
            const answer = await peerConnection.current.createAnswer();
            await peerConnection.current.setLocalDescription(answer);
            socket.emit("answer", answer);
            setIsCalling(true);
        } catch (err) {
            console.error("❌ Error accepting call:", err);
        }
    };

    const rejectCall = () => {
        setIncomingCall(false);
        setIncomingOffer(null);
    };

    const startCall = async () => {
        createPeerConnection();

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            localVideoRef.current.srcObject = stream;
            stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));

            const offer = await peerConnection.current.createOffer();
            await peerConnection.current.setLocalDescription(offer);
            socket.emit("offer", offer);
            setIsCalling(true);

            // Send call link via WhatsApp
            await sendSMSWithVideoLink();
        } catch (error) {
            console.error("❌ Error starting call:", error);
        }
    };

    const isValidPhoneNumber = (number) => {
        const regex = /^\+?[1-9]\d{1,14}$/;  // Basic validation for international phone numbers
        return regex.test(number);
    };
const sendSMSWithVideoLink = async () => {
    const videoUrl = "https://us05web.zoom.us/j/84223349123?pwd=IKmZfbMtmJuQsSofbm78f8xi1pzJ1z.1"; // Zoom link

    if (!isValidPhoneNumber(phoneNumber)) {
        alert("❌ Please enter a valid phone number!");
        return;
    }

    try {
        const response = await axios.post("https://projectnewbackend1-1.onrender.com/api/video/send-sms", {
            to: phoneNumber, // Make sure it's in +91 format
            messageBody: `🚨 Your video call is ready! Click here to join:\n${videoUrl}`,
        });

        console.log("✅ SMS response:", response.data);
        setVideoCallLink(videoUrl);
        alert("✅ SMS sent successfully!");
    } catch (error) {
        console.error("❌ Error sending SMS:", error);
        alert("❌ Failed to send SMS!");
    }
};


    const endCall = () => {
        if (peerConnection.current) {
            peerConnection.current.close();
            peerConnection.current = null;
        }
        localVideoRef.current.srcObject?.getTracks().forEach((track) => track.stop());
        remoteVideoRef.current.srcObject = null;
        setIsCalling(false);
    };

    return (
        <div className="video-container">
            <video ref={localVideoRef} autoPlay playsInline className="video" />
            <video ref={remoteVideoRef} autoPlay playsInline className="video" />

            {!isCalling && (
                <div>
                    <label>Enter Phone Number to Send Call Link:</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter phone number"
                    />
                </div>
            )}

            {!isCalling ? (
                <button onClick={startCall}>📞 Start Call</button>
            ) : (
                <button onClick={endCall}>🔴 End Call</button>
            )}

            {incomingCall && (
                <div className="call-popup">
                    <p>📞 Incoming video call</p>
                    <button onClick={acceptCall}>✅ Accept</button>
                    <button onClick={rejectCall}>❌ Reject</button>
                </div>
            )}

            {videoCallLink && (
                <div>
                    <p>📞 Video Call Link: <a href={videoCallLink} target="_blank" rel="noopener noreferrer">{videoCallLink}</a></p>
                </div>
            )}
        </div>
    );
};

export default VideoStream;




