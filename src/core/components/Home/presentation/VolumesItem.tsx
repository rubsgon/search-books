import React from 'react';
import {Box, Image, Text, Center, Container} from 'native-base';
import {isEmpty} from 'lodash';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Volume, Volumes} from '../domain';
import ErrorThumbnail from '../../../../common/ErrorThumbnail';
import {useAuth} from '../hooks/useAuth';

type VolumesItemProps = {
  item: Volume;
  items: Volumes;
};

const VolumesItem = ({item, items}: VolumesItemProps) => {
  const {auth, signIn} = useAuth();

  const isFavorite = () =>
    items?.filter(itemFavorited => itemFavorited.id === item.id).length > 0;

  console.log(auth);

  const handleToggleFavorite = () => {
    if (isEmpty(auth.userInfo?.user)) {
      signIn();
    } else {
      console.log('favoritou!');
    }
  };

  const handleVolumeDetails = () => {
    console.log(item.id);
  };

  return (
    <TouchableOpacity onPress={handleVolumeDetails}>
      <Box mt={3} px={2} p={2} flexDirection="row" bg="gray.200">
        <TouchableOpacity
          onPress={handleToggleFavorite}
          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
          style={{
            position: 'absolute',
            zIndex: 1,
            right: 0,
            marginTop: 10,
            marginRight: 10,
          }}>
          <Box>
            <Icon
              name={isFavorite() ? 'favorite' : 'favorite-border'}
              size={25}
              color={isFavorite() ? 'red' : 'grey'}
            />
          </Box>
        </TouchableOpacity>
        <Center mr={2}>
          {item.volumeInfo?.imageLinks?.smallThumbnail ? (
            <Image
              source={{uri: item.volumeInfo?.imageLinks?.smallThumbnail}}
              resizeMode="stretch"
              w={100}
              h={142}
            />
          ) : (
            <ErrorThumbnail />
          )}
        </Center>
        <Container flexDirection="column" flex={1}>
          <Text fontSize="xl" color="red" w="80%">
            {item.volumeInfo?.title}
          </Text>
          <Text fontSize="xs" mt={4}>
            {`${item.volumeInfo?.authors} - ${item.volumeInfo?.publishedDate}`}
          </Text>
          <Text fontSize="sm" mt={2}>
            {item.searchInfo?.textSnippet || 'não há visualização'}
          </Text>
        </Container>
      </Box>
    </TouchableOpacity>
  );
};

export default VolumesItem;
