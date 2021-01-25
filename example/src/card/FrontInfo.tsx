import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Focus from './Focus';
import {getCardNameLayout, getLayout} from './onChangeLayout';
import styles from './frontInfo.styles';
import CardName from './CardName';
import CardInfoField from './CardInfoField';
import {useStyle} from '../context/StyleContext';

const INITIAL_LAYOUT = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
};

const FrontFields: React.FC<{}> = () => {
  const {base, typograph} = useStyle();
  const [cardNumberLayout, setCardNumberLayout] = useState(INITIAL_LAYOUT);
  const [nameLayout, setNameLayout] = useState(INITIAL_LAYOUT);
  const [expirationDateLayout, setExpirationDateLayout] = useState(
    INITIAL_LAYOUT,
  );
 
  const shouldRenderFocus = nameLayout.x + expirationDateLayout.x + cardNumberLayout.x > 0;
  
  return (
    <View style={[base.absolutePositioning, styles.container]}>
  
      {shouldRenderFocus && 
      <Focus 
        layouts={[
          nameLayout,
          expirationDateLayout,
          cardNumberLayout,
          nameLayout
        ]} />
      }

      <View style={[styles.content, base.paddingLeft3Percent]}>
        <View style={base.flex2}></View>

        <CardInfoField
          setLayout={getLayout(setCardNumberLayout)}
          id="cardNumber"
          index={2}
          style={styles.cardNumber}
        />

        <Text
          style={[
            base.absolutePositioning,
            typograph.smallTextLight,
            styles.nameLabel,
          ]}>
          {'NAME ON THE CARD'}
        </Text>
        <CardName getLayout={getCardNameLayout(setNameLayout)} />

        <Text
          style={[
            base.absolutePositioning,
            typograph.smallTextLight,
            styles.expirationLabel,
          ]}>
          {'VALID THRU'}
        </Text>
        <CardInfoField
          setLayout={getLayout(setExpirationDateLayout)}
          id="expirationDate"
          index={1}
          style={styles.expirationDate}
        />

        <View style={[base.absolutePositioning, styles.cardBrand]}>
          <Text>ldskflskdfjlkfj</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(FrontFields);
