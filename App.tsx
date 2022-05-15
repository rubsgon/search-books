import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import Routes from './src/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
