import {createContext, SetStateAction} from 'react';

interface IValuesObj {
  value: string;
  validator: string;
  mask: (value: string) => string;
}

interface IContext {
  currentFieldIndex: number;
  changeIndex: SetStateAction<(v?: number) => void>;
  cardNumber: IValuesObj;
  expireDate: IValuesObj;
  cardName: IValuesObj;
  cvv: IValuesObj;
}

export const form: IContext = {
  currentFieldIndex: 0,
  changeIndex: () => {},
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
};

const FormContext = createContext({
  ...form,
});

export default FormContext;
