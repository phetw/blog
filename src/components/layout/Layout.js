import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../utils/color'

import Navbar from './Navbar'
import ThemeToggler from './ThemeToggler'

const LayoutWrapper = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  padding: 3rem 1.25rem;
  will-change: background-color;
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
  state = {
    theme: Theme.DARK,
  }

  componentDidMount() {
    this.setState({ theme: window.__theme })

    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })
    }
  }

  toggleTheme = () => {
    this.setState(
      ({ theme: prevTheme }) => ({
        theme: prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
      }),
      () => {
        window.__setPreferredTheme(this.state.theme)
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
        <>
          <ThemeToggler
            checked={theme === 'light'}
            onClick={() => this.toggleTheme()}
          />
          <LayoutWrapper>
            <Navbar theme={theme} />
            {children}
          </LayoutWrapper>
        </>
      </ThemeProvider>
    )
  }
}
