import React from 'react';

import ToDoListItem, { ToDoListItemProps } from '../ToDoListItem';
import style from './index.module.css';

interface Props {
  items: ToDoListItemProps[];
}

const ToDoList: React.FC<Props> = ({ items }) => {
  return (
    <ul className={style.root}>
      {items.map(item => (
        <ToDoListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ToDoList;
