import { StyleSheet } from 'react-native';
import { BASE_FONT } from './sizes';

export const base = StyleSheet.create({
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  flex3: {
    flex: 3
  },
  paddingLeft3Percent: {
    paddingLeft: '3%'
  },
  absolutePositioning: StyleSheet.absoluteFillObject
});

export const typograph = StyleSheet.create({
  cardNumber: {
    color: 'white',
    fontSize: (BASE_FONT * 1.75)
  },
  cardName: {
    color: 'white',
    fontSize: (BASE_FONT * 1.15)
  },
  expirationDate: {
    color: 'white',
    fontSize: (BASE_FONT * 1.15)
  },
  cvv: {
    color: 'white',
    fontSize: (BASE_FONT * 1.15)
  },
  smallTextLight: {
    color: 'white',
    fontSize: (BASE_FONT * 0.65)
  }
});

export default {
  typograph,
  base
};
