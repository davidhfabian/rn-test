import * as React from 'react';

import { HOME_STACK, SETTINGS_STACK } from '~navigation/routes';
import { HomeStack, SettingsStack } from '~navigation';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    title: 'Home',
    name: HOME_STACK.STACK,
    component: HomeStack,
    icon: 'home',
  },
  {
    title: 'Settings',
    name: SETTINGS_STACK.STACK,
    component: SettingsStack,
    icon: 'settings',
  },
];

export default function Root() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {tabs.map(({ name, component, icon, title }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarLabel: title,
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
