import styled from 'styled-components'

import { palette, config } from '../config/styles'

export const MainContainer = styled.div<{ isMenuOpen: boolean }>`
  background: ${palette.background};
  padding-top: ${config.navbarHeight}px;
  margin-left: ${({ isMenuOpen }) => isMenuOpen ? config.sideMenuWidth : 0}px;
  transition: margin-left 0.5s ease 0s;
  height: 100%;
`

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - ${config.navbarHeight}px);
  place-content: center;
  place-items: center;
  font-size: 26px;
  margin-top: -${config.navbarHeight}px;
`
