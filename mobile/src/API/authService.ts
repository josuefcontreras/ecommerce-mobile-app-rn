import {SigninCredentials, SigninRequestResponse} from '../types';
import {requests} from './config';

export const authService = {
  signin: (credentials: SigninCredentials) =>
    requests.post<SigninRequestResponse>('/signin', credentials),
  signup: (credentials: SigninCredentials) =>
    requests.post<SigninRequestResponse>('/signup', credentials),
};
export default authService;
