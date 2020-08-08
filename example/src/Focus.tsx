import React, { useEffect, useState, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useValue, useCode, block, set, interpolate, greaterThan, cond, add, sub, Clock, lessThan, call, greaterOrEq, lessOrEq } from 'react-native-reanimated';
import { translateOverTime } from './animations';


const Focus = (props) => {
  const { x, y, width, height } = props;
  const clock = new Clock();
  const clock2 = new Clock();
  const clock3 = new Clock();
  const clock4 = new Clock();

  if (x === undefined || y === undefined) return null;
  
  const translateY = useValue(y);
  const translateX = useValue(x - 5);
  const newWidth = useValue(width);
  const newHeight = useValue(height);

  useCode(() => block([
    set(translateY, translateOverTime({ from: translateY, to: y, clock, duration: 1500 })),
    set(translateX, translateOverTime({ from: translateX, to: x - 5, clock: clock3, duration: 1500 }))
  ]), [y, x]);

  useCode(() => block([
    set(newWidth, translateOverTime({ from: newWidth, to: width, clock: clock2, duration: 1500 })),
    set(newHeight, translateOverTime({ from: newHeight, to: height, clock: clock4, duration: 1500 }))
  ]), [width, height]);
  
  return (
    <Animated.View
      style={
        [
          styles.focus,
          {
            width: newWidth,
            height: newHeight,
            transform: [
              { translateX: translateX },
              { translateY: translateY }
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
    borderColor: 'gold',
    borderWidth: 1,
    borderRadius: 5
  }
});

export default Focus;
