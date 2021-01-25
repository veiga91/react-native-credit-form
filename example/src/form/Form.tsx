import React, {useRef, useEffect} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import Input from './Input';
import {useCardState} from '../context/CardContext';

const defaultFieldsStructure = [
  {
    name: 'cardName',
    mask: (value) => value,
    validator: (value) => value,
    percentageWidth: 1,
    index: 0
  },
  {
    name: 'cardNumber',
    mask: (value) => value,
    validator: (value) => value,
    percentageWidth: 1,
    index: 2,
    separation: '^([0-9]{4})([0-9]{6})?(?:([0-9]{6})([0-9]{5}))?$'
  },
  {
    name: 'expirationDate',
    mask: (value) => value,
    validator: (value) => value,
    percentageWidth: 0.45,
    index: 1
  },
  {
    name: 'cvv',
    mask: (value) => value,
    validator: (value) => value,
    percentageWidth: 0.45,
    index: 3
  }
];

const Form = (props) => {

  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
     {defaultFieldsStructure.map(
        (item) => <Input key={item.name} {...item} />
      )}
    </View>
  );
};

export default Form;