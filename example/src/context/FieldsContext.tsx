import React, {useReducer, createContext, useContext} from 'react';
import {FieldsState, FieldsDispatch, FieldsReducer, ProviderProps} from './';

const FieldsStateContext = createContext<FieldsState | undefined>(undefined);
const FieldsDispatchContext = createContext<FieldsDispatch | undefined>(undefined);

export const TYPES = {
  UPDATE_VALUE: "UPDATE_VALUE",
  CLEAR_FIELD: "CLEAR_FIELD"
};

const INITIAL_STATE: FieldsState = {
  cvv: 'CVV',
  cardNumber: 'XXXX XXXX XXXX XXXX',
  cardName: 'MY NAME',
  expirationDate: 'MM/YY'
};

const fieldsReducer:FieldsReducer = (state, action) => {
  switch(action.type) {
    case TYPES.UPDATE_VALUE:
      return {
        ...state,
        [action.meta.fieldName]: action.payload
      };
    case TYPES.CLEAR_FIELD:
      return {
        ...state,
        [action.meta.fieldName]: INITIAL_STATE[action.meta.fieldName]
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
};

const FieldsProvider: React.FC<ProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(fieldsReducer, INITIAL_STATE);

  return (
    <FieldsStateContext.Provider value={state}>
      <FieldsDispatchContext.Provider value={dispatch}>
        {children}
      </FieldsDispatchContext.Provider>
    </FieldsStateContext.Provider>
  )
};

const useFieldsState: () => FieldsState = () => {
  const context = useContext(FieldsStateContext);
  if (context === undefined) {
    throw new Error('useFieldsState must be used within a FieldsStateContext')
  }
  return context;
};

const useFieldsDispatch: () => FieldsDispatch = () => {
  const context = useContext(FieldsDispatchContext);
  if (context === undefined) {
    throw new Error('useFieldsDispatch must be used within a FieldsDispatchContext')
  }
  return context;
};

const useFields: () => [FieldsState, FieldsDispatch] = () => {
  return [useFieldsState(), useFieldsDispatch()];
};


export {FieldsProvider, useFields, useFieldsState, useFieldsDispatch};