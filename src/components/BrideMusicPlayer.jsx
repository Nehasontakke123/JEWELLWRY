// import React from 'react'; 
import React, { useEffect, useRef, useState } from "react";
import "../assets/css/BrideMusicPlayer.css";

const BrideMusicPlayer = ({ music, lyrics = [] }) => {
  const audioRef = useRef(null);
  const [currentLine, setCurrentLine] = useState("");

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      const currentTime = audio.currentTime;

      if (!Array.isArray(lyrics)) return;

      for (let i = lyrics.length - 1; i >= 0; i--) {
        if (currentTime >= lyrics[i].time) {
          setCurrentLine(lyrics[i].text);
          break;
        }
      }
    };

    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [lyrics]);

  return (
    <div className="music-player">
      <audio controls autoPlay ref={audioRef} className="audio-control">
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="lyrics-container">
        <p className="karaoke-line">{currentLine}</p>
      </div>
    </div>
  );
};

export default BrideMusicPlayer;

