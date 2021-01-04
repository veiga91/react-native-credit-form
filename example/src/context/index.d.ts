import * as React from 'react';

interface Action  {
  type: string,
  payload?: any
}

interface ProviderProps {children: React.ReactNode}

/**************************** FIELDS **************************/
type FieldsDispatch = (action: FieldsAction) => void
type FieldsReducer = (arg0: FieldsState, arg1: FieldsAction) => FieldsState

type FieldName = "cvv" | "cardName" | "cardNumber" | "expirationDate";

interface FieldsActionsMeta {
  isValid: boolean,
  fieldName: FieldName
}

interface FieldsAction extends Action {
  meta: FieldsActionsMeta
}

interface Field {
  value: string,
  isValid: boolean
}

interface FieldsState {
  cvv: Field,
  cardNumber: Field,
  cardName: Field,
  expirationDate: Field
}

/**************************** CARD **************************/

type InfoIndex = number
type CardSide = "front" | "back"

interface CardState {
  index: InfoIndex,
  cardSide: CardSide
}

type CardDispatch = (action: Action) => void
type CardReducer = (arg0: CardState, arg1: Action) => CardState