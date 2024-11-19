import React, { useState, useRef } from "react";
import { animated, to, useSprings } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import Modal from "./ZModal";
import cardData from "../data/cardData"; // Correct import

import styles from "../style.card.stack.module.css";

const toSpring = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const fromSpring = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cardData.length, (i) => ({
    ...toSpring(i),
    from: fromSpring(i),
  }));

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const isDraggingRef = useRef(false);
  const movementThreshold = 10; // Movement threshold to detect dragging

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;

      // Set dragging state based on movement
      isDraggingRef.current = down && Math.abs(mx) > movementThreshold;

      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === cardData.length) {
        setTimeout(() => {
          gone.clear();
          api.start((i) => toSpring(i));
        }, 600);
      }
    }
  );

  const openModal = (card) => {
    setTimeout(() => {
      if (!isDraggingRef.current) {
        // Check dragging state with a delay
        setSelectedCard(card);
        setModalOpen(true);
      }
    }, 0); // Set a minimal delay to allow state updates
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: to([rot, scale], trans),
              backgroundImage: `url(${cardData[i].url})`,
              //backgroundImage: `url(https://drive.google.com/thumbnail?id=1gnnO1juWKUm_xuU94PI7naVzH_8GkQwT&sz=w1000)`,
              //backgroundImage: `url(${cardData[i].url})`,
            }}
            onClick={() => openModal(cardData[i])}
          />
        </animated.div>
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        cardData={selectedCard}
      />
    </>
  );
}

export default function ZCardStack() {
  return (
    <div className={styles.container}>
      <Deck />
    </div>
  );
}
