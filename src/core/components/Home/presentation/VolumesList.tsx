import React from 'react';
import {Box, FlatList} from 'native-base';

import {useBooks} from '../hooks/useBooks';
import VolumesItem from './VolumesItem';

const VolumesList = () => {
  const {volumes, myFavorites} = useBooks();

  return (
    <Box mt={5} flex={1}>
      <FlatList
        data={volumes?.items}
        renderItem={({item}) => (
          <VolumesItem item={item} items={myFavorites?.items} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

export default VolumesList;
