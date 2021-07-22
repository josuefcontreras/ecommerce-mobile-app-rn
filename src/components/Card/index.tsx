import React from 'react';
import {View, Text} from 'react-native';
import CardStyles from './styles';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Card = ({children}: Props) => {
  const {card} = CardStyles;
  return <View style={[card]}>{children}</View>;
};

export default Card;
