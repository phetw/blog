import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Navbar from './Navbar'

const LayoutWrapper = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  padding: 1.25rem 1.25rem 3rem;
  background-color: ${({ theme }) =>
    theme.main === 'light' ? '#f4f6fa' : '#666'};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ThemeToggler = styled.span`
  cursor: pointer;
`

export default class Layout extends PureComponent {
  state = {
    theme: {
      main: 'light',
    },
  }

  componentDidMount() {
    this.setDefaultTheme()
  }

  setDefaultTheme = () => {
    this.setState(
      {
        theme: {
          main: localStorage.getItem('theme'),
        },
      },
      () => {
        this.setTheme(this.state.theme.main)
      }
    )
  }

  setTheme = theme => {
    localStorage.setItem('theme', theme)
  }

  toggleTheme = () => {
    this.setState(
      ({ theme: prevTheme }) => ({
        theme:
          prevTheme.main === 'light'
            ? {
                main: 'dark',
              }
            : {
                main: 'light',
              },
      }),
      () => {
        this.setTheme(this.state.theme.main)
      }
    )
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <LayoutWrapper>
          <ThemeToggler role="emoji" onClick={this.toggleTheme}>
            {this.state.theme.main === 'light' ? '☀️' : '🌙'}
          </ThemeToggler>
          <Navbar />
          {this.props.children}
        </LayoutWrapper>
      </ThemeProvider>
    )
  }
}
