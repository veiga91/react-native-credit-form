import React, {useState, useEffect} from 'react';
import {TextInput, Button, View, Dimensions} from 'react-native';
import Animated, {useValue, useCode, block, cond, Clock, set, eq, Extrapolate, and, neq, clockRunning, not} from 'react-native-reanimated';
import {interpolateOverTime} from '../animations';
import FieldContainer from './FieldContainer';

const width = Dimensions.get('window').width;

const Form = (props) => {
  const {ButtonComponent, InputComponent} = props;



  return (
    <View style={{ flexDirection: 'row', overflow: 'hidden',}}>
      <FieldContainer currentIndex={props.index} index={0}>
        <InputComponent
          value={''}
          style={{ width: 200, height: 70, borderColor: 'green', borderWidth: 2 }}
        />
        <ButtonComponent title={"kajsdhdf"} onPress={() => { setTimeout(() => { props.next();  }, 500) }} />
      </FieldContainer>
      <FieldContainer currentIndex={props.index} index={1}>
        <InputComponent
          value={''}
          style={{ width: 200, height: 70, borderColor: 'green', borderWidth: 2 }}
        />
        <ButtonComponent title={"kajsdhdf"} onPress={() => { setTimeout(() => { props.next();  }, 500) }} />
      </FieldContainer>
    </View>
  );
};

export default Form;