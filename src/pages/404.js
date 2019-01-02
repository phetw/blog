import React, { memo } from 'react'
import styled from 'styled-components'

const NotFoundWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const NotFoundSection = styled.section`
  max-width: 400px;
  align-self: center;
`

const NotFoundHead = styled.h1`
  display: inline-block;
`

const Separator = styled.span`
  margin: 0 1rem;
`

const NotFoundContent = styled.p`
  display: inline-block;
`

const NotFound = memo(() => (
  <NotFoundWrapper>
    <NotFoundSection>
      <NotFoundHead>404 </NotFoundHead>
      <Separator> | </Separator>
      <NotFoundContent> page not found</NotFoundContent>
    </NotFoundSection>
  </NotFoundWrapper>
))

export default NotFound
