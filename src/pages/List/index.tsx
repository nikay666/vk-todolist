import React from 'react';

import { Group } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import AddNewTaskForm from '../../components/AddNewTaskForm';
import ToDoList from '../../components/ToDoList';

const ListPage = () => {
  return (
    <Group>
      <AddNewTaskForm />
      <ToDoList />
    </Group>
  );
};

export default ListPage;
