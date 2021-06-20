import React from 'react';
import { useMouse } from 'ahooks';
import styles from './index.less';

interface BlowupLensType {
  src: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  imgRef: React.RefObject<HTMLImageElement>;
  multiple: number;
  lensSize: number;
  radius: number;
}

const BlowupLens: React.FC<BlowupLensType> = ({
  src,
  imgRef,
  multiple,
  lensSize,
  radius,
}) => {
  const mouse = useMouse();

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
    backgroundSize: `${(imgClient?.width || 0) *
      multiple}px ${(imgClient?.height || 0) * multiple}px`,
    left: position.left - lensSize / 2,
    top: position.top - lensSize / 2,
    width: lensSize,
    height: lensSize,
    borderRadius: `${radius}%`,
  };

  return <div className={styles.blowupLens} style={lensStyle} />;
};

export default BlowupLens;
