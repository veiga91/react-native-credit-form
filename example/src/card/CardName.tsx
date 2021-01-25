import * as React from 'react';
import {useCardState} from '../context/CardContext';
import styles from './frontInfo.styles';
import CardInfoField from './CardInfoField';
import { CardNameProps } from 'card';

const CardName:React.FC<CardNameProps> = (props) => {
  const {index} = useCardState();

  const isNameField = index === 0;
  const nameFieldBorder = isNameField ? 2 : 0;
  const nameFieldPadding = isNameField ? 5 : 7;

  return (
    <CardInfoField
     setLayout={props.getLayout}
     id="cardName"
     index={3}
     style={[
      styles.name,
      {borderWidth: nameFieldBorder, paddingLeft: nameFieldPadding},
    ]}
    />
  );
};

export default CardName;
