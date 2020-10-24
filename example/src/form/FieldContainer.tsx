import React, {useState, useEffect} from 'react';
import {TextInput, Button, View, Dimensions} from 'react-native';
import Animated, {useValue, useCode, block, cond, Clock, set, eq, Extrapolate, and, neq, clockRunning, not, divide, multiply, lessThan, greaterOrEq, greaterThan, Value} from 'react-native-reanimated';
import {interpolateOverTime} from '../animations';
import { screenWidth } from '../style/utils';

const FieldContainer = (props) => {
  const clock = new Clock();
  const clock2 = new Clock();
  const {currentIndex, index} = props;
  const translateX = useValue((screenWidth / 2));
  const opacity = useValue(1);
  const extrapolateObj = {extrapolate: Extrapolate.CLAMP};
  
  useCode(() => block([
    // set(opacity, interpolateOverTime({
    //   clock,
    //   from: opacity,
    //   to:1,
    //   extrapolateObj,
    //   duration: 1000
    // })),
    cond(lessThan(opacity, 1),
      block(
        [
          // set(opacity, interpolateOverTime({
          //   clock,
          //   from: opacity,
          //   to:1,
          //   extrapolateObj,
          //   duration: 1000,
          //   onAnimationEnd: ([v]) => { console.log(v);}
          // })),
          // set(translateX, interpolateOverTime({
          //   clock: clock2,
          //   from: translateX,
          //   to: screenWidth * -0.5,
          //   extrapolateObj,
          //   duration: 1000
          // }))
        ]
      ),
    ),
    cond(greaterOrEq(opacity, 1),
      block(
        [
          set(opacity, interpolateOverTime({
            clock,
            from: opacity,
            to:0,
            extrapolateObj,
            duration: 1000
          })),
          // set(translateX, interpolateOverTime({
          //   clock: clock2,
          //   from: translateX,
          //   to: screenWidth * -(index + 1),
          //   extrapolateObj,
          //   duration: 1000
          // }))
        ]
      ),
    )
    // cond(eq(visible, 1),
    // set(opacity, interpolateOverTime({
    //   clock,
    //   from: opacity,
    //   to: 1,
    //   extrapolateObj,
    //   duration: 2500
    // })),
    // )
  ]), [currentIndex]);

  return (
    <Animated.View style={{ transform: [ {translateX }], width: screenWidth, backgroundColor: 'red', opacity }}>
    {props.children}
   </Animated.View>
  );
};

export default FieldContainer;