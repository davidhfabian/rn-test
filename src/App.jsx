import * as React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Root from '~navigation/Root';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Root />
    </SafeAreaView>
  );
};

export default App;
