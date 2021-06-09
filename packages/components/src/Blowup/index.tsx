import React, { useRef } from 'react';
import { useHover } from 'ahooks';
import styles from './index.less';
import BlowupLens from './BlowupLens';

interface BlowupType {
  src: string;
  imgWidth?: string | number;
  imgHeight?: string | number;
  multiple?: number;
  lensSize?: number;
}

const Blowup: React.FC<BlowupType> = ({
  src,
  imgWidth = '100%',
  imgHeight = '100%',
  multiple,
  lensSize,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const isHovering = useHover(imgRef);

  return (
    <div className={styles.blowup}>
      <img
        src={src}
        ref={imgRef}
        style={{ width: imgWidth, height: imgHeight }}
      />
      {isHovering && (
        <BlowupLens
          imgRef={imgRef}
          src={src}
          multiple={multiple}
          lensSize={lensSize}
        />
      )}
    </div>
  );
};

export default Blowup;
