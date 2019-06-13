import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../utils/color'

import Navbar from './Navbar'
import ThemeToggler from './ThemeToggler'

const LayoutWrapper = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  padding: 1.25rem 1.25rem 3rem;
  transition: background-color 300ms ease;
  background-color: ${props => theme(props.theme.main).bodyBg};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Theme = {
  DARK: 'dark',
  LIGHT: 'light',
}

export default class Layout extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      theme: localStorage.getItem('theme')
        ? localStorage.getItem('theme')
        : Theme.DARK,
    }
  }

  setThemeToLocalStorage = theme => {
    localStorage.setItem('theme', theme)
  }

  toggleTheme = () => {
    this.setState(
      ({ theme: prevTheme }) => ({
        theme: prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
      }),
      () => {
        this.setThemeToLocalStorage(this.state.theme)
      }
    )
  }

  render() {
    const { theme } = this.state
    const { children } = this.props

    return (
      <ThemeProvider
        theme={{
          main: theme,
        }}
      >
        <LayoutWrapper>
          <ThemeToggler theme={theme} onClick={() => this.toggleTheme()} />
          <Navbar theme={theme} />
          {children}
        </LayoutWrapper>
      </ThemeProvider>
    )
  }
}
