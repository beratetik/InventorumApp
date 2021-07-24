import React from 'react'

import menuItems from '../../config/menuItems'
import { useGlobalContext } from '../../store/GlobalStore'

import { MenuList } from './components'
import {
  SideMenuWrapper,
  Logo
} from './styles'


const SideMenu: React.FC = () => {
  const { isMenuOpen } = useGlobalContext()

  return (
    <SideMenuWrapper {...{ isMenuOpen }}>
      <Logo />
      <MenuList {...{ menuItems }} />
    </SideMenuWrapper>
  )
}

export default SideMenu
