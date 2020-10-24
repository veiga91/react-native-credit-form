import {SetStateAction} from 'react';
import {LayoutChangeEvent} from 'react-native';

export interface ILayoutState {
  width: number;
  height: number;
  y: number;
  x: number;
};

const WIDTH_OFFSET = 10;
const HORIZONTAL_OFFSET = 5;

export type LayoutFunction = (
  setState: (obj: SetStateAction<ILayoutState>) => void,
) => (synteticEvent: LayoutChangeEvent) => void;

export const getCardNameLayout: LayoutFunction = (setState) => ({
  nativeEvent: {
    layout: {width, x, y, height},
  },
}) => {
  setState({width, x, y, height});
};

export const getLayout: LayoutFunction = (setState) => ({
  nativeEvent: {
    layout: {width, x, y, height},
  },
}) => {
  setState({width: width + WIDTH_OFFSET, x: x - HORIZONTAL_OFFSET, y, height});
};
