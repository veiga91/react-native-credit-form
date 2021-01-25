import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './card.styles';
import {base} from '../style/styles';

const {absolutePositioning} = base;

export interface CardAnimatedSideProps {
  image: ImageSourcePropType
  rotateY: Animated.Value<number>,
  side: "front" | "back"
}

const PERSPECTIVE = 1000;

const CardAnimatedSide: React.FC<CardAnimatedSideProps> = (props) => {
  const {image, side, rotateY} = props;

  return (
    <Animated.View
      style={[
        absolutePositioning,
        styles[side],
        {transform: [{rotateY}, {perspective: PERSPECTIVE}]},
      ]}>
      <Image
        style={[absolutePositioning, styles.image]}
        source={image}
      />
      {props.children}
    </Animated.View>
  );
};

export default CardAnimatedSide;
