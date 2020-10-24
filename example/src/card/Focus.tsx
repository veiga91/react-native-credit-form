import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useValue, useCode, block, set, Clock } from 'react-native-reanimated';
import { interpolateOverTime } from '../animations';

interface IFocusProps {
  x: number;
  y: number;
  width: number;
  height: number;
  borderColor?: string;
  hide: boolean;
};

const DURATION = 1000;

const Focus: React.FC<IFocusProps> = (props) => {
  const { x, y, width, height } = props;
  
  if (x === 0 || y === 0 || width === 0 || height === 0) return null;
  const clock = new Clock();
  const clock2 = new Clock();
  const clock3 = new Clock();
  const clock4 = new Clock();
  
  const translateY = useValue(y);
  const translateX = useValue(x);
  const newWidth = useValue(width);
  const newHeight = useValue(height);

  useCode(() => block([
    set(translateY, interpolateOverTime({ from: translateY, to: y, clock, duration: DURATION })),
    set(translateX, interpolateOverTime({ from: translateX, to: x, clock: clock2, duration: DURATION }))
  ]), [y, x]);

  useCode(() => block([
    set(newWidth, interpolateOverTime({ from: newWidth, to: width, clock: clock3, duration: DURATION })),
    set(newHeight, interpolateOverTime({ from: newHeight, to: height, clock: clock4, duration: DURATION }))
  ]), [width, height]);
  
  return (
    <Animated.View
      style={
        [
          styles.focus,
          {
            borderColor: props.hide ? 'transparent' : props.borderColor,
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
    borderWidth: 2,
    borderRadius: 10
  }
});

Focus.defaultProps = {
  borderColor: 'gold'
};

export default Focus;
