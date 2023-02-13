import React, { useEffect, useRef, useState } from 'react';

import { Icon28EditOutline } from '@vkontakte/icons';
import { Icon28DeleteOutlineAndroid } from '@vkontakte/icons';
import { Cell, IconButton, Text } from '@vkontakte/vkui';

import { useActions } from '~/hooks/useActions';

import style from './index.module.css';

export interface ToDoListItemProps {
  userId: string;
  id: string;
  checked: boolean;
  value: string;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({
  checked,
  id,
  userId,
  value: defaultValue,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isChecked, setIsChecked] = useState(checked);
  const [value, setValue] = useState(defaultValue);

  const { removeItem, editItem } = useActions();

  const inputRef = useRef<HTMLInputElement>(null);

  const editToggle = () => setIsEditMode(prev => !prev);

  const deleteHandler = () => removeItem({ userId, id });

  const selectHandler = () => {
    setIsChecked(prev => !prev);

    editItem({
      userId,
      id,
      checked: !isChecked,
      value,
    });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const editHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    editItem({
      userId,
      id,
      checked: !isChecked,
      value,
    });
    setIsEditMode(prev => !prev);
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
            <IconButton aria-label="Редактировать" onClick={editToggle}>
              <Icon28EditOutline />
            </IconButton>
            <IconButton aria-label="Удалить" onClick={deleteHandler}>
              <Icon28DeleteOutlineAndroid />
            </IconButton>
          </>
        ),

        Component: 'li',
        className: style.root,
        name: id,
        hasHover: false,
        hasActive: false,
        mode: 'selectable',
        checked: isChecked,
        onChange: selectHandler,
      }}
    >
      {isEditMode ? (
        <input
          {...{
            ref: inputRef,
            className: style.input,
            value: value,
            onChange: changeHandler,
            onKeyDown: editHandler,
          }}
        />
      ) : (
        <Text className={isChecked ? style.completed : ''}>{value}</Text>
      )}
    </Cell>
  );
};

export default ToDoListItem;
