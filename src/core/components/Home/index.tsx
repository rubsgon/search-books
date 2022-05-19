import React from 'react';
import {Box} from 'native-base';

import HelloUser from './presentation/HelloUser';
import SearchBar from './presentation/SearchBar';
import VolumesList from './presentation/VolumesList';

const Home = () => {
  return (
    <Box pt={8} flex={1} bg="white">
      <HelloUser />
      <SearchBar />
      <VolumesList />
    </Box>
  );
};

export default Home;
