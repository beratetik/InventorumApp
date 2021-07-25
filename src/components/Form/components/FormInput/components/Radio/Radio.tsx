import React from 'react'

import { Input, Text } from '../../../../../../shared/components'
import { FormInputType } from '../../../../../../shared/types/FormInputType'
import { palette } from '../../../../../../shared/config/styles'

import { RadioContainer, RadioGroupWrapper, RadioWrapper } from './styles'

type RadioItemProps = {
  option: any,
  name?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioItem: React.FC<RadioItemProps> = ({ option, name, value, onChange }) => (
  <RadioWrapper>
    <Input
      type="radio"
      id={option[0]}
      value={option[0]}
      checked={value === option[0]}
      {...{ name, onChange }}
    />
    <Text
      type='label'
      color={palette.gray2}
      htmlFor={option[0]}
      value={option[1]}
    />
  </RadioWrapper>
)

const Radio: React.FC<FormInputType> = ({ label = "", options, required, name, ...rest }) => {
  if (!options) return null

  return (
    <RadioContainer>
      <Text
        value={`${label}:`}
        size={14}
        color={palette.gray2}
      />
      <RadioGroupWrapper>
        {Object.entries(options)?.map(option => (
          <RadioItem
            key={option[0]}
            {...{ option, name, ...rest }}
          />
        ))}
      </RadioGroupWrapper>
    </RadioContainer>
  )
}

export default React.memo(Radio)
