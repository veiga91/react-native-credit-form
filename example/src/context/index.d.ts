import * as React from 'react';

interface Action  {
  type: string
  payload?: any
}

interface ProviderProps {children: React.ReactNode}

/**************************** FIELDS **************************/

type FieldsDispatch = (action: FieldsAction) => void
type FieldsReducer = (arg0: FieldsState, arg1: FieldsAction) => FieldsState

type FieldName = "cvv" | "cardName" | "cardNumber" | "expirationDate";

interface FieldsActionsMeta {
  fieldName: FieldName
}

interface FieldsAction extends Action {
  meta: FieldsActionsMeta
}

interface FieldsState {
  cvv: string
  cardNumber: string
  cardName: string
  expirationDate: string
}

/**************************** CARD **************************/

type InfoIndex = number
type CardSide = "front" | "back"

interface CardState {
  index: InfoIndex
  cardSide: CardSide
}

type CardDispatch = (action: Action) => void
type CardReducer = (arg0: CardState, arg1: Action) => CardState


/**************************** STYLE **************************/

interface StyleContextObj {
  base: any
  typograph: any
  sizes: any,
  fontFamily: string | undefined,
  focusBorderColor: string
}