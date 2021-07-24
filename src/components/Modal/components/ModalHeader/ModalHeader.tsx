import React from 'react'

import { Title } from '../../../../shared/components'

import { ModalHeaderWrapper, CloseButton } from './styles'

interface Props {
  closeModal: () => void;
  title: string
}

const ModalHeader = ({ closeModal, title = "Edit Contact" }: Props) => (
  <ModalHeaderWrapper>
    <Title value={title} />
    <CloseButton onClick={closeModal}>X</CloseButton>
  </ModalHeaderWrapper>
)

export default ModalHeader
