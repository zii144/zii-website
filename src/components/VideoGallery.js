import React, { useState } from "react";
import styles from "../style.videoGallery.module.css";

const VideoGallery = () => {
  const [currentVideo, setCurrentVideo] = useState("");

  const videoList = [
    { id: 0, url: "", title: "" },
    { id: 1, url: "", title: "" },
    { id: 2, url: "", title: "" },
  ];

  return (
    <div className={styles.videoGalleryContainer}>
      {/* Header Section */}
      <h1 className={styles.videoGalleryHeader}>Explore My Works</h1>

      {/* Main Video Player */}
      <div className={styles.videoGalleryPlayerContainer}>
        <iframe
          src={currentVideo}
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoGalleryPlayer}
        ></iframe>
      </div>

      {/* Circular Buttons */}
      <div className={styles.videoGalleryButtonContainer}>
        {videoList.map((video) => (
          <button
            key={video.id}
            className={`${styles.videoGalleryButton} ${
              currentVideo === video.url ? styles.active : ""
            }`}
            onClick={() => setCurrentVideo(video.url)}
            title={video.title}
          >
            <span className={styles.buttonText}>{video.id}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
