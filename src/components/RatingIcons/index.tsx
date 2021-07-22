import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  avgRating: number;
};

const RatingIcons = ({avgRating}: Props) => {
  const stars = Math.floor(avgRating);
  return (
    <Text>
      {Array(Math.floor(stars))
        .fill(null)
        .map((v, i) => (
          <Icon key={i} name="star" size={20} color="#FF8C00" />
        ))}
    </Text>
  );
};

export default RatingIcons;
