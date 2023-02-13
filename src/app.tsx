import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, redirect } from 'react-router-dom';

import {
  AppRoot,
  Avatar,
  Panel,
  PanelHeader,
  Spinner,
  SplitCol,
  SplitLayout,
  View,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { auth } from './api/firebaseConfig';
import LogoutButton from './components/LogoutButton';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

const App = () => {
  const [firebaseUser, loading] = useAuthState(auth);
  const { addUser } = useActions();
  const user = useTypedSelector(state => state.user);

  const isLogined = firebaseUser && !loading;

  useEffect(() => {
    if (firebaseUser) addUser(firebaseUser);
  }, [loading]);


  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader
                after={
                  isLogined ? (
                    <>
                      <Avatar size={36} src={user.avatar} />
                      <LogoutButton />
                    </>
                  ) : null
                }
              >
                Todo list
              </PanelHeader>

              {loading ? <Spinner size="large" /> : <Outlet />}
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
