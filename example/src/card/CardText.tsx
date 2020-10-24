import React from 'react';
import {Text} from 'react-native';
import {typograph} from '../style/styles';

interface IValueObj {
  value: string;
  validator: string;
  mask: (value: string) => string;
}

interface ICardTextProps {
  id: 'cardName' | 'cardNumber' | 'expireDate';
  fontFamily?: string;
  config: IValueObj;
}

const CardText: React.FC<ICardTextProps> = (props) => {
  const { value, mask } = props.config;

  return (
    <Text
      style={[typograph[props.id], { fontFamily: props.fontFamily }]}>
      {mask(value)}
    </Text>
  );
};

export default CardText;
