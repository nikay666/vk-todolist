import React from 'react';

import { List, Placeholder } from '@vkontakte/vkui';

import ToDoListItem, { ToDoListItemProps } from '../ToDoListItem';
import style from './index.module.css';

const items: ToDoListItemProps[] = [
  {
    id: '1',
    checked: false,
    value: 'My task',
  },
  {
    id: '2',
    checked: true,
    value: 'My task 1',
  },
];

const ToDoList = () => {
  return (
    <ul className={style.root}>
      {items.length === 0 ? (
        <Placeholder>Добавьте первую задачу</Placeholder>
      ) : (
        items.map(item => <ToDoListItem {...item} />)
      )}
    </ul>
  );
};

export default ToDoList;
