import * as React from "react"
import useSideMenu from '../../hooks/useSideMenu'
import CreateContext from '../createContextHelper'

type GlobalContextType = {
  isMenuOpen: boolean,
  toggleMenu: () => void
}

const defaultGlobalContext = {
  isMenuOpen: true,
  toggleMenu: () => { }
}

const [useGlobalContext, GlobalContext] = CreateContext<GlobalContextType>(defaultGlobalContext)

const GlobalProvider: React.FC = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useSideMenu(true)

  const value = {
    isMenuOpen,
    toggleMenu
  }

  return (
    <GlobalContext.Provider {...{ value }}>
      {children}
    </GlobalContext.Provider>
  )
}


export { GlobalProvider, useGlobalContext }
