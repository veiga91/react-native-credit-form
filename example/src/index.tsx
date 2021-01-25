import React from 'react';
import Card from './card/Card';
import {CardProvider} from './context/CardContext';
import {FieldsProvider} from './context/FieldsContext';
import {StyleProvider, STYLES} from './context/StyleContext';
import Form from './form/Form';

const CardForm = (props) => {
  return (
    <StyleProvider value={{ ...STYLES, fontFamily: props.fontFamily }}>
      <FieldsProvider>
        <CardProvider>
          <Card
            editMode
            backImage={{ uri: 'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g'}}
            frontImage={{uri: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68'}}
          />
          <Form />
        </CardProvider>

      </FieldsProvider>
    </StyleProvider>
  );
};

export default CardForm;
