import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CARD_HEIGHT, CARD_WIDTH } from './style/sizes';
import commonStyle from './style/styles';
import Focus from './Focus';

const getContainerLayout = (setState) => ({ nativeEvent: { layout: { y, height } } }) => {
  setState(prevValue => ({ ...prevValue, y: y + 5, height: height - 10 }))
};

const getTextLayout = (setState) => ({ nativeEvent: { layout: { width, height, x, y } } }) => {
  console.log(x, width, y)
  setState(prevValue => ({ ...prevValue, width: width + 10, x }))
}; 

const FrontFields = ({ index = 0 }) => {
  const [cardNumberLayout, setCardNumberLayout] = useState({});
  const [nameLayout, setNameLayout] = useState({});
  const [expirationDateLayout, setExpirationDateLayout] = useState({});

  const layouts = [nameLayout, cardNumberLayout, expirationDateLayout];

  return (
    <View  style={styles.container}>

      <View style={styles.content}>
        <View style={commonStyle.flex2}>
          
        </View>
        
        <View onLayout={getContainerLayout(setCardNumberLayout)} style={[styles.cardNumber, commonStyle.flex1, commonStyle.paddingLeft3Percent]}>
          <Text onLayout={getTextLayout(setCardNumberLayout)}  style={{ fontSize: 28, color: 'white' }}>4444 4444 4444 4444</Text>
        </View>

        <View onLayout={getContainerLayout(setExpirationDateLayout)} style={[styles.expirationDate, commonStyle.flex1]}>
          <Text onLayout={getTextLayout(setExpirationDateLayout)} style={{ fontSize: 20, color: 'white' }}>
            <Text style={{ fontSize: 12, color: 'white' }}>VALID THRU </Text>
            12/21
          </Text>
        </View>

        <View onLayout={getContainerLayout(setNameLayout)}  style={[styles.name, commonStyle.flex1, commonStyle.paddingLeft3Percent]}>
            <Text onLayout={getTextLayout(setNameLayout)} style={{ fontSize: 18, color: 'white' }}>WANDERSON A. VEIGAAA </Text>
        </View>
       
        <View style={styles.cardBrand}>
         
        </View>
      </View>
      <Focus {...layouts[index]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: CARD_HEIGHT,
    alignItems: 'center'
  },
  content: {
    width: '100%',
    maxWidth: CARD_WIDTH,
    maxHeight: CARD_HEIGHT,
    height: '100%'
  },
  cardNumber: {
    alignItems: 'center',
    flexDirection: 'row',
    width: undefined
  },
  cardBrand: {
    ...StyleSheet.absoluteFillObject,
    width: 'auto',
    height: 'auto',
    left: undefined,
    right: 0,
    top: 0,
    bottom: undefined
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  expirationDate: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'flex-end'
  }
});

export default FrontFields;