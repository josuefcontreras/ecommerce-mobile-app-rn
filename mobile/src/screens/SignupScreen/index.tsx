import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {SigninCredentials, SigninScreenNavigationProp} from '../../types';
import {Context as AuthContext} from '../../context/AuthContext';
import {ScreenWrapper} from '../../components';
// import {LinearGradient} from 'expo-linear-gradient';
import {AuthForm} from '../../components/AuthForm';
import {useScreenOnBlurEffect} from '../../hooks';

type Props = {};

const SignupScreen = ({}: Props) => {
  const authNavigator = useNavigation<SigninScreenNavigationProp>();
  const {actionFunctions} = useContext(AuthContext);
  useScreenOnBlurEffect(authNavigator, actionFunctions.clearError);

  async function onsubmit(credentials: SigninCredentials) {
    await actionFunctions.signup({credentials});
  }

  function goToSigninScreen() {
    authNavigator.navigate('Signin');
  }

  return (
    <ScreenWrapper
      containerStyle={[style.container, {justifyContent: 'center'}]}>
      {/* <LinearGradient
        // Background Linear Gradient
        colors={["rgba(2, 159, 35, 1)", "rgba(50, 8, 50, 1)"]}
        style={style.background}
      /> */}
      <AuthForm
        title="Create an account"
        onSubmitHandler={onsubmit}
        submitButtonText="Sign up"
        secondaryText="Already have an account? "
        secondaryLinkText="sign in"
        navigateToSecondaryScreen={goToSigninScreen}
      />
    </ScreenWrapper>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
  },
});

export default SignupScreen;
