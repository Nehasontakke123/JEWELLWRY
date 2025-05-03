import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import '../assets/css/RecordReel.css';

import song1 from '../assets/music/reel1.mp3';
import song2 from '../assets/music/reel2.mp3';
import song3 from '../assets/music/reel3.mp3';
import song4 from '../assets/music/reel4.mp3';
import song5 from '../assets/music/reel5.mp3';

const predefinedSongs = [
  { title: "", url: song1 },
  { title: "Kesariya", url: song2 },
  { title: "Apna Bana Le 1", url: song3 },
  { title: "Apna Bana Le 2", url: song4 },
  { title: "Apna Bana Le 3", url: song5 }
];

const filters = [
  { name: "None", class: "filter-none" },
  { name: "Sepia", class: "filter-sepia" },
  { name: "Grayscale", class: "filter-grayscale" },
  { name: "Brightness", class: "filter-brightness" },
  { name: "Contrast", class: "filter-contrast" },
  { name: "Lark", class: "filter-lark" },
  { name: "Clarendon", class: "filter-clarendon" },
  { name: "Juno", class: "filter-juno" },
  { name: "Valencia", class: "filter-valencia" },
  { name: "Vintage", class: "filter-vintage" },
  { name: "Cool", class: "filter-cool" },
  { name: "Warm", class: "filter-warm" },
  { name: "Pink", class: "filter-pink" },
];

const RecordReel = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [caption, setCaption] = useState('');
  const [selectedSong, setSelectedSong] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [chunks, setChunks] = useState([]);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('filter-none');
  const [videoBlobUrl, setVideoBlobUrl] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    const initCamera = async () => {
      const streamData = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(streamData);
      if (videoRef.current) {
        videoRef.current.srcObject = streamData;
      }
    };
    initCamera();
  }, []);

  const handleSongChange = (e) => {
    const selected = e.target.value;
    const song = predefinedSongs.find(s => s.title === selected);
    setSelectedSong(selected);
    setSongUrl(song?.url || '');
  };

  const startRecording = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;

    const drawFrame = () => {
      if (!isRecording) return;
      ctx.filter = getComputedStyle(videoRef.current).filter;
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(drawFrame);
    };
    drawFrame();

    const canvasStream = canvas.captureStream(30);
    let audioStream;

    if (songUrl) {
      const audio = new Audio(songUrl);
      audio.loop = true;
      audio.play();
      audioRef.current = audio;

      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaElementSource(audio);
      const dest = audioCtx.createMediaStreamDestination();
      source.connect(dest);
      source.connect(audioCtx.destination);
      audioStream = dest.stream;
    }

    const combinedStream = new MediaStream([
      ...canvasStream.getVideoTracks(),
      ...(audioStream ? audioStream.getAudioTracks() : stream.getAudioTracks())
    ]);

    const recorder = new MediaRecorder(combinedStream);
    mediaRecorderRef.current = recorder;
    const localChunks = [];

    recorder.ondataavailable = (e) => localChunks.push(e.data);

    recorder.onstop = async () => {
      const blob = new Blob(localChunks, { type: 'video/webm' });
      const formData = new FormData();
      formData.append('video', blob);
      formData.append('caption', caption);
      formData.append('songTitle', selectedSong);
      formData.append('songUrl', songUrl);

      setVideoBlobUrl(URL.createObjectURL(blob));

      try {
        await axios.post('https://projectnewbackend1-1.onrender.com/api/reels/', formData);
        alert("Reel uploaded successfully!");
      } catch (err) {
        alert("Upload failed!");
      }

      setCaption('');
      setSelectedSong('');
      setSongUrl('');
    };

    recorder.start();
    setIsRecording(true);
    setChunks(localChunks);
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = videoBlobUrl;
    a.download = 'reel.webm';
    a.click();
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim() !== '') {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  return (
    <div className="record-container">
      <h2>🎬 Create Your Reel</h2>

      <video
        ref={videoRef}
        autoPlay
        muted
        className={`reel-video ${selectedFilter}`}
        style={{ width: '100%', borderRadius: '10px' }}
      />

      <input
        type="text"
        placeholder="Caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      <select value={selectedSong} onChange={handleSongChange}>
        <option value="">🎵 Select a Song</option>
        {predefinedSongs.map((song, idx) => (
          <option key={idx} value={song.title}>{song.title}</option>
        ))}
      </select>

      <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
        <option value="">🎨 Select a Filter</option>
        {filters.map((filter, i) => (
          <option key={i} value={filter.class}>{filter.name}</option>
        ))}
      </select>

      {songUrl && <audio controls><source src={songUrl} type="audio/mp3" /></audio>}

      {!isRecording ? (
        <button onClick={startRecording}>🔴 Start Recording</button>
      ) : (
        <button onClick={stopRecording}>⏹ Stop & Upload</button>
      )}

      {videoBlobUrl && (
        <div className="reel-controls">
          <video controls src={videoBlobUrl} className="recorded-video" />
          <div className="reel-actions">
            <button onClick={handleLike}>❤️ Like ({likes})</button>
            <button onClick={handleDownload}>⬇️ Download</button>
          </div>

          <div className="comments-section">
            <input
              type="text"
              placeholder="Add comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
            <button onClick={handleCommentSubmit}>💬 Post</button>
            <ul>
              {comments.map((c, i) => <li key={i}>👉 {c}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecordReel;
