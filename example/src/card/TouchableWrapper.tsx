import React, { useContext } from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import CardContext from '../context/CardContext';

export interface ITouchableWrapperProps {
  index: number;
  disabled: boolean;
  changeIndex: (i: number) => void
}

const TouchableWrapper: React.FC<ITouchableWrapperProps> = (props) => {
  const {index, disabled, changeIndex} = props;
  const {setIndex} = useContext(CardContext);
  console.log('RENDEHDJDH')
  const handleChangeIndex = () => {
    if (!disabled) {
      setIndex(index);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleChangeIndex}>
      {props.children}
    </TouchableWithoutFeedback>
  );
};

export default React.memo(TouchableWrapper);
