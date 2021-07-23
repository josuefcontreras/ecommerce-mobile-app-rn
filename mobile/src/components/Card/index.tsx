import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import CardStyles from './styles';

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
};

const Card = ({children, style}: Props) => {
  const {card} = CardStyles;
  return <View style={[style, card]}>{children}</View>;
};

export default Card;
