import React from 'react'

import { FormInputType } from '../../../../shared/types/FormInputType'

import { Checkbox, InputText, Radio, Select, InputNumber } from './components'

type InputListType = { [key: string]: React.FC<FormInputType> }

const FormInputTypes: InputListType = {
  "text": InputText,
  "email": InputText,
  "checkbox": Checkbox,
  "radio": Radio,
  "select": Select,
  "number": InputNumber
}

const FormInput: React.FC<FormInputType> = ({ type, label = "", ...rest }) => {
  const Component = FormInputTypes[type]
  return <Component  {...{ type, label, ...rest }} />
}

export default React.memo(FormInput)
