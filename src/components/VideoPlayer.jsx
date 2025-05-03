import React, { useState } from "react";
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
import video6 from "../assets/video/The rose gold ring.mp4";
import video7  from '../assets/video/Glint and Glow Jewellery.mp4'

const videoList = [
  { title: "Rings Collection", src: video1 },
  { title: "Diamond Shine", src: video2 },
  { title: "Golden Elegance", src: video3 },
  { title: "Bridal Jewellery", src: video4 },
  { title: "Royal Style", src: video5 },
  { title: "Rose Gold Beauty", src: video6 },
  { title: "Rose Gold Beauty", src: video7 },
];

const VideoCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideo(null);
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
      >
        {videoList.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-card" onClick={() => openModal(video.src)}>
              <video
                className="carousel-video"
                src={video.src}
                muted
                loop
                preload="metadata"
              />
              <div className="carousel-caption">
                <p>{video.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal Fullscreen Video */}
      {showModal && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>✕</button>
            <video src={currentVideo} controls autoPlay className="modal-video" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
