type FieldMask = (value: string) => string

type FieldValidator = (value: string) => boolean


interface FieldConfig {
  name: string
  mask: FieldMask
  validator: FieldValidator
}

interface ItemLayout {
  length: number
  offset: number
  index: number
}

type ItemLayoutFunction = (data: FieldConfig, index: number) => ItemLayout