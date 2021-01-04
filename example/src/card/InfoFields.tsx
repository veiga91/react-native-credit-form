import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {base, typograph} from '../style/styles';
import Focus from './Focus';
import CardText from './CardText';
import TouchableWrapper from './TouchableWrapper';
import {getCardNameLayout, getLayout} from './onChangeLayout';
import styles from './frontInfo.styles';

interface IValueObj {
  value: string;
  validator: string;
  mask: (value: string) => string;
}

interface IValues {
  cardNumber: IValueObj;
  expireDate: IValueObj;
  cardName: IValueObj;
}

export interface IFrontInfoProps {
  fontFamily?: string;
  expirationLabel?: string;
  currentIndex: number;
  changeIndex: (i: number) => void;
  values: IValues
}

const {absolutePositioning, flex2, paddingLeft3Percent} = base;

const INITIAL_LAYOUT = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
};

const FrontFields: React.FC<IFrontInfoProps> = (props) => {
  const {fontFamily, currentIndex, values, setExpirationDateLayout, setCardNumberLayout, setNameLayout} = props;
  
  const isNameField = currentIndex === 0;
  const nameFieldBorder = isNameField ? 2 : 0;
  const nameFieldPadding = isNameField ? 5 : 7;
  
  return (
    <View style={[styles.content, paddingLeft3Percent]}>
        <View style={flex2}></View>

        <TouchableWrapper changeIndex={updateIndex} index={2} disabled={false}>
          <View
            style={[absolutePositioning, styles.cardNumber]}
            onLayout={getLayout(setCardNumberLayout)}>
            <CardText id="cardNumber" config={values.cardNumber} fontFamily={fontFamily} />
          </View>
        </TouchableWrapper>

        <Text
          style={[
            absolutePositioning,
            typograph.smallTextLight,
            {fontFamily},
            styles.nameLabel,
          ]}>
          {'NAME ON THE CARD'}
        </Text>
        <TouchableWrapper changeIndex={updateIndex} index={3} disabled={false}>
          <View
            style={[
              absolutePositioning,
              styles.name,
              {borderWidth: nameFieldBorder, paddingLeft: nameFieldPadding},
            ]}
            onLayout={getCardNameLayout(setNameLayout)}>
            <CardText id="cardName" config={values.cardName} fontFamily={fontFamily} />
          </View>
        </TouchableWrapper>

        <Text
          style={[
            absolutePositioning,
            typograph.smallTextLight,
            {fontFamily},
            styles.expirationLabel,
          ]}>
          {'VALID THRU'}{' '}
        </Text>
        <TouchableWrapper changeIndex={updateIndex} index={1} disabled={false}>
          <View
            style={[absolutePositioning, styles.expirationDate]}
            onLayout={getLayout(setExpirationDateLayout)}>
            <CardText id="expireDate" config={values.expireDate} fontFamily={fontFamily} />
          </View>
        </TouchableWrapper>

        <View style={[absolutePositioning, styles.cardBrand]}>
          <Text>ldskflskdfjlkfj</Text>
        </View>
      </View>
  );
};

export default FrontFields;
