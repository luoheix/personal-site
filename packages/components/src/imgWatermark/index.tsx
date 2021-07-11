import React, { useRef } from 'react';
import { useHover } from 'ahooks';
import styles from './index.less';

export interface ImgWatermarkProps {
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

const ImgWatermark: React.FC<ImgWatermarkProps> = ({
  src = undefined,
  multiple = 2,
  lensSize = 200,
  radius = 50,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const isHovering = useHover(imgRef);

  return <div className={styles.imgWatermark}></div>;
};

export default ImgWatermark;
