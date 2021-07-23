import React, { useReducer } from "react";
import { ContextBoundActionFunctions, ContextActionFunctions } from "../types";

type ProviderArgs = {
  children: JSX.Element;
};

function createDataContext<
  ContextType,
  Action,
  BoundActionFunctionsParams,
  BoundActionFunctions extends ContextBoundActionFunctions<BoundActionFunctionsParams>,
  ActionFunctions extends ContextActionFunctions<
    Action,
    BoundActionFunctionsParams
  >
>(
  defaultContext: ContextType,
  reducer: (state: ContextType, action: Action) => ContextType,
  actionFunctions: ActionFunctions
) {
  const Context = React.createContext({
    state: defaultContext,
    actionFunctions: {} as BoundActionFunctions,
  });

  const Provider = ({ children }: ProviderArgs) => {
    const [state, dispatch] = useReducer(reducer, defaultContext);
    const boundActionFunctions = {} as BoundActionFunctions;

    for (const key in actionFunctions) {
      const boundActionFunction = actionFunctions[key](
        dispatch
      ) as BoundActionFunctions[Extract<keyof ActionFunctions, string>];
      boundActionFunctions[key] = boundActionFunction;
    }

    const value = { state, actionFunctions: boundActionFunctions };

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return { Context, Provider };
}
export default createDataContext;
