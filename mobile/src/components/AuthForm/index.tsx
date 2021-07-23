import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SigninCredentials} from '../../types';
import {Context as AuthContext} from '../../context/AuthContext';
import {AuthFormIcon} from './../AuthFormIcon';
import {AuthFormInput} from '../AuthFormIntput';
import {Button} from '../Button';

const initialSigninCredential: SigninCredentials = {
  email: '',
  password: '',
};

type Props = {
  title: string;
  submitButtonText: string;
  onSubmitHandler: (credentials: SigninCredentials) => void;
  secondaryText: string;
  navigateToSecondaryScreen: () => void;
  secondaryLinkText: string;
};

const AuthForm = ({
  title,
  submitButtonText,
  onSubmitHandler,
  secondaryText,
  navigateToSecondaryScreen,
  secondaryLinkText,
}: Props) => {
  const {state} = useContext(AuthContext);
  const {authState} = state;
  const [credentials, setCredentials] = useState(initialSigninCredential);

  function onTextChange(text: string, inputName: string) {
    if (inputName == 'password') {
      setCredentials(PreviousLoginCredential => ({
        ...PreviousLoginCredential,
        password: text,
      }));
    } else if (inputName == 'email') {
      setCredentials(PreviousLoginCredential => ({
        ...PreviousLoginCredential,
        email: text,
      }));
    }
  }

  return (
    <>
      <View style={[style.container]}>
        <Text style={style.formTitle}>{title}</Text>
      </View>
      <View style={{flex: 2}}>
        <AuthFormInput
          placeholder="email@example.com"
          value={credentials.email}
          errorMessage={authState.authError}
          inputName="email"
          onInputChangeText={onTextChange}
        />
        <AuthFormInput
          placeholder={'* '.repeat(16)}
          value={credentials.password}
          errorMessage={authState.authError}
          inputName="password"
          onInputChangeText={onTextChange}
          secureTextEntry
        />
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <Button
            title={submitButtonText}
            onPress={() => {
              onSubmitHandler(credentials);
            }}
            containerStyle={style.button}
            disabled={authState.isSigningin}
            loading={authState.isSigningin}
          />
          <Text style={[style.p, {marginTop: 25}]}>
            {secondaryText}
            <Text
              onPress={navigateToSecondaryScreen}
              style={[style.p, style.link]}>
              {secondaryLinkText}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  p: {
    color: '#ffffff',
    fontFamily: 'montserrat-regular',
    fontSize: 18,
  },
  link: {
    color: '#03a9f4',
  },
  formTitle: {
    color: 'white',
    fontFamily: 'montserrat-bold',
    fontSize: 45,
    textAlign: 'center',
    lineHeight: 70,
  },
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button: {
    borderRadius: 50,
    padding: 20,
  },
});

export {AuthForm};
