import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import React, { useContext } from "react";
import { ActivityIndicator, ColorSchemeName } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { useLocalSignin } from "../hooks";
import { AuthNavigator } from "./stack";
import { MainTabNavigator } from "./tab";

type NavigationProp = {
  colorScheme: ColorSchemeName;
};

export default function Navigation({ colorScheme }: NavigationProp) {
  const { tryingLocalSignin } = useLocalSignin();
  const { state } = useContext(AuthContext);
  const { authState } = state;

  const NavegationContainer = (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {authState.signedinToken && <MainTabNavigator />}
      {!authState.signedinToken && <AuthNavigator />}
    </NavigationContainer>
  );

  const Indicator = <ActivityIndicator size="large" color="#00ff00" />;

  return tryingLocalSignin ? Indicator : NavegationContainer;
}
