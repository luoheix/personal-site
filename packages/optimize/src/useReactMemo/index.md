---
title: Use-react-memo
order: 1
nav:
  title: Optimize
  path: /optimize
  order: 3
---

## noReactMemo

为进行拆分和优化，对某个输入框进行连续输入会出现卡顿问题，并且会 render 多次。

```tsx
import React from 'react';
import { NoReactMemo } from '@lws/optimize';

export default () => <NoReactMemo />;
```

## useReactMemo

组件拆分并且使用 React.Memo 优化，输入框进行连续输入表现流畅，并且只会 render 一次。

```tsx
import React from 'react';
import { UseReactMemo } from '@lws/optimize';

export default () => <UseReactMemo />;
```
