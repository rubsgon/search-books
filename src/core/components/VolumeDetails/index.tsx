import React, {useEffect} from 'react';
import {Box, Image, ScrollView, Text} from 'native-base';
import {useRoute} from '@react-navigation/native';
import {useBooks} from '../../hooks/useBooks';

type ParamsType = {
  params: {
    id: string;
  };
};

const VolumeDetails = () => {
  const {
    params: {id},
  } = useRoute<ParamsType>();

  const {searchVolume, volume} = useBooks();

  const getVolume = () => {
    searchVolume(id);
  };

  useEffect(() => {
    getVolume();
  }, []);

  return (
    <Box flex={1} bg="white" mt={3}>
      <Box flexDirection="row">
        <Image
          source={{uri: volume.volumeInfo?.imageLinks?.thumbnail}}
          resizeMode="contain"
          w={200}
          h={242}
        />
        <Box flex={1}>
          <Text fontSize={24}>{volume.volumeInfo?.title}</Text>
          <Text
            color="gray.500"
            mt={3}>{`Por: ${volume.volumeInfo?.authors}`}</Text>
          <Text color="gray.500">{`Publicação: ${volume.volumeInfo?.publishedDate}`}</Text>
          <Text color="gray.500">{`Páginas: ${volume.volumeInfo?.pageCount}`}</Text>
          <Text color="gray.500">{`Editora: ${volume.volumeInfo?.publisher}`}</Text>
          <Text color="gray.500">{`Formato: ${volume.volumeInfo?.printType}`}</Text>
          <Text color="gray.500">{`Idioma: ${volume.volumeInfo?.language}`}</Text>
          <Text color="gray.500">{`ISBN: ${volume.volumeInfo?.industryIdentifiers[0]?.identifier}, ${volume.volumeInfo?.industryIdentifiers[1]?.identifier}`}</Text>
        </Box>
      </Box>
      <ScrollView flex={1} mx={5} mt={10}>
        <Text fontSize={12} textAlign="center">
          {volume.volumeInfo?.description}
        </Text>
      </ScrollView>
    </Box>
  );
};

export default VolumeDetails;
