import React from 'react';

import {
  AppRoot,
  Cell,
  Group,
  Header,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  View,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import AddNewTaskForm from '../../components/AddNewTaskForm';
import ToDoList from '../../components/ToDoList';

const App = () => {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Todo list</PanelHeader>
              <Group>
                <AddNewTaskForm />
                <ToDoList />
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
