import React from 'react';
import {View, Image, ImageSourcePropType} from 'react-native';
import Animated, {
  Extrapolate,
  Clock,
  useCode,
  set,
  useValue,
  block,
  cond,
  eq,
  and,
  neq
} from 'react-native-reanimated';
import {interpolateOverTime} from '../animations';
import styles from './card.styles';
import {base} from '../style/styles';
import {CardProvider} from '../context/CardContext';

const {absolutePositioning} = base;

export interface ICardProps {
  index: number;
  cardWidth?: number | string;
  cardHeight?: number | string;
  backImage: ImageSourcePropType;
  frontImage: ImageSourcePropType;
  editMode: boolean
}

const perspective = 1000;
const FRONT_FACE_ANGLE = 0;
const BACK_FACE_ANGLE = -Math.PI;
const clock = new Clock();

const Card: React.FC<ICardProps> = (props) => {
  const {index, cardWidth, cardHeight, backImage, frontImage, editMode} = props;
  
  const rotateY = useValue(0);
  const extrapolateObj = {extrapolate: Extrapolate.CLAMP};
  const backFlipIndex = editMode ? 4 : 3;
  
  useCode(
    () =>
      block([
        cond(
          eq(index, backFlipIndex),
          set(
            rotateY,
            interpolateOverTime({
              clock,
              from: FRONT_FACE_ANGLE,
              to: BACK_FACE_ANGLE,
              extrapolateObj,
            }),
          ),
        ),
        cond(
          and(eq(index, 0), neq(rotateY, FRONT_FACE_ANGLE)),
          set(
            rotateY,
            interpolateOverTime({
              clock,
              from: BACK_FACE_ANGLE,
              to: FRONT_FACE_ANGLE,
              extrapolateObj,
            }),
          ),
        ),
      ]),
    [index],
  );

  const maxWidth = cardWidth ? {maxWidth: cardWidth} : {};
  const maxHeight = cardHeight ? {maxHeight: cardHeight} : {};

  return (
    <CardProvider>

    <View style={[styles.container, {...maxHeight, ...maxWidth}]}>
      <Animated.View
        style={[absolutePositioning, {transform: [{rotateY}, {perspective}]}]}>
        <Image style={[absolutePositioning, styles.image]} source={backImage} />
      </Animated.View>

      <Animated.View
        style={[
          absolutePositioning,
          styles.front,
          {transform: [{rotateY}, {perspective}]},
        ]}>
        <Image
          style={[absolutePositioning, styles.image]}
          source={frontImage}
        />
        {props.children}
      </Animated.View>
    </View>
    </CardProvider>
  );
};

Card.defaultProps = {
  editMode: false
};

export default Card;
