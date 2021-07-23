import React from 'react';
import {StyleProp, ViewStyle, StyleSheet, View} from 'react-native';

type Props = {
  children: JSX.Element[] | JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
};

const ScreenWrapper = ({children, containerStyle}: Props) => {
  return <View style={[style.container, containerStyle]}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
});

export {ScreenWrapper};
