import React from 'react';
import {Text} from 'react-native';
import {useFieldsState} from '../context/FieldsContext';
import {CardTextProps} from 'card';
import {useStyle} from '../context/StyleContext';
import * as masks from './masks';

const CardText: React.FC<CardTextProps> = (props) => {
  const state = useFieldsState();
  const {typograph, fontFamily} = useStyle();
  const mask = masks[props.id];
  const value = mask ? mask(state[props.id]) : state[props.id];

  return (
    <Text
      style={[typograph[props.id], { fontFamily }]}>
      {value}
    </Text>
  );
};

export default CardText;
