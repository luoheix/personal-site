---
nav:
  title: Components
  order: 1
---

## Blowup

图片放大镜

```tsx
import React, { useState } from 'react';
import { InputNumber, Form } from 'antd';
import { Blowup } from '@lws/components';
import scenery from '../../packages/components/src/assets/images/scenery.jpg';

export default () => {
  const [multiple, setMultiple] = useState(2);
  const [lensSize, setLensSize] = useState(200);
  const [radius, setRadius] = useState(50);

  return (
    <React.Fragment>
      <Form layout="inline">
        <Form.Item label="放大倍数">
          <InputNumber
            min={1}
            max={10}
            value={multiple}
            onChange={setMultiple}
          />
        </Form.Item>
        <Form.Item label="镜面大小">
          <InputNumber
            min={100}
            max={500}
            value={lensSize}
            onChange={setLensSize}
          />
        </Form.Item>
        <Form.Item label="镜面边框圆角度数">
          <InputNumber min={0} max={50} value={radius} onChange={setRadius} />
        </Form.Item>
      </Form>
      <div style={{ marginTop: 24, width: 500, border: '2px solid #000' }}>
        <Blowup
          src={scenery}
          multiple={multiple}
          lensSize={lensSize}
          radius={radius}
        />
      </div>
    </React.Fragment>
  );
};
```

<API src="../../packages/components/src/blowup/index.tsx"></API>
