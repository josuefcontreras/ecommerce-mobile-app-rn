import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Card from '../Card';
import RatingIcons from '../RatingIcons';
import ProductCardStyles from './styles';

import {Product} from '../../models';
import {ProductListScreenNavigationProp} from '../../types';
import {useNavigation} from '@react-navigation/native';

type Props = {
  product: Product;
};

const ProductCard = ({product}: Props) => {
  const navigator = useNavigation<ProductListScreenNavigationProp>();

  const {
    imageContainer,
    image,
    textContainer,
    p,
    title,
    ratingsContainer,
    ratingCount,
    price,
    oldPrice,
    faded,
    card,
  } = ProductCardStyles;

  return (
    <TouchableOpacity
      onPress={() => {
        navigator.navigate('ProductDetail', {product});
      }}>
      <Card style={card}>
        <View style={[imageContainer]}>
          <Image
            style={[image]}
            source={{
              uri: product.image,
            }}
          />
        </View>
        <View style={[textContainer]}>
          <Text style={[p, title]}>{product.title}</Text>
          <View style={[ratingsContainer]}>
            <Text>
              <RatingIcons avgRating={product.avgRating} />
              <Text style={[p, ratingCount]}>{product.ratings}</Text>
            </Text>
          </View>
          <Text style={[p]}>
            from
            <Text style={[price]}> ${product.price} </Text>
            {product.oldPrice && (
              <Text style={[oldPrice, faded]}>$ {product.oldPrice}</Text>
            )}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default ProductCard;
