import React from 'react'

import { Text } from '../../../../components'

import { AccountBoxWrapper, Icon } from './styles'

interface Props {
  firstName: string
  lastName: string
}

const AccountBox: React.FC<Props> = ({ firstName, lastName }) => (
  <AccountBoxWrapper>
    <Icon />
    <Text
      value={`${firstName} ${lastName}`}
      size={13}
      weight={500}
    />
  </AccountBoxWrapper>
)

export default AccountBox
