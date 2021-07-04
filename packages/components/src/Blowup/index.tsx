import React, { useRef } from 'react';
import { useHover } from 'ahooks';
import styles from './index.less';
import BlowupLens from './blowupLens';

export interface BlowupType {
  /**
   * @description 图片地址
   */
  src: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  /**
   * @description 放大倍数
   */
  multiple?: number;
  /**
   * @description 镜面尺寸
   */
  lensSize?: number;
  /**
   * @description 镜面边框圆角度数
   */
  radius?: number;
}

const Blowup: React.FC<BlowupType> = ({
  src = undefined,
  multiple = 2,
  lensSize = 200,
  radius = 50,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const isHovering = useHover(imgRef);

  return (
    <div className={styles.blowup}>
      <img src={src} ref={imgRef} />
      {isHovering && (
        <div className={styles.blowupLens}>
          <BlowupLens
            imgRef={imgRef}
            src={src}
            multiple={multiple}
            lensSize={lensSize}
            radius={radius}
          />
        </div>
      )}
    </div>
  );
};

export default Blowup;
