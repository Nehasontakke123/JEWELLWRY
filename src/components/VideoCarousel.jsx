import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../assets/css/VideoCarousel.css";

import video1 from "../assets/video/Rings.mp4";
import video2 from "../assets/video/DIAMOND.mp4";
import video3 from "../assets/video/Jewellery Promotional video 1.mp4";
import video4 from "../assets/video/Enchanting Bridal Collections.mp4";
import video5 from "../assets/video/SARAVANA.mp4";
// import video6 from "../assets/video/The rose gold ring.mp4";

const videoList = [
  { title: "", src: video1, views: "2.1k", likes: "1.4k" },
  { title: "", src: video2, views: "3.8k", likes: "2.2k" },
  { title: "", src: video3, views: "1.5k", likes: "890" },
  { title: "", src: video4, views: "4.2k", likes: "3.1k" },
  { title: "", src: video5, views: "2.7k", likes: "1.9k" },
  // { title: "", src: video6, views: "5.4k", likes: "4.2k" },
];

const VideoCarousel = () => {
  const swiperRef = useRef(null);
  const [reactions, setReactions] = useState([]);
  const [showFirework, setShowFirework] = useState(false);

  const handleSlideClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  const handleReaction = (emoji) => {
    const id = Date.now();
    setReactions((prev) => [...prev, { id, emoji }]);
    setTimeout(() => {
      setReactions((prev) => prev.filter((r) => r.id !== id));
    }, 2000); // remove after 2s
  };

  const handleVideoEnded = () => {
    setShowFirework(true);
    setTimeout(() => setShowFirework(false), 3000);
  };

  return (
    <div className="video-carousel-wrapper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="video-swiper"
        ref={swiperRef}
      >
        {videoList.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-card" onClick={() => handleSlideClick(index)}>
              <video
                className="carousel-video"
                src={video.src}
                controls
                muted
                loop
                preload="metadata"
                onEnded={handleVideoEnded}
              />
              <div className="carousel-caption">
                <p className="video-title">{video.title}</p>
                <div className="video-stats">
                  <span>👁️ {video.views} views</span>
                  <span>❤️ {video.likes} likes</span>
                </div>
              </div>

              {/* Floating Reactions */}
              <div className="reactions-float">
                {reactions.map((r) => (
                  <span key={r.id} className="float-emoji">
                    {r.emoji}
                  </span>
                ))}
              </div>

              {/* Fireworks */}
              {showFirework && <div className="fireworks">🎆🎇✨</div>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Reaction Buttons */}
      <div className="reaction-buttons">
        <button onClick={() => handleReaction("❤️")}>❤️</button>
        <button onClick={() => handleReaction("😍")}>😍</button>
        <button onClick={() => handleReaction("🔥")}>🔥</button>
      </div>
    </div>
  );
};

export default VideoCarousel;



