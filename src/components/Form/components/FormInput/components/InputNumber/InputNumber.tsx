import React from 'react'

import { Input, Text } from '../../../../../../shared/components'
import { palette } from '../../../../../../shared/config/styles'
import { FormInputType } from '../../../../../../shared/types/FormInputType'

import { InputNumberWrapper } from './styles'

const InputNumber: React.FC<FormInputType> = ({ label = "", ...rest }) => (
  <InputNumberWrapper>
    <Text
      value={label}
      color={palette.gray2}
      size={14}
    />
    <Input {...rest} step={0.5} />
  </InputNumberWrapper>
)

export default InputNumber
