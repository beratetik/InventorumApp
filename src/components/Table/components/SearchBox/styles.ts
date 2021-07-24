import styled from "styled-components";

import { palette } from '../../../../shared/config/styles'
import { InputTextStyle } from '../../../../shared/components/Input/styles'
import searchIcon from '../../../../shared/assets/search.svg'

export const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 17px;
  background: ${palette.searchBackground};
  position: relative;
  border-radius: 3px;

  &:after {
    content: '';
    position: absolute;
    background: url(${searchIcon}) no-repeat;
    width: 12px;
    height: 12px;
    left: 13px;
    top: 11px;
  }
`

export const SearchInput = styled(InputTextStyle)`
  background: ${palette.searchBackground};
  border: none !important;
  color: ${palette.searchColor};
  font-family: Roboto;
  width: 100%;
  margin: 0;
  padding-left: 40px;
  line-height: 15.23px;
  letter-spacing: 0.24px;
  height: 35px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${palette.searchColor};
  }

`
