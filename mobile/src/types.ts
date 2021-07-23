import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Product} from './models';

import {User} from './models/User';

export type MainTabParamList = {
  Home: undefined;
};

export type AuthStackParamList = {
  Signin: undefined;
  Signup: undefined;
};

export type ProductListStackParamList = {
  ProductList: undefined;
  ProductDetail: {product: Product};
};

export type SigninScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Signin'
>;

export type SignupScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Signup'
>;

export type AccountScreenNavigationProp = StackNavigationProp<
  MainTabParamList,
  'Home'
>;

export type ProductListScreenNavigationProp = StackNavigationProp<
  ProductListStackParamList,
  'ProductList'
>;

export type SigninScreenRouteProp = RouteProp<AuthStackParamList, 'Signin'>;

export type SigninCredentials = {
  email: string;
  password: string;
};

export type SigninError = {
  message: string;
  code: number;
};

export type SigninRequestResponse = {
  token: string;
  user: User;
};

// ====================================
// Auth context types
//=====================================

export type AuthContext = {
  authState: AuthState;
  actionFunctions: AuthBoundActionFunctions;
};

export type AuthState = {
  user?: User;
  signedinToken?: string;
  isSigningin: boolean;
  authError: string;
};

export interface AuthBoundActionFunctions
  extends ContextBoundActionFunctions<AuthBoundActionFunctionsParams> {
  tryLocalSignin: ContextBoundActionFunction;
  signin: ContextBoundActionFunctionWithParams<AuthBoundActionFunctionsParams>;
  signup: ContextBoundActionFunctionWithParams<AuthBoundActionFunctionsParams>;
  signout: ContextBoundActionFunction;
  clearError: ContextBoundActionFunction;
}

export interface AuthBoundActionFunction extends ContextBoundActionFunction {}

export interface AuthBoundActionFunctionWithParams<BoundActionFunctionsParams>
  extends ContextBoundActionFunctionWithParams<BoundActionFunctionsParams> {}

export type AuthBoundActionFunctionsParams = {
  credentials: SigninCredentials;
};

export type AuthAction =
  | {type: 'set_signedinToken'; payload: string}
  | {type: 'set_signingin'; payload: boolean}
  | {type: 'set_signedin'; payload: SigninRequestResponse}
  | {type: 'set_signError'; payload: string}
  | {type: 'set_signedout'};

export type AuthProviderProps = {children: React.ReactNode};

export interface AuthActionFunctions
  extends ContextActionFunctions<AuthAction, AuthBoundActionFunctionsParams> {
  tryLocalSignin(
    dispatch: ContextDispatch<AuthAction>,
  ): ContextBoundActionFunction;
  signin(
    dispatch: ContextDispatch<AuthAction>,
  ): ContextBoundActionFunctionWithParams<AuthBoundActionFunctionsParams>;
  signup(
    dispatch: ContextDispatch<AuthAction>,
  ): ContextBoundActionFunctionWithParams<AuthBoundActionFunctionsParams>;
  signout(dispatch: ContextDispatch<AuthAction>): ContextBoundActionFunction;
  clearError(dispatch: ContextDispatch<AuthAction>): ContextBoundActionFunction;
}

// ====================================
// Root context types
//=====================================
export type ContextActionFunctions<Action, BoundActionFunctionsParams> = {
  [key: string]:
    | ContextActionFunction<Action>
    | ContextActionFunctionWithParams<Action, BoundActionFunctionsParams>;
};

export type ContextActionFunction<Action> = (
  dispatch: React.Dispatch<Action>,
) => ContextBoundActionFunction;

export type ContextActionFunctionWithParams<
  Action,
  BoundActionFunctionsParams,
> = (
  dispatch: React.Dispatch<Action>,
) => ContextBoundActionFunctionWithParams<BoundActionFunctionsParams>;

export type ContextBoundActionFunctions<BoundActionFunctionsParams> = {
  [key: string]:
    | ContextBoundActionFunction
    | ContextBoundActionFunctionWithParams<BoundActionFunctionsParams>;
};

export type ContextBoundActionFunction = () => Promise<void>;

export type ContextBoundActionFunctionWithParams<BoundActionFunctionsParams> = (
  params: BoundActionFunctionsParams,
) => Promise<void>;

export type ContextDispatch<Actions> = (value: Actions) => void;
