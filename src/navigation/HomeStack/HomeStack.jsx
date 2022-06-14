import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '~screens/Home';
import { HOME_STACK } from '~navigation/routes';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={HOME_STACK.MAIN} component={Home} />
    </Stack.Navigator>
  );
};
