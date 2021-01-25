import {SetStateAction} from 'react';
import {FieldName} from 'context';
import {LayoutChangeEvent, ImageSourcePropType} from 'react-native';

interface LayoutState {
  width: number;
  height: number;
  y: number;
  x: number;
}

type LayoutFunction = (
  setState: (obj: SetStateAction<LayoutState>) => void,
  ) => (synteticEvent: LayoutChangeEvent) => void

interface CardTextProps {
  id: FieldName;
}

interface FrontInfoProps {
  expirationLabel?: string;
}

interface CardFieldsProps {
  style?: any
  id: FieldName
  setLayout: (props: any) => void
  index: number
  disabled?: boolean
}

interface CardNameProps {
  getLayout: (synteticEvent: LayoutChangeEvent) => void
}

interface FocusProps {
  layouts: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>
}

interface TouchableWrapperProps {
  index: number;
  disabled: boolean | undefined
  children: any
}

interface CardProps {
  cardWidth?: number | string;
  cardHeight?: number | string;
  backImage: ImageSourcePropType;
  frontImage: ImageSourcePropType;
  editMode: boolean
}