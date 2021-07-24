import styled from 'styled-components'
import { palette } from '../../../../../../shared/config/styles'

type OptionProps = {
  value: string,
  disabled?: boolean,
  selected?: boolean
}

export const SelectContainer = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SelectWrapper = styled.select`
  border: 1px solid ${palette.gray};
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  margin-top: 8px;
  padding: 8px 16px;
  
  &:placeholder {
    color: red;
  }
`

export const Option = styled.option<OptionProps>`
  cursor: pointer;
`
