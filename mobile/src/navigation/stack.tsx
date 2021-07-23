import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import {AuthStackParamList, ProductListStackParamList} from '../types';
import HomeScreen from '../screens/HomeScreen';
import PropductDetailScreen from '../screens/ProductDetail';

const AuthStack = createStackNavigator<AuthStackParamList>();
export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="Signin"
        component={SigninScreen}
        options={{title: 'Sign in'}}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{title: 'Sign up'}}
      />
    </AuthStack.Navigator>
  );
};

const ProductListStack = createStackNavigator<ProductListStackParamList>();
export const ProductListNavigator = () => {
  return (
    <ProductListStack.Navigator screenOptions={{headerShown: false}}>
      <ProductListStack.Screen
        name="ProductList"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <ProductListStack.Screen
        name="ProductDetail"
        component={PropductDetailScreen}
        options={{title: 'Detail', headerShown: true}}
      />
    </ProductListStack.Navigator>
  );
};
