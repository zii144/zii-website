import React from "react";
import { useSpring, animated, useSpringRef, useChain } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import styles from "../style.modal.module.css";

function Modal({ isOpen, onClose, cardData }) {
  const { t } = useTranslation();

  // Fade-in and scale-up animation for modal entrance
  const fadeInRef = useSpringRef();
  const fadeIn = useSpring({
    ref: fadeInRef,
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "scale(1)" : "scale(0.85)",
    config: { tension: 180, friction: 200, duration: 450 },
  });

  // Pulse animation, slower and more subtle for elegance
  const pulseRef = useSpringRef();
  const pulse = useSpring({
    ref: pulseRef,
    loop: true,
    from: { scale: 1 },
    to: { scale: 1.03 },
    config: { duration: 1500, easing: (t) => t * (2 - t) }, // Ease-out for smooth effect
  });

  // Chain animations: show fade-in first, then pulse
  useChain(isOpen ? [fadeInRef, pulseRef] : [pulseRef, fadeInRef], [
    0,
    isOpen ? 0.3 : 0,
  ]);

  if (!isOpen) return null;

  const skillType = cardData?.skillType;
  const title = t(`skills.cards.${skillType}.title`);
  const description = t(`skills.cards.${skillType}.description`);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <animated.div
        className={styles.modalContent}
        style={{
          ...fadeIn,
          transform: fadeIn.transform.to((t) => `${t} ${pulse.scale}`),
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.modalTitle}>{title}</h2>
        <img
          src={
            "https://i2.wp.com/www.wendyzhou.se/blog/wp-content/uploads/2019/08/uixninja.png?fit=1600%2C1200&ssl=1"
          }
          alt="Card"
          className={styles.modalImage}
          style={pulse}
        />
        <p className={styles.modalDescription}>{description}</p>
        <button onClick={onClose} className={styles.closeButton}>
          關閉
        </button>
      </animated.div>
    </div>
  );
}

export default Modal;
