import styled from 'styled-components'

import { config, palette } from '../../config/styles'
import LogoIcon from '../../assets/Logo.svg'

export const SideMenuWrapper = styled.div<{ isMenuOpen: boolean }>`
  position: fixed;
  width: ${config.sideMenuWidth}px;
  max-width: 100%;
  top: 0;
  bottom: 0;
  z-index: 1;
  left: ${({ isMenuOpen }) => isMenuOpen ? 0 : (config.sideMenuWidth * -1)}px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px 0px;
  overflow-y: auto;
  transition: left 0.5s ease 0s;
  background: linear-gradient(180deg, #192842 3.01%, #382C50 100%);
`

export const Logo = styled.div`
  height: ${config.navbarHeight}px;
  padding-left: 29px;
  padding-top: 29px;
  border-bottom: 1px solid ${palette.sideMenuBorder};
  background: url(${LogoIcon}) no-repeat;
  background-position: 29px 29px;
`
