import React, { useReducer, createContext, useContext } from 'react';
import { FieldsState, FieldsDispatch, FieldsReducer, ProviderProps } from '.';

const FieldsStateContext = createContext<FieldsState | undefined>(undefined);
const FieldsDispatchContext = createContext<FieldsDispatch | undefined>(undefined);

const TYPES = {
  UPDATE_VALUE: "UPDATE_VALUE",
  CLEAR_FIELD: "CLEAR_FIELD",
  UPDATE_VALIDATION: "UPDATE_VALIDATION"
};

const fieldsReducer:FieldsReducer = (state, action) => {
  switch(action.type) {
    case TYPES.UPDATE_VALUE:
      return {
        ...state,
        [action.meta.fieldName]: {
          ...state[action.meta.fieldName],
          value: action.payload
        }
      };
    case TYPES.CLEAR_FIELD:
      return {
        ...state,
        [action.meta.fieldName]: {
          [action.meta.fieldName]: {
            ...state[action.meta.fieldName],
            value: undefined
          }
        }
      };
    case TYPES.UPDATE_VALIDATION:
      return {
        ...state,
        [action.meta.fieldName]: {
          [action.meta.fieldName]: {
            ...state[action.meta.fieldName],
            isValid: action.meta.isValid
          }
        }
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
};

const FIELD_STRUCTURE = {
  value: '',
  isValid: false
};

const INITIAL_STATE: FieldsState = {
  cvv: FIELD_STRUCTURE,
  cardNumber: FIELD_STRUCTURE,
  cardName: FIELD_STRUCTURE,
  expirationDate: FIELD_STRUCTURE
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
  return context
};

const useFieldsDispatch: () => FieldsDispatch = () => {
  const context = useContext(FieldsDispatchContext);
  if (context === undefined) {
    throw new Error('useFieldsDispatch must be used within a FieldsDispatchContext')
  }
  return context
};

const useFields: () => [FieldsState, FieldsDispatch] = () => {
  return [useFieldsState(), useFieldsDispatch()]
};


export {FieldsProvider, useFields};