import React, {useState} from 'react';
import {Box, Button, Flex, HStack, Input, Spinner} from 'native-base';
import {Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {useBooks} from '../../../hooks/useBooks';

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearchText = (text: string) => setSearchText(text);

  const {searchVolumes, volumes} = useBooks();

  return (
    <Box mt={5} mx={8}>
      <Flex>
        <HStack space={2}>
          <Input
            value={searchText}
            onChangeText={handleSearchText}
            flex={1}
            placeholder="Gostaria de buscar livros?"
          />
          {searchText === '' || (
            <Button
              bg="gray.600"
              startIcon={
                volumes.isLoading ? (
                  <></>
                ) : (
                  <Icon name="search" size={15} color="white" />
                )
              }
              onPress={() => {
                searchVolumes(searchText);
                Keyboard.dismiss();
              }}>
              {volumes.isLoading ? <Spinner color="white" /> : null}
            </Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};

export default SearchBar;
