import React from 'react';
import {  Outlet } from 'react-router-dom';


import {
  AppRoot,
  Panel,
  PanelHeader,
  
  SplitCol,
  SplitLayout,
  View,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import LogoutButton from './components/LogoutButton';

const App = () => {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader after={<LogoutButton />}>Todo list</PanelHeader>
              <Outlet />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
