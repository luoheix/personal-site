import React, { useRef } from 'react';
import { nanoid } from 'nanoid';
import Style from 'style-it';
import styles from './index.less';

const getScrollStyle = (width: number, length: number) => {
  const key = nanoid();
  return `@keyframes rowup${key} {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      display: none;
      -webkit-transform: translate3d(-${width * length}px, 0, 0);
      transform: translate3d(-${width * length}px, 0, 0);
    }
  }
  .auto-scroll-card {
    height: 100%;
    position: relative;
    -webkit-animation: rowup${key} ${(width * length) /
    50}s linear infinite normal;
    animation: rowup${key} ${(width * length) / 50}s linear infinite normal;
    animation-duration: ${(width * length) / 50}s;
  }
  .auto-scroll-card:hover {
    animation-play-state: paused;
  }`;
};

interface AutoScrollRowProps {
  listLength: number;
  rowWidth: number;
  // oneScreenNum: number;
}

const AutoScrollRow: React.FC<AutoScrollRowProps> = ({
  children,
  rowWidth,
  listLength,
}) => {
  const scrollParentRef = useRef<any>();

  return (
    <div className={styles.autoScrollRow}>
      <div className={styles.scrollContent} ref={scrollParentRef}>
        {Style.it(
          getScrollStyle(rowWidth, listLength),
          <div className="auto-scroll-card">
            <div className={styles.content}>
              <div className={styles.children}>{children}</div>
            </div>
          </div>,
        )}
      </div>
    </div>
  );
};

export default AutoScrollRow;
