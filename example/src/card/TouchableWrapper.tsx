import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

export interface ITouchableWrapperProps {
  index: number;
  disabled: boolean;
  changeIndex: (i: number) => void
}

const TouchableWrapper: React.FC<ITouchableWrapperProps> = (props) => {
  const {index, disabled, changeIndex} = props;

  const handleChangeIndex = () => {
    if (!disabled) {
      changeIndex(index);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleChangeIndex}>
      {props.children}
    </TouchableWithoutFeedback>
  );
};

export default TouchableWrapper;
