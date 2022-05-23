import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './core/components/Home';
import VolumeDetails from './core/components/VolumeDetails';

const Routes = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="VolumeDetails" component={VolumeDetails} />
    </Navigator>
  );
};

export default Routes;
