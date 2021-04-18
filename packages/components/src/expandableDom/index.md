---
title: Expandable-dom
order: 1
nav:
  title: components
  path: /components
  order: 1
---

## Expandable-dom

超长自动可展开容器，传入超过可展开高度（collapseHeight）和展开后最大高度（expandHeight）。

```tsx
import React from 'react';
import { ExpandableDom } from '@lws/components';

const list = [
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
  '测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
];

export default () => {
  return (
    <ExpandableDom collapseHeight={32} expandHeight={128}>
      {list.map((item, index) => (
        <span
          style={{ display: 'inline-block', padding: '5px 10px' }}
          key={index}
        >
          {item}
        </span>
      ))}
    </ExpandableDom>
  );
};
```
