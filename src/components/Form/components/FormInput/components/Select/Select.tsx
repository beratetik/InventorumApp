import React from 'react'

import { Text } from '../../../../../../shared/components'
import { FormInputType } from '../../../../../../shared/types/FormInputType'
import { palette } from '../../../../../../shared/config/styles'

import { SelectContainer, SelectWrapper, Option } from './styles'

const Select: React.FC<FormInputType> = ({ label = "", options, value, name, ...rest }) => {
  if (!options) return null

  return (
    <SelectContainer>
      <Text
        value={`${label}:`}
        size={14}
        color={palette.gray2}
      />
      <SelectWrapper {...{ name, ...rest }} id={name} value={value || "default"}>
        <Option value="default" disabled>Select your option</Option>
        {Object.entries(options).map((option: string[]) => (
          <Option
            key={option[0]}
            value={option[0]}>
            {option[1]}
          </Option>
        ))
        }
      </SelectWrapper>
    </SelectContainer>
  )
}

export default React.memo(Select)
