import React from 'react';
import {Box, FlatList, Spinner} from 'native-base';

import {useBooks} from '../../../hooks/useBooks';
import VolumesItem from './VolumesItem';

const VolumesList = () => {
  const {volumes, myFavorites, searchMoreVolumes} = useBooks();

  return (
    <Box mt={5} flex={1}>
      <FlatList
        data={volumes?.items}
        renderItem={({item}) => (
          <VolumesItem item={item} items={myFavorites?.items} />
        )}
        showsVerticalScrollIndicator={false}
        onEndReached={() => searchMoreVolumes()}
        onEndReachedThreshold={0}
        ListFooterComponent={
          volumes.isLoading ? <Spinner color="black" /> : null
        }
      />
    </Box>
  );
};

export default VolumesList;
