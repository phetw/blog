import React, { memo } from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'

const LayoutWrapper = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  padding: 1.25rem 1.25rem 3rem;
  background-color: #f4f6fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = memo(({ children }) => (
  <LayoutWrapper>
    <Navbar />
    {children}
  </LayoutWrapper>
))

export default Layout
