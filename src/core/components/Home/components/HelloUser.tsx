import React from 'react';
import {Box, Container, Text} from 'native-base';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {isEmpty} from 'lodash';

import {useAuth} from '../../../hooks/useAuth';

const HelloUser = () => {
  const {auth, signIn} = useAuth();

  return (
    <Box mx={8}>
      {isEmpty(auth.userInfo?.user) ? (
        <Container>
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Standard}
            style={{marginTop: 10}}
            onPress={signIn}
          />
        </Container>
      ) : (
        <Text fontSize="2xl">{`Olá, ${auth.userInfo?.user?.name}!`}</Text>
      )}
    </Box>
  );
};

export default HelloUser;
