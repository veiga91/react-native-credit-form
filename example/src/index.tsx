import React, { useState } from 'react';
import {
  View,
  Button,
  TextInput
} from 'react-native';

import Card from './card/Card';
import FrontInfo from './card/FrontInfo';
import CardContext, { form } from './context/CardContext';

import { useValue } from 'react-native-reanimated';
import Form from './form/Form';

const CardForm = () => {
  const [name, setName] = useState({
    value: 'NAME ON THE CARD',
    mask: (value: string) => value,
    validator: ''
  });
  const [side, setSide] = useState('FRONT');
  const [index, setIndex] = useState(0);
  const value = useValue(0);

  const formContext = {
    ...form,
    currentFieldIndex : index,
    cardName: name,
    changeIndex: setIndex
  }

  const values = {
    cardNumber: {
      value: 'XXXX XXXX XXXX XXXX',
      validator: '',
      mask: (value: string) => value,
    },
    expireDate: {
      value: 'MM/YY',
      validator: '',
      mask: (value: string) => value,
    },
    cardName: {
      value: 'MY NAME',
      validator: '',
      mask: (value: string) => value,
    },
    cvv: {
      value: '',
      validator: '',
      mask: (value: string) => value,
    },
  }

  return (
    <>
      <Card
        editMode
        index={index}
        backImage={{ uri: 'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g'}}
        frontImage={{uri: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68'}}
      >
        <FrontInfo values={{ ...values, cardName: name }} currentIndex={index} changeIndex={setIndex} />
      </Card>
    
      
      <Button title="Press me" onPress={() => {  setIndex(index === 0 ? 4 : 0) }}>
      
    </Button>
      {/* <TextInput
        value={name.value}
        onChangeText={(text) => setName({ value: text,  mask: (value) => value })}
        style={{ width: '100%', height: 70, borderColor: 'green', borderWidth: 2 }}
        
        onBlur={() => { setIndex(index => index + 1) }}
      /> */}
      < Form next={() => { setIndex(index + 1) }} ButtonComponent={Button} InputComponent={TextInput} index={index} />
    </>
  );
};

export default CardForm;
