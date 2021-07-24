import styled from 'styled-components'

import { palette, config } from '../../config/styles'
import MenuIcon from '../../assets/menu.svg'

export const NavbarWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  background: ${palette.white};
  border: 1px solid ${palette.border};
  height: ${config.navbarHeight}px;
  z-index: 1;
`

export const InnerNavbarWrapper = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  align-items: center;
  transition: margin-left 0.5s ease 0s;
  margin-left: ${({ isMenuOpen }) => isMenuOpen ? config.sideMenuWidth : 0}px;
  width: 100%;
`

export const HamburgerButton = styled.button`
  border: none;
  background-color: transparent;
  color: rgba(0,0,0, 0.54);
  cursor: pointer;
  margin-left: 14px;
  margin-right: 16px;
  padding: 0;
  height: 24px;
`

export const Icon = styled.img.attrs({
  src: MenuIcon,
  alt: "Hamburger Menu Icon"
})``
