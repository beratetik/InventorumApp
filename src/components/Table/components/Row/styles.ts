import styled from "styled-components"

import { palette } from "../../../../shared/config/styles"
import Text from '../../../../shared/components/Text'

export const RowWrapper = styled.div<{ onClick: React.MouseEventHandler<HTMLDivElement> }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 58px;
  background-color: ${palette.tableBackground};
  border-bottom: 1px solid ${palette.innerBorder};
  cursor: pointer;

  &:last-of-type {
    border-bottom: unset;
  }
`

export const CellWrapper = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 12px;
  font-size: 14px;
  line-height: 15px;
  color: ${({ isActive }) => isActive ? palette.cellText : palette.inactiveCellText};
  border-bottom: 1px solid ${palette.innerBorder};

  &:not(:nth-child(4n)){
    &:after {
      content: "";
      background: ${palette.border};
      position: absolute;
      bottom: 0;
      right: 0;
      height: 46px;
      width: 1px;
      margin: 6px 0;
    }
  }
`

export const ImageWrapper = styled.div<{ isActive?: boolean }>`
  width: 36px;
  height: 36px;
  position: relative;

  ${({ isActive }) => isActive ? `
    &:after {
      content: "";
      background: ${palette.green};
      position: absolute;
      bottom: 0;
      right: 0;
      height: 10px;
      width: 10px;
      border-radius: 50%;
    }
  `: ''}
`

export const Image = styled.img<{ isActive?: boolean }>`
  width: 36px;
  border-radius: 50%;
  filter: grayscale(${({ isActive }) => isActive ? 0 : '100%Z'});
`

export const CellText = styled(Text) <{ isActive?: boolean }>`
  color: ${({ isActive }) => isActive ? palette.cellText : palette.inactiveCellText};
  margin-left: 18px;
`
