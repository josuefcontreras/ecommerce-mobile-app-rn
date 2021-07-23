import {
  LocationAction,
  LocationActionFunctions,
  LocationBoundActionFunctions,
  LocationBoundActionFunctionsParams,
  LocationContext,
} from "../types";
import createDataContext from "./createDataContext";

export const initialAuthState: LocationContext = {
  locationState: {
    locationError: "",
  },
  actionFunctions: {} as LocationBoundActionFunctions,
};

export const locationReducer = (
  state: LocationContext,
  action: LocationAction
) => {
  switch (action.type) {
    case "set_locationError": {
      const newLocationContext: LocationContext = {
        ...state,
      };
      return newLocationContext;
    }
  }
};

const actionFunctions: LocationActionFunctions = {
  setError(dispatch) {
    return async (params) => {
      try {
        dispatch({ type: "set_locationError", payload: params.error ?? "" });
      } catch (error) {
        console.log(error);
      }
    };
  },
  clearError(dispatch) {
    return async () => {
      try {
        dispatch({ type: "set_locationError", payload: "" });
      } catch (error) {
        console.log(error);
      }
    };
  },
};

export const { Context, Provider } = createDataContext<
  LocationContext,
  LocationAction,
  LocationBoundActionFunctionsParams,
  LocationBoundActionFunctions,
  LocationActionFunctions
>(initialAuthState, locationReducer, actionFunctions);
