import React, { useRef } from 'react';
import { Table, TableProps } from 'antd';
import { nanoid } from 'nanoid';
import { useSize } from 'ahooks';
import { ColumnsType } from 'antd/lib/table';
import Style from 'style-it';
import styles from './index.less';

const getScrollStyle = (rowHeight: number, length: number) => {
  const key = nanoid();
  return `@keyframes rowup${key} {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      display: none;
      -webkit-transform: translate3d(0, -${rowHeight * length}px, 0);
      transform: translate3d(0, -${rowHeight * length}px, 0);
    }
  }
  .auto-scroll-table {
    position: relative;
    -webkit-animation: rowup${key} ${length * 1.5}s linear infinite normal;
    animation: rowup${key} ${length * 1.5}s linear infinite normal;
    animation-duration: ${length * 1.5}s;
  }
  .auto-scroll-table:hover {
    animation-play-state: paused;
  }`;
};

const loop = <T, U>(dataSource: T[], num: number) => {
  let i = 0;
  let loopList: T[] = [];
  while (i < num) {
    loopList = [...loopList, ...dataSource];
    i += 1;
  }
  return loopList;
};

export default <T, U>({
  dataSource,
  columns,
}: {
  dataSource: T[];
  columns: ColumnsType<any>;
}) => {
  const scrollRef = useRef<any>();
  const scrollParentRef = useRef<any>();
  const scrollSize = useSize(scrollRef);

  const scrollData = (() => {
    switch (dataSource?.length) {
      case 1:
        return loop(dataSource, 5);
        break;
      case 2:
        return loop(dataSource, 3);
      case 3:
        return loop(dataSource, 2);
      default:
        return dataSource;
    }
  })();

  const tableProps: TableProps<any> = {
    size: 'small',
    rowKey: 'id',
    showHeader: false,
    pagination: false,
    columns,
  };

  // 表格行高
  const rowHeight = (scrollSize?.height ?? 0) / (scrollData?.length ?? 0);

  return (
    <div className={styles.autoScrollTable}>
      <Table
        className={styles.tableHeader}
        size="small"
        rowKey="id"
        pagination={false}
        columns={columns}
      />
      <div className={styles.scrollContent} ref={scrollParentRef}>
        {Style.it(
          getScrollStyle(rowHeight, scrollData?.length ?? 0),
          <div className="auto-scroll-table">
            <Table
              {...tableProps}
              dataSource={[...(scrollData || []), ...(scrollData || [])].map(
                item => ({
                  ...item,
                  id: nanoid(),
                }),
              )}
            />
          </div>,
        )}
        <div
          ref={scrollRef}
          style={{ visibility: 'hidden', position: 'absolute', top: 0 }}
        >
          <Table
            {...tableProps}
            dataSource={scrollData?.map(item => ({ ...item, id: nanoid() }))}
          />
        </div>
      </div>
    </div>
  );
};
