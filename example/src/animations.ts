import Animated, {
  call,
  stopClock,
  Easing,
  block,
  Value,
  cond,
  set,
  not,
  startClock,
  clockRunning,
  timing,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

interface ExtrapolateObj {
  extrapolate?: typeof Extrapolate;
  extrapolateLeft?: typeof Extrapolate;
  extrapolateRight?: typeof Extrapolate;
}

export interface IInterpolateOverTimeParams {
  onAnimationEnd?: () => void;
  clock: Animated.Clock;
  duration?: number;
  to: Animated.Value<number> | number;
  from: Animated.Value<number> | number;
  extrapolateObj?: ExtrapolateObj | {};
}

export const interpolateOverTime = ({
  onAnimationEnd = () => {},
  clock,
  duration = 500,
  from,
  to,
  extrapolateObj = {},
}: IInterpolateOverTimeParams) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  const extrapolateConfig = extrapolateObj || {};

  return block([
    cond(not(clockRunning(clock)), [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.frameTime, 0),
      set(config.toValue, 1),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, [
      call([state.position], onAnimationEnd),
      stopClock(clock),
    ]),
    interpolate(state.position, {
      inputRange: [0, 1],
      outputRange: [from, to],
      ...extrapolateConfig
    })
  ])
};