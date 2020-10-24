import {CARD_HEIGHT, CARD_WIDTH} from '../style/sizes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: undefined,
    height: CARD_HEIGHT,
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: CARD_WIDTH,
    maxHeight: CARD_HEIGHT,
    height: '100%',
    paddingBottom: '1%',
  },
  cardNumber: {
    bottom: CARD_HEIGHT * 0.38,
    top: undefined,
    right: undefined,
    left: CARD_WIDTH * 0.04,
    padding: 5,
  },
  cardBrand: {
    width: 'auto',
    height: 'auto',
    left: undefined,
    right: 0,
    top: 0,
    bottom: undefined,
  },
  nameLabel: {
    height: undefined,
    bottom: CARD_HEIGHT * 0.25,
    left: CARD_WIDTH * 0.04,
    top: undefined,
    right: undefined,
    paddingHorizontal: 5,
  },
  name: {
    maxWidth: CARD_WIDTH * 0.75,
    borderRadius: 10,
    width: 'auto',
    borderColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: CARD_HEIGHT * 0.07,
    left: CARD_WIDTH * 0.04,
    top: undefined,
    right: undefined,
    height: CARD_HEIGHT * 0.18,
    paddingHorizontal: 5,
  },
  expirationLabel: {
    height: undefined,
    bottom: CARD_HEIGHT * 0.25,
    top: undefined,
    left: undefined,
    right: CARD_WIDTH * 0.04,
    paddingHorizontal: 5,
  },
  expirationDate: {
    justifyContent: 'center',
    bottom: CARD_HEIGHT * 0.07,
    top: undefined,
    left: undefined,
    right: CARD_WIDTH * 0.04,
    height: CARD_HEIGHT * 0.18,
    paddingHorizontal: 5,
  },
});

export default styles;
