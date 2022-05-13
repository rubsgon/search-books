import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

import Routes from './src/Routes';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
