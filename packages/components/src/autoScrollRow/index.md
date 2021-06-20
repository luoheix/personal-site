---
title: Auto-scroll-row
order: 1
nav:
  title: components
  path: /components
  order: 1
---

## Auto-scroll-row

横向自动滚动表格，父元素必须有宽度。

```tsx
import React from 'react';
import { AutoScrollRow } from '@lws/components';
import { Card } from 'antd';
import { nanoid } from 'nanoid';
import Mock from 'mockjs';

interface tableItem {
  name: string;
  oneNum: number;
  sum: number;
  threeNum: number;
  number: number;
}

const dataSource: tableItem[] = Mock.mock({
  'list|4': [
    {
      name: '@cname',
      'oneNum|1-100': 100,
      'sum|1-100': 100,
      'threeNum|1-100': 100,
      'number|+1': 0,
    },
  ],
})?.list;

const loop = <T, U>(dataSource: T[], num: number) => {
  let i = 0;
  let loopList: T[] = [];
  while (i < num) {
    loopList = [...loopList, ...dataSource];
    i += 1;
  }
  return loopList;
};

const scrollList = (() => {
  switch (dataSource?.length) {
    case 1:
      return loop(dataSource, 4);
      break;
    case 2:
      return loop(dataSource, 3);
    case 3:
      return loop(dataSource, 2);
    default:
      return [...dataSource, ...dataSource.filter((item, index) => index < 2)];
  }
})().map(item => ({
  ...item,
  id: nanoid(),
}));

export default () => {
  return (
    <div style={{ height: 270 }}>
      <AutoScrollRow rowWidth={320} listLength={dataSource?.length || 0}>
        {scrollList.map(item => (
          <Card
            key={item.id}
            title={item.name}
            extra={<a href="#">更多</a>}
            style={{ width: 300, marginLeft: 20 }}
          >
            <p style={{ fontWeight: 'bold', fontSize: 20 }}>
              序号：{item.number}
            </p>
            <p>第一数量：{item.oneNum}</p>
            <p>第一数量：{item.sum}</p>
            <p>第一数量：{item.threeNum}</p>
          </Card>
        ))}
      </AutoScrollRow>
    </div>
  );
};
```

<API />
