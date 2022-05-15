import React from 'react';
import {Box} from 'native-base';

import HelloUser from './presentation/HelloUser';
import SearchBar from './presentation/SearchBar';

const Home = () => {
  return (
    <Box mt={8}>
      <HelloUser />
      <SearchBar />
    </Box>
  );
};

export default Home;
