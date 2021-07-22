import {StyleSheet} from 'react-native';

const ownStyles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#efefef',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
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

export default ownStyles;
