import React from 'react';
import {View, Text, Image} from 'react-native';
import {Product} from '../../models';
import Card from '../Card';
import RatingIcons from '../RatingIcons';
import ProductCardStyles from './styles';

type Props = {
  product: Product;
};

const ProductCard = ({product}: Props) => {
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
          <Text style={[oldPrice, faded]}>{product.oldPrice}</Text>
        </Text>
      </View>
    </Card>
  );
};

export default ProductCard;
