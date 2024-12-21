import React from "react";
import styles from "../../style.videoPlayer.module.css";

const VideoCard = ({ video, isActive, onClick }) => {
  return (
    <div
      className={`${styles.videoCard} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoCard;
