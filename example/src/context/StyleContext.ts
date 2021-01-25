import {createContext, useContext} from 'react';
import {StyleContextObj } from '.';
import {base,typograph} from '../style/styles';
import * as sizes from '../style/sizes';

export const STYLES = {
  base,
  typograph,
  sizes,
  fontFamily: undefined,
  focusBorderColor: 'gold'
};

const StyleContext = createContext<StyleContextObj | undefined>(STYLES);

const useStyle: () => StyleContextObj = () => {
  const context = useContext(StyleContext);
  if (context === undefined) {
    throw new Error('useFieldsState must be used within a FieldsStateContext')
  }
  return context;
};

const StyleProvider = StyleContext.Provider;

export {StyleProvider, useStyle};