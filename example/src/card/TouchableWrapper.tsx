import { TouchableWrapperProps } from 'card';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {useCardDispatch, TYPES} from '../context/CardContext';

const TouchableWrapper: React.FC<TouchableWrapperProps> = (props) => {
  const {index, disabled} = props;
  const dispatch = useCardDispatch();
  
  const handleChangeIndex = () => {
    if (!disabled) {
      dispatch({ type: TYPES.UPDATE_INDEX, payload: index });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleChangeIndex}>
      {props.children}
    </TouchableWithoutFeedback>
  );
};

TouchableWrapper.defaultProps = {
  disabled: false
}

export default React.memo(TouchableWrapper);
