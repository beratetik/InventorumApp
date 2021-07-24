import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const MenuListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const MenuItemWrapper = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
  padding-left: 29px;
  height: 50px;
`

export const Icon = styled.img`
  margin-right: 11px;
`
