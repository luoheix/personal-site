import React from 'react';
import { useMouse, useSize } from 'ahooks';
import styles from './index.less';

interface BlowupType {
  src: string;
  imgRef: React.RefObject<HTMLImageElement>;
  multiple?: number;
  lensSize?: number;
}

const Blowup: React.FC<BlowupType> = ({
  src,
  imgRef,
  multiple = 2.5,
  lensSize = 240,
}) => {
  const mouse = useMouse();
  const { width: bgWidth = 0, height: bgHeight = 0 } = useSize(imgRef);

  const imgClient = imgRef?.current?.getBoundingClientRect();
  const position = {
    left: (mouse.clientX || 0) - (imgClient?.x ?? 0),
    top: (mouse.clientY || 0) - (imgClient?.y ?? 0),
  };

  const lensStyle: React.CSSProperties = {
    backgroundImage: `url(${src})`,
    backgroundColor: '#fff',
    backgroundPosition: `${-position.left * multiple +
      lensSize / 2 -
      6}px ${-position.top * multiple + lensSize / 2 - 6}px`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${bgWidth * multiple}px ${bgHeight * multiple}px`,
    left: position.left - lensSize / 2,
    top: position.top - lensSize / 2,
    width: lensSize,
    height: lensSize,
  };

  return <div className={styles.blowupLens} style={lensStyle} />;
};

export default Blowup;
