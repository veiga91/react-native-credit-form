import {LayoutFunction} from "card";

const HORIZONTAL_OFFSET = 5;
const WIDTH_OFFSET = 10;

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
