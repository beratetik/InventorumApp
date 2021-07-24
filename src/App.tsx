import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Navbar, SideMenu } from './shared/components'
import { MainContainer, GlobalStyle } from './shared/styles'
import { GlobalProvider, useGlobalContext, ModalProvider } from './shared/store'
import routes from './shared/config/routes'

import { Modal } from './components'
import Routes from './routes'

const Layout: React.FC = () => {
  const { isMenuOpen } = useGlobalContext()

  return (
    <MainContainer {...{ isMenuOpen }}>
      <Routes {...{ routes }} />
    </MainContainer>
  )
}

const App: React.FC = () => (
  <GlobalProvider>
    <ModalProvider>
      <GlobalStyle />
      <Navbar />
      <Modal />
      <Router>
        <SideMenu />
        <Layout />
      </Router>
    </ModalProvider>
  </GlobalProvider>
)

export default App
