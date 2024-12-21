import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import styles from "../../style.videoPlayer.module.css";

const videoData = [
  {
    id: 1,
    title: "EP01 - Pilot",
    description: "The journey begins.",
    date: "2023-05-01",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "EP02 - Mother’s Day",
    description: "A heartfelt episode.",
    date: "2023-06-10",
    thumbnail: "https://img.youtube.com/vi/3fumBcKC6RE/mqdefault.jpg",
    url: "https://www.youtube.com/watch?v=3fumBcKC6RE",
  },
];

const VideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);
  const [activeCard, setActiveCard] = useState(videoData[0].id);
  const [isVisible, setIsVisible] = useState(true);
  const hideTimeout = useRef(null);

  const handleCardClick = (video) => {
    setCurrentVideo(video);
    setActiveCard(video.id);
  };

  // Toggle video list visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    resetAutoHide();
  };

  // Auto-hide logic (after 5 seconds of inactivity)
  const resetAutoHide = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5 seconds auto-hide
  };

  useEffect(() => {
    resetAutoHide(); // Start auto-hide timer on load
    return () => clearTimeout(hideTimeout.current); // Cleanup timer on unmount
  }, []);

  return (
    <div className={styles.videoPlayerPage}>
      <div className={styles.videoPlayerContainer}>
        <ReactPlayer
          url={currentVideo.url}
          playing
          controls
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { showinfo: 1, controls: 0 },
            },
          }}
        />
      </div>

      {/* Toggle Button */}
      <button className={styles.toggleButton} onClick={toggleVisibility}>
        {isVisible ? "Hide List" : "Show List"}
      </button>

      {/* Scrollable Video List */}
      <div
        className={`${styles.videoListContainer} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        {videoData.map((video) => (
          <div
            key={video.id}
            className={`${styles.videoCard} ${
              activeCard === video.id ? styles.expanded : ""
            }`}
            onClick={() => handleCardClick(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className={styles.videoThumbnail}
            />
            <div className={styles.videoInfo}>
              <h3>{video.title}</h3>
              {activeCard === video.id && (
                <div className={styles.videoDetail}>
                  <p>{video.description}</p>
                  <small>Editing Date: {video.date}</small>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
