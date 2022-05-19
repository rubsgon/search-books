import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {
  searchVolumes as searchVolumesApi,
  getMyFavorites as getMyFavoritesApi,
} from '../../../thunks/booksThunk';
import {Volume, Volumes} from '../domain';

export const useBooks = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth);
  const books = useAppSelector(state => state.books);

  useEffect(() => {
    if (auth.accessToken) {
      dispatch(getMyFavoritesApi());
    }
  }, [auth, dispatch]);

  console.log('selectors', books);

  const searchVolumes = (text: string) => dispatch(searchVolumesApi(text));

  return {
    searchVolumes,
    volumes: books.volumes as Volumes,
    volume: books.volume as Volume,
    myFavorites: books.myFavorites as Volumes,
  };
};
