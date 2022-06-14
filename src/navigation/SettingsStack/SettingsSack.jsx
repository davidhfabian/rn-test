import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Settings from '~screens/Settings';
import { SETTINGS_STACK } from '~navigation/routes';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SETTINGS_STACK.MAIN} component={Settings} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
