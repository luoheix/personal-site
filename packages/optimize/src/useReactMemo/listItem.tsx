import React from 'react';
import { InputNumber } from 'antd';
import { isEqual } from 'lodash';
import bearImg from '../assets/images/bear.png';

interface ListProps {
  data: {
    id: string;
    sum: number;
  };
  onChange: (id: string, value: number) => void;
}

const ListItem: React.FC<ListProps> = ({ data, onChange }) => {
  console.log('render');
  return (
    <div>
      <img src={bearImg} alt="bear" />
      <h3>{`标题${data.id}`}</h3>
      <h4>{`已添加 ${data.sum || 0} 项`}</h4>
      <InputNumber
        style={{ width: '100%' }}
        defaultValue={0}
        onChange={value => onChange(data.id, value)}
      />
    </div>
  );
};

const isMemoEqual = (prevProps: ListProps, nextProps: ListProps) => {
  return isEqual(prevProps.data, nextProps.data);
};

export default React.memo(ListItem, isMemoEqual);
