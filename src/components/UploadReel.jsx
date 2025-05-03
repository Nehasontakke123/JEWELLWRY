// src/components/UploadReel.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadReel = () => {
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [songUrl, setSongUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video) return alert('Please select a video file');

    const formData = new FormData();
    formData.append('video', video);
    formData.append('caption', caption);
    formData.append('songTitle', songTitle);
    formData.append('songUrl', songUrl);

    try {
      await axios.post('https://projectnewbackend1-1.onrender.com/api/reels', formData);
      alert("Reel uploaded!");
      setVideo(null);
      setCaption('');
      setSongTitle('');
      setSongUrl('');
    } catch (err) {
      alert("Error uploading");
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Reel 🎬</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
        <input type="text" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
        <input type="text" placeholder="Song Title" value={songTitle} onChange={(e) => setSongTitle(e.target.value)} />
        <input type="text" placeholder="Song URL (optional)" value={songUrl} onChange={(e) => setSongUrl(e.target.value)} />
        <button type="submit">Upload Reel</button>
      </form>
    </div>
  );
};

export default UploadReel;
