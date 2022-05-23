import {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  searchVolumes as searchVolumesApi,
  searchVolume as searchVolumeApi,
  getMyFavorites as getMyFavoritesApi,
} from '../thunks/booksThunk';
import {Volume, Volumes} from '../types';

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

  const searchVolumes = (text: string) =>
    dispatch(searchVolumesApi({text, startIndex: 0, maxResults: 10}));

  const searchMoreVolumes = () => {
    if (books.volumes.items.length <= 30) {
      dispatch(
        searchVolumesApi({
          text: books.volumes.search,
          startIndex: 0,
          maxResults: books.volumes.items.length + 10,
        }),
      );
    }
  };

  const searchVolume = useCallback(
    (id: string) => dispatch(searchVolumeApi(id)),
    [dispatch],
  );

  return {
    searchVolumes,
    searchVolume,
    searchMoreVolumes,
    volumes: books.volumes as Volumes,
    volume: books.volume as Volume,
    myFavorites: books.myFavorites as Volumes,
  };
};
