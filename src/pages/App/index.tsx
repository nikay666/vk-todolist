import React from "react";
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  Cell,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";


const App = () => {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Todo list</PanelHeader>
              <Group header={<Header mode="secondary">Items</Header>}>
                <Cell {...{ mode: "removable", after: <div>Hello</div> }}>
                  <div>Hello</div>
                </Cell>
                <Cell>World</Cell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
