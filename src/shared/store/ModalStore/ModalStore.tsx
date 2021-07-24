import * as React from "react"

import { UserType } from "../../types/UserType"
import CreateContext from '../createContextHelper'

type ModalStoreContextType = {
  modalData: UserType | null,
  setModalData: React.Dispatch<React.SetStateAction<UserType | null>>
}

const defaultModalStoreContext = {
  modalData: null,
  setModalData: () => { }
}

const [useModalContext, ModalStoreContext] = CreateContext<ModalStoreContextType>(defaultModalStoreContext)

const ModalProvider: React.FC = ({ children }) => {
  const [modalData, setModalData] = React.useState<UserType | null>(null)

  const value = {
    modalData,
    setModalData
  }

  return (
    <ModalStoreContext.Provider {...{ value }}>
      {children}
    </ModalStoreContext.Provider>
  )
}


export { ModalProvider, useModalContext }
