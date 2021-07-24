import React from 'react'

import { TextWrapper, LabelWrapper } from './styles'
import Props from './types'

const TextTypes = {
  "span": TextWrapper,
  "label": LabelWrapper
}

const Text: React.FC<Props> = ({ type = 'span', value, ...rest }) => {
  if (!value) return null
  const Component = TextTypes[type]

  return <Component {...rest}>{value}</Component>
}

export default Text
