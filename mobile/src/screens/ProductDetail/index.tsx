import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ProductListStackParamList} from '../../types';

type Props = {};

const PropductDetailScreen = () => {
  const {
    params: {product},
  } = useRoute<RouteProp<ProductListStackParamList, 'ProductDetail'>>();

  return (
    <View>
      <Text>{product.title}</Text>
    </View>
  );
};

export default PropductDetailScreen;

const styles = StyleSheet.create({});
