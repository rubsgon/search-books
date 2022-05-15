import React, {useState} from 'react';
import {Box, Button, Flex, HStack, Input} from 'native-base';

import {useBooks} from '../data/useBooks';

const SearchBar = () => {
  const [book, setBook] = useState<string>('');

  const handleBook = (text: string) => setBook(text);

  const {searchVolumes} = useBooks();

  return (
    <Box mt={8} mx={8}>
      <Flex>
        <HStack space={2}>
          <Input
            value={book}
            onChangeText={handleBook}
            flex={1}
            placeholder="Gostaria de buscar livros?"
          />
          <Button onPress={() => searchVolumes(book)}>Buscar</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default SearchBar;
