import React, { useState, useRef } from 'react';

const VideoCapture = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        setVideoUrl(URL.createObjectURL(blob));
        chunksRef.current = [];
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Camera access error:', err);
      alert("Camera access denied or not available!");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    const tracks = videoRef.current.srcObject.getTracks();
    tracks.forEach((track) => track.stop());
    setIsRecording(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>🎥 Record Your Video</h2>
      <video ref={videoRef} autoPlay muted style={{ width: '80%', border: '2px solid #ccc' }} />
      <br /><br />
      {!isRecording ? (
        <button onClick={startRecording}>Start Recording</button>
      ) : (
        <button onClick={stopRecording}>Stop Recording</button>
      )}
      {videoUrl && (
        <div>
          <h3>Preview:</h3>
          <video controls src={videoUrl} style={{ width: '80%' }} />
        </div>
      )}
    </div>
  );
};

export default VideoCapture;
