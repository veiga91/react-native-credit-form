import * as React from 'react';
import {View} from 'react-native';
import TouchableWrapper from './TouchableWrapper';
import CardText from './CardText';
import {CardFieldsProps} from './';
import {useStyle} from '../context/StyleContext';

const CardInfoField:React.FC<CardFieldsProps> = (props) => {
  const {base} = useStyle();

  return (
    <TouchableWrapper index={props.index} disabled={props.disabled}>
      <View
        style={[
          base.absolutePositioning,
          props.style,
        ]}
        onLayout={props.setLayout}>
        <CardText id={props.id} />
      </View>
    </TouchableWrapper>
  );
};

export default CardInfoField;