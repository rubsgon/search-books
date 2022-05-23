import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {signIn as signInApi} from '../thunks/authThunk';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/books'],
      webClientId:
        '554874270517-3lrqcsoj3df2182lrkdav4vkk6dqs1a8.apps.googleusercontent.com',
    });
  }, []);

  const signIn = () => dispatch(signInApi());

  return {
    signIn,
    auth,
  };
};
