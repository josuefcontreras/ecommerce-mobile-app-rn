import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginBottom: 5,
  },
  imageContainer: {
    flex: 2,
  },
  ratingsContainer: {
    paddingVertical: 5,
  },
  ratingCount: {
    fontSize: 18,
  },
  textContainer: {
    flex: 3,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 200,
  },
  p: {
    fontSize: 21,
  },
  title: {
    fontWeight: '700',
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  faded: {
    color: 'grey',
  },
});

export default styles;
