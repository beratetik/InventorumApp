import styled from 'styled-components'

import { palette } from '../../shared/config/styles'

export const TableContainer = styled.div`
`

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px;
  margin: 12px 17px 0;
  background-color: ${palette.white};
  border: 1px solid ${palette.border};
  min-height: 300px;
`

export const TableInnerWrapper = styled.div`
  border: 1px solid ${palette.border};
  border-bottom: none;
`

export const Loading = styled.div`
  margin: auto;
  color: ${palette.gray2};
`
