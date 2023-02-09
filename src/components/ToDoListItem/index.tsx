import React, { useEffect, useRef, useState } from 'react';

import { Icon28EditOutline } from '@vkontakte/icons';
import { Icon28DeleteOutlineAndroid } from '@vkontakte/icons';
import { Cell, IconButton, Text } from '@vkontakte/vkui';

import style from './index.module.css';

export interface ToDoListItemProps {
  id: string;
  checked: boolean;
  value: string;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({
  checked,
  id,

  value: defaultValue,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isChecked, setIsChecked] = useState(checked);
  const [value, setValue] = useState(defaultValue);

  const inputRef = useRef<HTMLInputElement>(null);

  const editHandler = () => {
    setIsEditMode(prev => !prev);
  };

  const deleteHandler = () => {};

  const selectHandler = () => {
    setIsChecked(prev => !prev);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (isEditMode) {
      inputRef.current?.focus();
    }
  }, [isEditMode]);

  return (
    <Cell
      {...{
        after: (
          <>
            <IconButton onClick={editHandler}>
              <Icon28EditOutline />
            </IconButton>
            <IconButton onClick={deleteHandler}>
              <Icon28DeleteOutlineAndroid />
            </IconButton>
          </>
        ),

        Component: 'li',
        className: style.root,
        hasHover: false,
        hasActive: false,
        mode: 'selectable',
        name: id,

        checked: isChecked,
        onChange: selectHandler,
      }}
    >
      {isEditMode ? (
        <input
          ref={inputRef}
          className={style.input}
          defaultValue={value}
          onChange={changeHandler}
        />
      ) : (
        <Text className={isChecked ? style.completed : ''}>{value}</Text>
      )}
    </Cell>
  );
};

export default ToDoListItem;
