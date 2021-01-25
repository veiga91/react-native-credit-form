import * as React from 'react';
import {FieldName} from 'context';
import {TextInput, View, Dimensions} from 'react-native';
import {useFieldsDispatch, TYPES} from '../context/FieldsContext';
import {useCardDispatch, TYPES as CARD_TYPES } from '../context/CardContext';
const width = Dimensions.get('window').width;

const Input:React.FC<{name: FieldName}> = (props) => {
  const dispatch = useFieldsDispatch();
  const cardDispatch = useCardDispatch();

  const {index, name, percentageWidth, ...fieldsProps} = props;
  
  return (
    <View style={{ height: 70, borderColor: 'black', borderWidth: 1, width: width * percentageWidth, backgroundColor: 'red' }}>
      <TextInput
        {...fieldsProps}
        style={{ flex: 1 }}
        returnKeyType="next"
        placeholder="holder"
        onChangeText={
          (text) => {
            if (props.separation) {
              const reg = new RegExp(props.separation);
              
              dispatch({
                type: TYPES.UPDATE_VALUE,
                payload: text,
                meta: {fieldName: props.name}
              });

            } else {

              dispatch({
                type: TYPES.UPDATE_VALUE,
                payload: text,
                meta: {fieldName: props.name}
              });
            }
          }
        }
        onFocus={() => {
          cardDispatch({ type: CARD_TYPES.UPDATE_INDEX, payload: index });
        }}
      />
    </View>
  );
};

export default Input;
