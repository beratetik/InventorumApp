import * as React from 'react'

import { useModalContext } from '../../shared/store/ModalStore'
import fields from '../../shared/config/fields'

import { Form } from '../../components'
import { ModalHeader } from './components'
import {
  ModalWrapper,
  ModalBox
} from './styles'

const Modal: React.FC = () => {
  const overlay = React.createRef<HTMLDivElement>()
  const { modalData, setModalData } = useModalContext()
  if (!modalData) return null

  const closeModal = () => setModalData(null)

  const getTitle = () => {
    return modalData?.first_name ? `Edit Contact "${modalData.first_name}"` : "Add Contact"
  }

  return (
    <ModalWrapper ref={overlay} onClick={closeModal} >
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalHeader title={getTitle()} {...{ closeModal }} />
        <Form
          fields={fields}
          data={modalData}
          cancel={closeModal}
        />
      </ModalBox>
    </ModalWrapper >
  )
}

export default Modal




