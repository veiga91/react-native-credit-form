import { Dimensions, PixelRatio } from 'react-native';
export const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

type PercentageSizeFunc = (percentage : number | string, based?: 'width' | 'height') => number;

const getPercentageValue: (percentage : number) => number = (percentage) => {
  if (percentage > 1) return (percentage / 100);
  
  return percentage;
};

export const getPercentageSize: PercentageSizeFunc = (percentage, based = 'width') => {
  let parsedPercentage;
  const basedOnSizeOf = based === 'width' ? screenWidth : screenHeight;

  if (typeof percentage === 'string') {
    const splited = percentage.split('%');
    let value = Number(splited[0]);

    parsedPercentage = getPercentageValue(value);
  }

  if (typeof percentage === 'number') {
    parsedPercentage = getPercentageValue(percentage);
  }
  const size = PixelRatio.roundToNearestPixel(basedOnSizeOf * (parsedPercentage || 1));

  return Math.round(size);
};