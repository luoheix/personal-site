import React, { useRef } from 'react';
import { Table, TableProps } from 'antd';
import { nanoid } from 'nanoid';
import { useSize } from 'ahooks';
import { ColumnsType } from 'antd/lib/table';
import Style from 'style-it';
import styles from './index.less';

const animatKey = nanoid();

const getScrollStyle = (rowHeight: number, length: number) => {
  return `@keyframes rowup${animatKey} {
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
    -webkit-animation: rowup${animatKey} ${length *
    1.5}s linear infinite normal;
    animation: rowup${animatKey} ${length * 1.5}s linear infinite normal;
    animation-duration: ${length * 1.5}s;
  }`;
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
  const scrollParentSize = useSize(scrollParentRef);

  const isScroll = (scrollSize?.height ?? 0) > (scrollParentSize?.height ?? 0);

  const tableProps: TableProps<any> = {
    size: 'small',
    rowKey: 'id',
    showHeader: false,
    pagination: false,
    columns,
  };

  const rowHeight = (scrollSize?.height ?? 0) / (dataSource?.length ?? 0);

  console.log(rowHeight, dataSource?.length, 'dataSource?.length');

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
        {isScroll
          ? Style.it(
              getScrollStyle(rowHeight, dataSource?.length ?? 0),
              <div className="auto-scroll-table">
                <Table
                  {...tableProps}
                  dataSource={[
                    ...(dataSource || []),
                    ...(dataSource || []),
                  ].map(item => ({
                    ...item,
                    id: nanoid(),
                  }))}
                />
              </div>,
            )
          : null}
        <div
          ref={scrollRef}
          style={
            isScroll
              ? {
                  visibility: 'hidden',
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                }
              : {}
          }
        >
          <Table
            {...tableProps}
            dataSource={dataSource?.map(item => ({ ...item, id: nanoid() }))}
          />
        </div>
      </div>
    </div>
  );
};
