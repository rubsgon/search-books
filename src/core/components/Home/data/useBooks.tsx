import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';

import {BooksState} from '../../../slices/booksSlice';
import {searchVolumes as searchVolumesApi} from '../../../thunks/booksThunk';

export const useBooks = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector<BooksState>(state => state.books);

  const searchVolumes = (text: string) => dispatch(searchVolumesApi(text));

  console.log('selectors', books.volumes);

  return {
    searchVolumes,
    books,
  };
};
