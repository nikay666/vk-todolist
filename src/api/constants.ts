import {
  AuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';

import { AuthProviderTypes } from './types';

export const AUTH_PROVIDERS: Record<AuthProviderTypes, AuthProvider | null> = {
  [AuthProviderTypes.github]: new GithubAuthProvider(),
  [AuthProviderTypes.google]: new GoogleAuthProvider(),
  [AuthProviderTypes.vk]: null,
};
