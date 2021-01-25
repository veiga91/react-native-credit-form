import {FocusProps} from './';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {useValue, useCode, block, set, Clock} from 'react-native-reanimated';
import {interpolateOverTime} from '../animations';
import {useCardState} from '../context/CardContext';
import {useStyle} from '../context/StyleContext';

const DURATION = 2000;

const clock = new Clock();
const clock2 = new Clock();
const clock3 = new Clock();
const clock4 = new Clock();

const Focus: React.FC<FocusProps> = (props) => {
  const {index, cardSide} = useCardState();
  const {focusBorderColor} = useStyle();

  const {x, y, width, height} = props.layouts[index];
  
  const translateY = useValue(y);
  const translateX = useValue(x);
  const newWidth = useValue(width);
  const newHeight = useValue(height);

  useCode(() => block([
    set(translateY, interpolateOverTime({from: translateY, to: y, clock, duration: DURATION})),
    set(translateX, interpolateOverTime({from: translateX, to: x, clock: clock2, duration: DURATION}))
  ]), [y, x]);

  useCode(() => block([
    set(newWidth, interpolateOverTime({from: newWidth, to: width, clock: clock3, duration: DURATION})),
    set(newHeight, interpolateOverTime({from: newHeight, to: height, clock: clock4, duration: DURATION}))
  ]), [width, height]);
  
  const borderColor = index === 0 || cardSide === "back" ? 'transparent' : focusBorderColor;
  
  return (
    <Animated.View
      style={
        [
          styles.focus,
          {
            borderColor,
            width: newWidth,
            height: newHeight,
            transform: [
              {translateX: translateX},
              {translateY: translateY}
            ]
          }
        ]
      }
    />
  );
};

const styles = StyleSheet.create({
  focus: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 2,
    borderRadius: 10
  }
});

export default React.memo(Focus);
