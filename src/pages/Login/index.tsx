import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { Cell, Group, Header } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { getAuth } from 'firebase/auth';

import { useActions } from '~/hooks/useActions';

import { AuthProviderTypes, authWithProviders } from '~/api';

const LoginPage = () => {
  const { addUser } = useActions();
  const auth = getAuth();

  const [user, loading] = useAuthState(auth);

  if (user && !loading) {
    return <Navigate to="/" replace />;
  }

  const authHandler = async (type: AuthProviderTypes) => {
    const user = await authWithProviders(type);
    addUser(user);
  };

  return (
    <Group>
      <Header mode="secondary">Выберите способ авторизации</Header>
      <Cell onClick={() => authHandler(AuthProviderTypes.google)}>Google</Cell>
      <Cell onClick={() => authHandler(AuthProviderTypes.github)}>Github</Cell>
    </Group>
  );
};

export default LoginPage;
