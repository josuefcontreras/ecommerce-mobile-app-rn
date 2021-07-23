import { NavigationProp } from "@react-navigation/core/lib/typescript/src/types";
import { ParamListBase } from "@react-navigation/routers/lib/typescript/src/types";
import React from "react";

function useScreenOnBlurEffect<Navigator extends NavigationProp<ParamListBase>>(
  navigator: Navigator,
  callback: () => void
) {
  React.useEffect(() => {
    const unsubscribe = navigator.addListener("blur", callback);
    return unsubscribe;
  }, [navigator]);
}

export { useScreenOnBlurEffect };
