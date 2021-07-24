import React from 'react'

import { FormInputType } from '../../types/FormInputType'

import { InputTextStyle, InputRadioStyle } from './styles'
import { StyledComponent } from 'styled-components'

type InputListType = { [key: string]: StyledComponent<"input", any, FormInputType> }

const InputTypes: InputListType = {
  text: InputTextStyle,
  email: InputTextStyle,
  radio: InputRadioStyle,
  checkbox: InputRadioStyle,
  number: InputTextStyle
}

const Input: React.FC<FormInputType> = (({ type = "text", ...rest }) => {
  const Component = InputTypes[type]
  if (!Component) return null

  let props = { ...{ type, ...rest } }
  if (type === "email") {
    props = { ...props, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" }
  }

  return <Component {...props} />
})

export default Input
