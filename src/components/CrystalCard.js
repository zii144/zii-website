import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Modal from "react-modal";
import YouTube from "react-youtube";
import styles from "../style.skill.module.css";

const CrystalCard = ({ skill, videoId }) => {
  const [isHovered, setHovered] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // React-Spring Animation
  const springStyle = useSpring({
    transform: isHovered
      ? "scale(1.05) rotateX(10deg)"
      : "scale(1) rotateX(0deg)",
    boxShadow: isHovered
      ? "0px 15px 30px rgba(0, 212, 255, 0.5)"
      : "0px 8px 20px rgba(0, 0, 0, 0.2)",
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <animated.div
        className={styles.crystalCard}
        style={springStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={openModal}
      >
        <div className={styles.crystalCardContent}>
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.name.toLowerCase()}/${skill.name.toLowerCase()}-original.svg`}
            alt={`${skill.name} icon`}
            className={styles.skillIcon}
          />
          <div className={styles.textContent}>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <p className={styles.skillDescription}>{skill.description}</p>
          </div>
        </div>
      </animated.div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        ariaHideApp={false}
      >
        <button className={styles.closeButton} onClick={closeModal}>
          ✕
        </button>
        <YouTube
          videoId={videoId}
          className={styles.youtubePlayer}
          opts={{
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
      </Modal>
    </>
  );
};

export default CrystalCard;
