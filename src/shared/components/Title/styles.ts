import styled from 'styled-components'

import { palette, typo } from '../../config/styles'

import Props from './types'

export const TitleWrapper = styled.span<Partial<Props>>`
  color: ${({ color }) => color ? color : palette.gray2};
  font-family: ${({ family }) => family ? family : typo.title.family};
  font-size: ${({ size }) => size ? size : typo.title.size}px;
  font-weight: ${({ weight }) => weight ? weight : typo.title.weight};
  line-height: 26px;
  margin: 0;
`
