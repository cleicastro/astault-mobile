import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import Apontamentos from '../screens/Apontamentos';
import NewApontamento from '../screens/NewApontamento';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'apontamentos';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: '#BB6BD9',
      }}>
      <BottomTab.Screen
        name="apontamentos"
        component={Apontamentos}
        options={{
          title: 'Apontamentos',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="newApontamento"
        component={NewApontamento}
        options={{
          title: 'Novo Apontamento',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'newApontamento':
      return 'Novo Apontamento';
    case 'apontamentos':
      return 'Apontamentos';
  }
}
