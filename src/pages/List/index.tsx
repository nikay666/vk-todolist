import React, { useEffect, useState } from 'react';

import { Group, PanelSpinner, Placeholder } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { useTypedSelector } from '~/hooks/useTypedSelector';

import { useAppDispatch } from '~/store';
import { fetchList } from '~/store/list.slice';

import AddNewTaskForm from '../../components/AddNewTaskForm';
import ToDoList from '../../components/ToDoList';

const ListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const user = useTypedSelector(state => state.user);
  const items = useTypedSelector(state => state.list);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchList(user.id)).then(res => {
      if (res.type.match('fulfilled')) setIsLoading(false);
    });
  }, [user.id]);

  return (
    <Group>
      <AddNewTaskForm />

      {isLoading && <PanelSpinner />}

      {!items.length && !isLoading && (
        <Placeholder>Добавьте первую задачу</Placeholder>
      )}
      {!!items.length && !isLoading && <ToDoList items={items} />}
    </Group>
  );
};

export default ListPage;
