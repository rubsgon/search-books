import React from 'react';
import {Box} from 'native-base';

import HelloUser from './components/HelloUser';
import SearchBar from './components/SearchBar';
import VolumesList from './components/VolumesList';

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
