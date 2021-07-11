import React, { useState, useRef } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { useSize, useUpdateEffect } from 'ahooks';
import classNames from 'classnames';
import styles from './index.less';

interface ExpandableDomProps {
  children: React.ReactElement;
  /**
   * @description 收起高
   */
  collapseHeight: number;
  /**
   * @description 展开高
   */
  expandHeight?: number;
  /**
   * @description 收起展开变化时的回调
   */
  onChange?: (expand: boolean) => void;
}

const ExpandableDom: React.FC<ExpandableDomProps> = ({
  children,
  collapseHeight,
  expandHeight,
  onChange,
}) => {
  const [expand, setExpand] = useState<boolean>(false);
  const expandRef = useRef(null);
  const expandSize = useSize(expandRef);

  // 切换
  const onExpand = () => {
    setExpand(!expand);
  };

  useUpdateEffect(() => {
    if (typeof onChange === 'function') {
      onChange(expand);
    }
  }, [expand]);

  // 展开样式
  const expandStyle = expand
    ? {
        maxHeight: expandHeight || '100vh',
        overflow: expandHeight ? 'auto' : 'hidden',
        transition: 'all 0.3s',
      }
    : {
        maxHeight: collapseHeight,
      };

  // 展开按钮
  const expandable = !!expandSize?.height && expandSize.height > collapseHeight;
  return (
    <div className={styles.expandableDom}>
      <div
        className={classNames(styles.miniScrollbar, styles.content)}
        style={expandStyle}
      >
        <div ref={expandRef}>{children}</div>
      </div>
      {expandable && (
        <a
          style={{ marginLeft: 24, lineHeight: `${collapseHeight}px` }}
          onClick={onExpand}
        >
          {expand ? '收起' : '展开'}
          <DownOutlined
            className={styles.downIcon}
            style={{
              transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </a>
      )}
    </div>
  );
};

export default ExpandableDom;
