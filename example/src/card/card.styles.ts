import {StyleSheet} from 'react-native';
import {CARD_HEIGHT, CARD_WIDTH} from '../style/sizes';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: CARD_WIDTH,
    maxHeight: CARD_HEIGHT,
    height: CARD_HEIGHT,
  },
  image: {
    width: undefined,
    height: undefined,
    borderRadius: 10,
  },
  front: {
    backfaceVisibility: 'hidden',
  },
  back: {
    backfaceVisibility: 'visible',
  }
});

export default styles;
