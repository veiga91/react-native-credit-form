import Animated, {
  call,
  stopClock,
  Easing,
  block,
  Value,
  cond,
  set,
  eq,
  and,
  not,
  startClock,
  clockRunning,
  timing,
  interpolate,
  add
} from 'react-native-reanimated';

export interface IFlipOverTimeParams {
  onAnimationEnd?: () => void,
  clock: Animated.Clock,
  duration?: number,
  animatedValue: Animated.Value<number>
}

export const flipOverTime = ({
  onAnimationEnd = () => {},
  clock,
  duration = 500,
  animatedValue,
}: IFlipOverTimeParams) => {
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

  return block([
    cond(
      and(
        eq(animatedValue, 1),
        and(eq(config.toValue, 0), not(clockRunning(clock))),
      ),
      [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.frameTime, 0),
        set(config.toValue, 1),
        startClock(clock),
      ],
    ),
    cond(
      and(
        eq(animatedValue, 0),
        and(eq(config.toValue, 1), not(clockRunning(clock))),
      ),
      [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.frameTime, 0),
        set(config.toValue, 0),
        startClock(clock),
      ],
    ),
    timing(clock, state, config),
    cond(state.finished, [
      call([config.toValue], onAnimationEnd),
      stopClock(clock),
    ]),
    state.position,
  ]);
};

export const translateOverTime = ({
  onAnimationEnd = () => {},
  clock,
  duration = 500,
  from,
  to
}: IFlipOverTimeParams) => {
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
    })
  ])
}