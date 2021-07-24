import styled from 'styled-components'

import LockIcon from '../../../../assets/lock.svg'

export const AccountBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  height: 46px;
  margin: 12px 39px 12px auto;
  cursor: pointer;
`

export const Icon = styled.img.attrs({
  src: LockIcon,
  alt: 'Lock icon'
})`
  border: 5px solid rgba(169, 103, 154, 0.8);
  border-radius: 50%;
  margin-right: 5px;
`
