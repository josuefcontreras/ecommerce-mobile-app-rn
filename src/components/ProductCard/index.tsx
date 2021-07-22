import React from 'react';
import {View, Text, Image} from 'react-native';
import {Product} from '../../models';
import RatingIcons from '../RatingIcons';
import ownStyles from './ownstyles';

type Props = {
  product: Product;
};

const ProductCard = ({product}: Props) => {
  return (
    <View style={[ownStyles.cardContainer]}>
      <View style={[ownStyles.imageContainer]}>
        <Image
          style={[ownStyles.image]}
          source={{
            uri: product.image,
          }}
        />
      </View>
      <View style={[ownStyles.textContainer]}>
        <Text style={[ownStyles.p, ownStyles.title]}>{product.title}</Text>
        <View style={[ownStyles.ratingsContainer]}>
          <Text>
            <RatingIcons avgRating={product.avgRating} />
            <Text style={[ownStyles.p, ownStyles.ratingCount]}>
              {product.ratings}
            </Text>
          </Text>
        </View>
        <Text style={[ownStyles.p]}>
          from
          <Text style={[ownStyles.price]}> ${product.price} </Text>
          <Text style={[ownStyles.oldPrice, ownStyles.faded]}>
            ${product.oldPrice}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
