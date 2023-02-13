import React, { useState } from 'react';

import { Icon20AddAlt } from '@vkontakte/icons';
import { FormLayout, Input } from '@vkontakte/vkui';

import { useActions } from '~/hooks/useActions';
import { useTypedSelector } from '~/hooks/useTypedSelector';

const AddNewTaskForm = () => {
  const [value, setValue] = useState('');
  const user = useTypedSelector(state => state.user);
  const { addItem } = useActions();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    addItem({ userId: user.id, value });
    setValue('');
  };

  return (
    <FormLayout id="add-new-task" onSubmit={submitHandler}>
      <Input
        {...{
          id: 'name',
          before: <Icon20AddAlt />,
          value,
          onChange: changeHandler,
          placeholder: 'Добавьте новую задачу'
        }}
      />
    </FormLayout>
  );
};

export default AddNewTaskForm;
