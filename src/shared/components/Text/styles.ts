import styled, { css } from 'styled-components'

import { palette, typo } from '../../config/styles'

import Props from './types'

const commonStyles = ({ color, family, size, weight, height }: any) => css`
  color: ${color ? color : palette.purple};
  font-family: ${family ? family : typo.text.family};
  font-size: ${size ? size : typo.text.size}px;
  font-weight: ${weight ? weight : typo.text.weight};
  letter-spacing: 0.24px;
  margin: 0;
  cursor: pointer;

  ${height ? `line-height:${height}px` : ''};
`

export const TextWrapper = styled.span<Partial<Props>>`
  ${(props) => commonStyles(props)}
`

export const LabelWrapper = styled.label<Partial<Props>>`
  ${(props) => commonStyles(props)}
`
