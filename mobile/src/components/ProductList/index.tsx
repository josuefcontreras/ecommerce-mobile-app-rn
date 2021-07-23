import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Product} from '../../models';
import ProductCard from '../ProductCard';

type Props = {
  products: Product[];
};

const ProductList = ({products}: Props) => {
  const keyExtractor = (item: Product) => item.id;
  const renderItem = ({item}: {item: Product}) => (
    <ProductCard product={item} />
  );

  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        data={products}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;
