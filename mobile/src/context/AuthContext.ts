import { authService } from "../API";
import { deleteLocal, getValueFor, saveLocal } from "../helpers";
import createDataContext from "./createDataContext";
import {
  AuthContext,
  AuthAction,
  AuthActionFunctions,
  AuthBoundActionFunctionsParams,
  AuthBoundActionFunctions,
} from "../types";

export const initialAuthState: AuthContext = {
  authState: {
    user: undefined,
    signedinToken: undefined,
    isSigningin: false,
    authError: "",
  },
  actionFunctions: {} as AuthBoundActionFunctions,
};

export const authReducer = (state: AuthContext, action: AuthAction) => {
  switch (action.type) {
    case "set_signedinToken": {
      let newAuthContext: AuthContext = {
        ...state,
        authState: { ...state.authState, signedinToken: action.payload },
      };
      return newAuthContext;
    }
    case "set_signingin": {
      let newAuthContext: AuthContext = {
        ...state,
        authState: { ...state.authState, isSigningin: action.payload },
      };
      return newAuthContext;
    }
    case "set_signedin": {
      let newAuthContext: AuthContext = {
        ...state,
        authState: {
          ...state.authState,
          user: action.payload.user,
          signedinToken: action.payload.token,
          isSigningin: false,
          authError: "",
        },
      };
      return newAuthContext;
    }
    case "set_signError": {
      let newAuthContext: AuthContext = {
        ...state,
        authState: {
          ...state.authState,
          isSigningin: false,
          authError: action.payload,
        },
      };
      return newAuthContext;
    }
    case "set_signedout": {
      let newAuthContext: AuthContext = {
        ...state,
        authState: {
          ...state.authState,
          user: undefined,
          signedinToken: undefined,
          isSigningin: false,
          authError: "",
        },
      };
      return newAuthContext;
    }
  }
};

const actionFunctions: AuthActionFunctions = {
  tryLocalSignin(dispatch) {
    return async () => {
      try {
        const token = await getValueFor("signedinToken");
        if (token == null) {
          return;
        } else {
          dispatch({ type: "set_signedinToken", payload: token });
        }
      } catch (error) {
        console.log(error);
      }
    };
  },
  signin(dispatch) {
    return async function (params) {
      dispatch({ type: "set_signingin", payload: true });
      try {
        const res = await authService.signin(params.credentials);
        await saveLocal("signedinToken", res.token);
        dispatch({ type: "set_signedin", payload: res });
      } catch (error) {
        dispatch({ type: "set_signError", payload: "Invalid credentials" });
        console.log(error);
      } finally {
        dispatch({ type: "set_signingin", payload: false });
      }
    };
  },
  signup(dispath) {
    return async (params) => {
      dispath({ type: "set_signingin", payload: true });
      try {
        const res = await authService.signup(params.credentials);
        await saveLocal("signedinToken", res.token);
        dispath({ type: "set_signedin", payload: res });
      } catch (error) {
        dispath({ type: "set_signError", payload: "Invalid credentials" });
        console.log(error);
      } finally {
        dispath({ type: "set_signingin", payload: false });
      }
    };
  },
  signout(dispath) {
    return async () => {
      dispath({ type: "set_signingin", payload: true });
      try {
        await deleteLocal("signedinToken");
        dispath({ type: "set_signedout" });
      } catch (error) {
        console.log(error);
      } finally {
        dispath({ type: "set_signingin", payload: false });
      }
    };
  },
  clearError(dispath) {
    return async () => {
      try {
        dispath({ type: "set_signError", payload: "" });
      } catch (error) {
        console.log(error);
      }
    };
  },
};

export const { Context, Provider } = createDataContext<
  AuthContext,
  AuthAction,
  AuthBoundActionFunctionsParams,
  AuthBoundActionFunctions,
  AuthActionFunctions
>(initialAuthState, authReducer, actionFunctions);
