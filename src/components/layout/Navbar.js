import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
`

const NavbarItem = styled(Link)`
  margin: 0 1rem;
`

const LinkActiveStyle = {
  borderBottom: '2px solid #d65947',
}

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarItem to="/" role="link" activeStyle={LinkActiveStyle}>
        Blogs
      </NavbarItem>
      <NavbarItem to="/about" role="link" activeStyle={LinkActiveStyle}>
        About
      </NavbarItem>
    </NavbarWrapper>
  )
}
