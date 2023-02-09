import React, { useState } from 'react';

import { Icon20AddAlt } from '@vkontakte/icons';
import { FormLayout, Input } from '@vkontakte/vkui';

const AddNewTaskForm = () => {
  const [value, setValue] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setValue('');
  };

  return (
    <FormLayout id="add-new-task" onSubmit={submitHandler}>
      <Input
        {...{
          id: 'name',
          before: <Icon20AddAlt />,
          defaultValue: value,
          value,
          onChange: changeHandler,
        }}
      />
    </FormLayout>
  );
};

export default AddNewTaskForm;
