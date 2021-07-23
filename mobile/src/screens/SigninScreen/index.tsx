import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Context as AuthContext} from '../../context/AuthContext';
import {SigninCredentials, SigninScreenNavigationProp} from '../../types';
import {ScreenWrapper} from '../../components';
import {AuthForm} from '../../components/AuthForm';
import {useScreenOnBlurEffect} from '../../hooks';

type Props = {};

const SigninScreen = ({}: Props) => {
  const authNavigator = useNavigation<SigninScreenNavigationProp>();
  const {actionFunctions} = useContext(AuthContext);
  useScreenOnBlurEffect(authNavigator, actionFunctions.clearError);

  async function onsubmit(credentials: SigninCredentials) {
    await actionFunctions.signin({credentials});
  }

  function goToSignupScreen() {
    authNavigator.navigate('Signup');
  }

  return (
    <ScreenWrapper
      containerStyle={[style.container, {justifyContent: 'center'}]}>
      <AuthForm
        title="Sign in to Trackme"
        onSubmitHandler={onsubmit}
        submitButtonText="Sign in"
        secondaryText="Don't have an account? "
        secondaryLinkText="sign up"
        navigateToSecondaryScreen={goToSignupScreen}
      />
    </ScreenWrapper>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'midnightblue',
  },
});

export default SigninScreen;
