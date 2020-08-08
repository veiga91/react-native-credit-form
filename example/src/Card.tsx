import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  concat,
  Clock
} from 'react-native-reanimated';
import FrontFields from './FrontInfo';
import { flipOverTime } from './animations';
import { CARD_HEIGHT, CARD_WIDTH } from './style/sizes';

export interface ICardProps {
  animatedValue: Animated.Value<number>,
  cardWidth?: number | string,
  cardHeight?: number | string,
  backImage: ImageSourcePropType,
  frontImage: ImageSourcePropType
};



const Card = (props: ICardProps) => {
  const { animatedValue, cardWidth, cardHeight, backImage, frontImage } = props;
  const clock = new Clock();
  const perspective = 1000;

  const value = flipOverTime({ animatedValue, clock });

  const rotateXDeg = interpolate(value, {
    inputRange: [0, 1],
    outputRange: [0, 180],
    extrapolate: Extrapolate.CLAMP,
  });

  const rotateX = concat(rotateXDeg, 'deg');
  const maxWidth = cardWidth ? { maxWidth: cardWidth } : {};
  const maxHeight = cardHeight ? { maxHeight: cardHeight } : {};

  return (
    <View style={[styles.container, { ...maxHeight, ...maxWidth }]}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [{ rotateX }, { perspective }],
        }}>
        <Image
          style={[styles.image, styles.back]}
          source={backImage}
        />
      </Animated.View>

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          transform: [{ rotateX }, { perspective }],
          backfaceVisibility: 'hidden',
        }}>
        <Image
          style={styles.image}
          source={frontImage}
        />
        <FrontFields />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: CARD_WIDTH,
    maxHeight: CARD_HEIGHT,
    height: '100%'
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 10,
  },
  back: {
    transform: [{ rotateX: '180deg' }],
  },
});

export default Card;
