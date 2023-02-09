import React from 'react';

import { Cell, Group, Header } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import AddNewTaskForm from '../../components/AddNewTaskForm';
import ToDoList from '../../components/ToDoList';

const LoginPage = () => {
  return (
    <Group>
      <Header mode="secondary">Выберите способ авторизации</Header>
      <Cell>Google</Cell>
      <Cell>Github</Cell>
      <Cell>VK</Cell>
    </Group>
  );
};

export default LoginPage;
