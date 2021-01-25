import React from 'react';
import {View} from 'react-native';
import {
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
import {useCardState} from '../context/CardContext';
import CardAnimatedSide from './CardAnimatedSide';
import FrontInfo from './FrontInfo';
import {CardProps} from './';

const FRONT_FACE_ANGLE = 0;
const BACK_FACE_ANGLE = -Math.PI;
const clock = new Clock();

const Card: React.FC<CardProps> = (props) => {
  const {cardWidth, cardHeight, backImage, frontImage} = props;
  const {cardSide} = useCardState();
  const rotateY = useValue(0);
  const extrapolateObj = {extrapolate: Extrapolate.CLAMP};
  const backFlipIndex = cardSide === "front" ? 1 : 0;
  
  useCode(
    () =>
      block([
        cond(
          eq(backFlipIndex, 0),
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
          and(eq(backFlipIndex, 1), neq(rotateY, FRONT_FACE_ANGLE)),
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
    [cardSide],
  );

  const maxWidth = cardWidth ? {maxWidth: cardWidth} : {};
  const maxHeight = cardHeight ? {maxHeight: cardHeight} : {};

  return (
    <View style={[styles.container, {...maxHeight, ...maxWidth}]}>
      <CardAnimatedSide
        image={backImage}
        rotateY={rotateY}
        side={"back"}
      >

      </CardAnimatedSide>

      <CardAnimatedSide
        image={frontImage}
        rotateY={rotateY}
        side={"front"}
      >
        <FrontInfo />
      </CardAnimatedSide>
    </View>
  );
};

Card.defaultProps = {
  editMode: false
};

export default Card;
