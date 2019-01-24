import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Navbar from './Navbar'
import ThemeToggler from './ThemeToggler'

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

export default class Layout extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        main: 'light',
      },
    }
  }

  componentDidMount() {
    this.setDefaultTheme()
    this.setThemeToLocalStorage()
  }

  setDefaultTheme = () => {
    if (
      window &&
      localStorage.getItem('theme') !== null &&
      localStorage.getItem('theme') !== this.state.theme.main
    ) {
      this.setState(
        {
          theme: {
            main: localStorage.getItem('theme'),
          },
        },
        () => {
          this.setThemeToLocalStorage()
        }
      )
    }
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
        this.setThemeToLocalStorage()
      }
    )
  }

  setThemeToLocalStorage = () => {
    localStorage.setItem('theme', this.state.theme.main)
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <LayoutWrapper>
          <ThemeToggler
            theme={this.state.theme.main}
            onClick={this.toggleTheme}
          />
          <Navbar />
          {this.props.children}
        </LayoutWrapper>
      </ThemeProvider>
    )
  }
}
