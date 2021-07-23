import React from 'react';
import {View, Text} from 'react-native';
import ProductList from '../../components/ProductList';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View>
      <ProductList products={products} />
    </View>
  );
};

export default HomeScreen;
