import styled from 'styled-components'

import { palette } from '../../shared/config/styles'

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`

export const ModalBox = styled.div`
  min-width: 300px;
  width: 500px;
  background-color: ${palette.white};
  border-radius: 4px;
  box-shadow: 15px ​15px 15px 15px rgb(81 75 75 / 20%);
`
