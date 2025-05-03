// src/components/ReelFeed.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/ReelFeed.css';

const ReelFeed = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    const fetchReels = async () => {
      const res = await axios.get('https://projectnewbackend1-1.onrender.com/api/reels');
      setReels(res.data);
    };
    fetchReels();
  }, []);

  return (
    <div className="reel-feed">
      {reels.map((reel) => (
        <div className="reel" key={reel._id}>
          <video src={`https://projectnewbackend1-1.onrender.com${reel.videoUrl}`} controls autoPlay muted loop />
          <div className="caption-overlay">
            <h4>{reel.caption}</h4>
            <p>🎵 {reel.songTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReelFeed;
