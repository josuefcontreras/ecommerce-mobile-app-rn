import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {StyleSheet} from 'react-native';

type Props = TextInputProps & {
  placeholder: string;
  onInputChangeText: (text: string, inputName: string) => void;
  value: string;
  errorMessage: string;
  inputName: 'email' | 'password';
};

const AuthFormInput = (props: Props) => {
  return (
    <TextInput
      {...props}
      placeholder={props.placeholder}
      style={[style.input]}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={text => {
        props.onInputChangeText(text, props.inputName);
      }}
      value={props.value}
    />
  );
};

const style = StyleSheet.create({
  input: {
    borderWidth: 0,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 50,
    marginLeft: 15,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  error: {
    color: 'red',
  },
});
export {AuthFormInput};
