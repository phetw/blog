import React, { useState, useEffect, memo } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../utils/color'

import Navbar from './Navbar'
import ThemeToggler from './ThemeToggler'

const LayoutWrapper = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  padding: 1.25rem 1.25rem 3rem;
  background-color: ${props => theme(props.theme.main).bodyBg};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = memo(({ children }) => {
  const DARK = {
    main: 'dark',
  }
  const LIGHT = {
    main: 'light',
  }
  const [theme, setTheme] = useState(DARK)

  useEffect(() => {
    getThemeFromLocalStorage()
  }, [])

  const getThemeFromLocalStorage = () => {
    if (window && localStorage.getItem('theme')) {
      setTheme({
        main: localStorage.getItem('theme'),
      })
    } else {
      setThemeToLocalStorage(theme.main)
    }
  }

  const setThemeToLocalStorage = theme => {
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    setTheme(theme.main === LIGHT.main ? DARK : LIGHT)
    setThemeToLocalStorage(theme.main === LIGHT.main ? DARK.main : LIGHT.main)
  }

  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <ThemeToggler theme={theme.main} onClick={() => toggleTheme()} />
        <Navbar theme={theme.main} />
        {children}
      </LayoutWrapper>
    </ThemeProvider>
  )
})

export default Layout
