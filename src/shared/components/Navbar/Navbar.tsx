import React from 'react'

import { Title } from '../../../shared/components'
import { useGlobalContext } from '../../store/GlobalStore'

import { AccountBox } from './components'
import { NavbarWrapper, InnerNavbarWrapper, HamburgerButton, Icon } from './styles'

const Navbar: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useGlobalContext()

  return (
    <NavbarWrapper>
      <InnerNavbarWrapper {...{ isMenuOpen }}>
        <HamburgerButton onClick={toggleMenu}>
          <Icon />
        </HamburgerButton>
        <Title value="Page Title" />
        <AccountBox firstName="Berat" lastName="Tetik" />
      </InnerNavbarWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
