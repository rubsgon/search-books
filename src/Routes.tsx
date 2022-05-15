import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './core/components/Home';

const Routes = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default Routes;
