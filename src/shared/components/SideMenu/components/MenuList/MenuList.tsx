import React from 'react'

import { MenuItemType } from '../../../../types/MenuItemTypes'
import { palette } from '../../../../config/styles'
import { Text } from '../../../../components'

import MenuIcons from '../../../../assets/menu'

import { MenuListWrapper, MenuItemWrapper, StyledLink, Icon } from './styles'


const MenuItem: React.FC<MenuItemType> = ({ icon, title, url }) => {
  const src = MenuIcons[icon]

  return (
    <MenuItemWrapper >
      {/* active={false} */}
      <StyledLink to={url}>
        <Icon {...{ src }} alt={title} />
        <Text
          value={title}
          size={12}
          weight={500}
          height={46}
          color={palette.gray}
        />
      </StyledLink>
    </MenuItemWrapper>
  )
}


const MenuList: React.FC<{ menuItems: MenuItemType[] }> = ({ menuItems }) => (
  <MenuListWrapper>
    {menuItems.map(page => <MenuItem key={page.url} {...page} />)}
  </MenuListWrapper>
)

export default MenuList
