import React from 'react';
import {
  StyleProp,
  View,
  ViewStyle,
  StyleSheet,
  Button as RNButton,
  NativeSyntheticEvent,
  NativeTouchEvent,
  ColorValue,
} from 'react-native';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  color?: ColorValue | undefined;
  accessibilityLabel?: string | undefined;
  disabled?: boolean | undefined;
  loading?: boolean;
};

const Button = ({containerStyle, loading, ...buttonProps}: Props) => {
  return (
    <View style={[containerStyle]}>
      <RNButton {...buttonProps} />
    </View>
  );
};

const style = StyleSheet.create({});

export {Button};
