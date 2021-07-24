import React from 'react'

import { TitleWrapper } from './styles'
import Props from './types'

const Title: React.FC<Props> = ({ value, ...rest }) => (
  <TitleWrapper {...rest}>{value}</TitleWrapper>
)

export default Title
