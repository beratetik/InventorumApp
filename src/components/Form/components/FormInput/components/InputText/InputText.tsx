import React from 'react'

import { Input, Text } from '../../../../../../shared/components'
import { palette } from '../../../../../../shared/config/styles'
import { FormInputType } from '../../../../../../shared/types/FormInputType'

import { InputTextWrapper } from './styles'

const InputText: React.FC<FormInputType> = ({ label = "", ...rest }) => (
  <InputTextWrapper>
    <Text
      value={label}
      color={palette.gray2}
      size={14}
    />
    <Input {...rest} />
  </InputTextWrapper>
)

export default React.memo(InputText)
