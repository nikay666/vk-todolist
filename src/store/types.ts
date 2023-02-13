export interface ToDoListItem {
  userId: string;
  id: string;
  checked: boolean;
  value: string;
}

export interface User {
  isAuth: boolean;
  avatar?: string;
  name: string;
}
