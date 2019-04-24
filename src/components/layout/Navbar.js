import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../../utils/color'

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
`

const NavbarItem = styled(Link)`
  margin: 0 0.35rem;
  padding: 0.3rem 0.75rem;
  border-radius: 0.2rem;
  color: ${props => theme(props.theme.main).menu};
  text-decoration: none;
  &:hover {
    background-color: ${props => theme(props.theme.main).menuBg};
  }
`
const LinkActiveStyle = themeProps => {
  return {
    backgroundColor: theme(themeProps).menuBg,
  }
}

export default function Navbar(props) {
  return (
    <NavbarWrapper>
      <NavbarItem to="/" role="link" activeStyle={LinkActiveStyle(props.theme)}>
        Blogs
      </NavbarItem>
      <NavbarItem
        to="/about"
        role="link"
        partiallyActive={true}
        activeStyle={LinkActiveStyle(props.theme)}
      >
        About
      </NavbarItem>
    </NavbarWrapper>
  )
}
