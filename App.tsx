import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Container, NativeBaseProvider, Text} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Container>
          <Text>Ola, Rubens</Text>
        </Container>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
