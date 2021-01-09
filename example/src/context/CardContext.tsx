import React, { useReducer, createContext, useContext } from 'react';
import { CardState, CardDispatch, ProviderProps, CardReducer } from '.';

const CardStateContext = createContext<CardState | undefined>(undefined);
const CardDispatchContext = createContext<CardDispatch | undefined>(undefined);

const INITIAL_STATE: CardState = {
  index: 0,
  cardSide: 'front'
};

export const TYPES = {
  UPDATE_INDEX: "UPDATE_INDEX",
  FLIP_CARD_FRONT: "FLIP_CARD_FRONT",
  FLIP_CARD_BACK: "FLIP_CARD_BACK"
};

const cardReducer: CardReducer = (state, action) => {
  switch(action.type) {
    case TYPES.UPDATE_INDEX:
      return {
        ...state,
        index: action.payload
      }
    case TYPES.FLIP_CARD_FRONT:
      return {
        ...state,
        cardSide: 'front'
      };
    case TYPES.FLIP_CARD_BACK: 
      return {
        ...state,
        cardSide: 'back'
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
};


const CardProvider: React.FC<ProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(cardReducer, INITIAL_STATE);

  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>
        {children}
      </CardDispatchContext.Provider>
    </CardStateContext.Provider>
  )
};

const useCardState: () => CardState = () => {
  const context = useContext(CardStateContext);
  if (context === undefined) {
    throw new Error('useFieldsState must be used within a CardStateContext')
  }
  return context
};

const useCardDispatch: () => CardDispatch = () => {
  const context = useContext(CardDispatchContext);
  if (context === undefined) {
    throw new Error('useFieldsDispatch must be used within a CardDispatchContext')
  }
  return context
};

const useCard: () => [CardState, CardDispatch] = () => {
  return [useCardState(), useCardDispatch()]
};


export {CardProvider, useCard, useCardState, useCardDispatch};