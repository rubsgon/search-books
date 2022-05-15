import React, {useState} from 'react';
import {Box, Button, Flex, HStack, Input, Spinner} from 'native-base';

import {useBooks} from '../hooks/useBooks';
import {useAppSelector} from '../../../../redux/hooks';

const SearchBar = () => {
  const [book, setBook] = useState<string>('');
  const isLoading = useAppSelector(state => state.books.volumes.isLoading);

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
          {book === '' || (
            <Button onPress={() => searchVolumes(book)}>
              {isLoading ? <Spinner color="white" /> : 'Buscar'}
            </Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};

export default SearchBar;
