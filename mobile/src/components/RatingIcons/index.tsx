import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  avgRating: number;
};

const RatingIcons = ({avgRating}: Props) => {
  const numberOfFullStars = Math.trunc(avgRating);
  const PercentageOfPartialStar = Number(
    (avgRating - numberOfFullStars).toFixed(2),
  );

  const fullStarsIcons = Array(numberOfFullStars)
    .fill(null)
    .map((v, i) => (
      <Icon key={i} name="star-sharp" size={20} color="#FF8C00" />
    ));

  let partialStarIcon = null;
  if (PercentageOfPartialStar < 0.25) {
    partialStarIcon = (
      <Icon key="$5" name="star-outline" size={20} color="#FF8C00" />
    );
  } else if (PercentageOfPartialStar < 0.9) {
    partialStarIcon = (
      <Icon key="$5" name="star-half-sharp" size={20} color="#FF8C00" />
    );
  } else {
    partialStarIcon = (
      <Icon key="$5" name="star-sharp" size={20} color="#FF8C00" />
    );
  }

  return <Text>{[fullStarsIcons, partialStarIcon]}</Text>;
};

export default RatingIcons;
