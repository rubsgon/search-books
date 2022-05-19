import React from 'react';
import {Center} from 'native-base';

const ErrorThumbnail = () => (
  <Center w={100} h={142} bg="gray.400">
    <Center _text={{color: 'white', textAlign: 'center'}}>
      Nenhuma imagem disponível
    </Center>
  </Center>
);

export default ErrorThumbnail;
