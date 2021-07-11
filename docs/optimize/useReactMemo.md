---
nav:
  title: Optimize
  order: 3
---

## ReactMemo

文档地址：[利用组件化思想 + React.memo 进行渲染速度优化 · 黑熊君](https://www.yuque.com/luowenshuai/design/upbohr)

## noReactMemo（不优化）

为进行拆分和优化，对某个输入框进行连续输入会出现卡顿问题，并且会 render 多次。

```tsx
import React from 'react';
import { NoReactMemo } from '@lws/optimize';

export default () => <NoReactMemo />;
```

## useReactMemo（优化）

组件拆分并且使用 React.Memo 优化，输入框进行连续输入表现流畅，并且只会 render 一次。

```tsx
import React from 'react';
import { UseReactMemo } from '@lws/optimize';

export default () => <UseReactMemo />;
```
