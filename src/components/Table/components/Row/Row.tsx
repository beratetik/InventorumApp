import React, { useCallback } from 'react'

import { useModalContext } from '../../../../shared/store/ModalStore'
import { UserType } from '../../../../shared/types/UserType'

import { RowWrapper, CellWrapper, ImageWrapper, Image, CellText } from './styles'

interface Props {
  user: UserType
}

type CellType = {
  avatar?: string,
  value: string,
  isActive?: boolean
}

const Avatar: React.FC<CellType> = ({ avatar, value, isActive }) => (
  <ImageWrapper {...{ isActive }}>
    <Image src={avatar} alt={value} {...{ isActive }} />
  </ImageWrapper>
)

const Cell: React.FC<CellType> = React.memo(({ avatar, value, isActive }) => (
  <CellWrapper {...{ isActive }} >
    {avatar ? <Avatar {...{ avatar, value, isActive }} /> : null}
    <CellText
      {...{ value, isActive }}
      size={14}
      height={15}
    />
  </CellWrapper>
))


const Row: React.FC<Props> = ({ user }) => {
  const { setModalData } = useModalContext()

  const onClick = useCallback(() => setModalData(user), [user, setModalData])

  return (
    <RowWrapper {...{ onClick }}>
      <Cell
        avatar={user.avatar}
        isActive={user.isActive}
        value={`${user.first_name} ${user.last_name}`}
      />
      <Cell isActive={user.isActive} value={user.department} />
      <Cell isActive={user.isActive} value={user.email} />
      <Cell isActive={user.isActive} value={`${user.contribution} €`} />
    </RowWrapper>
  )
}

export default Row
