## AutoScrollTable

自适应自动滚动表格，超过父元素无限循环自动滚动，父元素必须有高度，除第一列其他列必须设置宽度。  
**拖拽浏览器使其高度小于表格高度**

```tsx
import React from 'react';
import Mock from 'mockjs';
import { ColumnsType } from 'antd/lib/table';
import { AutoScrollTable } from '@lws/components';

interface tableItem {
  id: string;
  name: string;
  oneNum: number;
  sum: number;
  threeNum: number;
  number: number;
}

const dataSource: tableItem[] = Mock.mock({
  'list|4': [
    {
      id: '@id',
      name: '@cname',
      'oneNum|1-100': 100,
      'sum|1-100': 100,
      'threeNum|1-100': 100,
      'number|+1': 0,
    },
  ],
})?.list;

export default () => {
  const columns: ColumnsType<tableItem> = [
    {
      title: '名称',
      dataIndex: 'name',
      ellipsis: true,
      render: (text, record) => `${text}测试名称（${record.number}）`,
    },
    {
      title: '第一数量',
      dataIndex: 'oneNum',
      align: 'right',
      width: '21%',
    },
    {
      title: '第二数量',
      dataIndex: 'sum',
      align: 'right',
      width: '21%',
    },
    {
      title: '第三数量',
      dataIndex: 'threeNum',
      align: 'right',
      width: '21%',
      render: text => `${text}%`,
    },
  ];

  return (
    <div style={{ height: '30vh' }}>
      <AutoScrollTable dataSource={dataSource} columns={columns} />
    </div>
  );
};
```

<API src="../../packages/components/src/autoScrollTable/index.tsx"></API>
