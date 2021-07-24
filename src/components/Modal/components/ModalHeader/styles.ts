import styled from 'styled-components'

import { palette } from '../../../../shared/config/styles'

export const ModalHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${palette.innerBorder};
  padding: 20px 30px;
`

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: ${palette.gray};
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
`
