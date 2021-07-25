import React from 'react'


import { FormInputType } from '../../../../../../shared/types/FormInputType'
import { Input, Text } from '../../../../../../shared/components'
import { palette } from '../../../../../../shared/config/styles'

import { ChecboxWrapper } from './styles'

const CheckBox: React.FC<FormInputType> = ({ label, value, options, onChange, ...rest }) => {
  if (!options) return null

  return (
    <>
      <Text
        value={`${label}`}
        size={14}
        color={palette.gray2}
      />
      {Object.entries(options)?.map((option) => (
        <ChecboxWrapper key={option[0]}>
          <Input
            type="checkbox"
            id={option[0]}
            checked={Boolean(value)}
            value={option[1]}
            name={option[0]}
            {...{ onChange }}
          />
          <Text
            type='label'
            color={palette.gray2}
            htmlFor={option[0]}
            value={option[1]}
          />
        </ChecboxWrapper>
      ))
      }
    </>
  )
}

export default React.memo(CheckBox)
