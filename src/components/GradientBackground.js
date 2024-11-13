import React from 'react';
import { animated, useSpring, config } from '@react-spring/web';
import styles from '../style.gradient.background.module.css';

const GradientBackground = () => {
    const [{ background }] = useSpring(
        () => ({
          from: { background: 'var(--step0)' },
          to: [
            { background: 'var(--step0)' },
            { background: 'var(--step1)' },
            { background: 'var(--step2)' },
            { background: 'var(--step3)' },
            { background: 'var(--step4)' },
          ],
          config: config.molasses,
          loop: {
            reverse: true,
          },
        }),
        []
      )
    
      return (
        <div className={styles.container}>
          <animated.div className={styles.block} style={{ background }} />
          <animated.div className={styles.background} style={{ background }} />
        </div>
      )
}

export default GradientBackground;