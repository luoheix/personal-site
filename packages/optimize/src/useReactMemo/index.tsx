import React, { useState } from 'react';
import ListItem from './ListItem';
import styles from './index.less';

const defaultList = [
  { id: '1', sum: 0 },
  { id: '2', sum: 0 },
  { id: '3', sum: 0 },
  { id: '4', sum: 0 },
  { id: '5', sum: 0 },
  { id: '6', sum: 0 },
  { id: '7', sum: 0 },
  { id: '8', sum: 0 },
  { id: '9', sum: 0 },
  { id: '10', sum: 0 },
  { id: '11', sum: 0 },
  { id: '12', sum: 0 },
  { id: '13', sum: 0 },
  { id: '14', sum: 0 },
  { id: '15', sum: 0 },
  { id: '1ew1', sum: 0 },
  { id: '21', sum: 0 },
  { id: '31', sum: 0 },
  { id: '41', sum: 0 },
  { id: '51', sum: 0 },
  { id: '61', sum: 0 },
  { id: '71', sum: 0 },
  { id: '81', sum: 0 },
  { id: '91', sum: 0 },
  { id: '110', sum: 0 },
  { id: '111', sum: 0 },
  { id: '112', sum: 0 },
  { id: '113', sum: 0 },
  { id: '114', sum: 0 },
  { id: '115', sum: 0 },
  { id: '1q2', sum: 0 },
  { id: '22', sum: 0 },
  { id: '32', sum: 0 },
  { id: '42', sum: 0 },
  { id: '52', sum: 0 },
  { id: '62', sum: 0 },
  { id: '72', sum: 0 },
  { id: '82', sum: 0 },
  { id: '92', sum: 0 },
  { id: '120', sum: 0 },
  { id: '121', sum: 0 },
  { id: '122', sum: 0 },
  { id: '123', sum: 0 },
  { id: '124', sum: 0 },
  { id: '125', sum: 0 },
  { id: '1e3', sum: 0 },
  { id: '23', sum: 0 },
  { id: '33', sum: 0 },
  { id: '43', sum: 0 },
  { id: '53', sum: 0 },
  { id: '63', sum: 0 },
  { id: '73', sum: 0 },
  { id: '83', sum: 0 },
  { id: '93', sum: 0 },
  { id: '130', sum: 0 },
  { id: '131', sum: 0 },
  { id: '132', sum: 0 },
  { id: '133', sum: 0 },
  { id: '134', sum: 0 },
  { id: '135', sum: 0 },
  { id: '1q4', sum: 0 },
  { id: '24', sum: 0 },
  { id: '34', sum: 0 },
  { id: '44', sum: 0 },
  { id: '54', sum: 0 },
  { id: '64', sum: 0 },
  { id: '74', sum: 0 },
  { id: '84', sum: 0 },
  { id: '94', sum: 0 },
  { id: '140', sum: 0 },
  { id: '141', sum: 0 },
  { id: '142', sum: 0 },
  { id: '143', sum: 0 },
  { id: '144', sum: 0 },
  { id: '145', sum: 0 },
];
export default () => {
  const [list, setList] = useState(defaultList);

  const onChange = (id: string, value: number) => {
    setList(prev =>
      prev.map(item => ({ ...item, sum: item.id === id ? value : item.sum })),
    );
  };

  return (
    <div className={styles.list}>
      {list.map((item) => {
        return (
          <div className={styles.item} key={`${item.id}`}>
            <ListItem data={item} onChange={onChange} />
          </div>
        );
      })}
    </div>
  );
};
