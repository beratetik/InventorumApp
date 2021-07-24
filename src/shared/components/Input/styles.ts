import styled from 'styled-components'

import { palette } from '../../config/styles'
import { FormInputType } from '../../types/FormInputType'

export const InputTextStyle = styled.input<FormInputType>`
  border: 1px solid ${palette.gray};
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 8px;
  width: 100%;
`

export const InputRadioStyle = styled.input<FormInputType>`
  cursor: pointer;
  margin: 0;
  width: 18px;
  height: 18px;
  min-width: 18px;
  border-radius: 50%;
`

// appearance: none;
// border: 2px solid ${palette.purple};

// ${({ checked }) => checked ? `
//   &:after {
//     background: radial-gradient(${palette.purple} 50%, rgba(255, 0, 0, 0) 50%);
//     content: '';
//     width: 18px;
//     height: 18px;
//     background-position: center;
//     position: absolute;
//   }
// ` : ''}
