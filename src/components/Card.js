import React, { memo } from 'react'
import styled from 'styled-components'

const lightShadow = '0 30px 75px 0 rgba(10, 25, 41, 0.2)'
const darkShadow =
  '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)'

const StyledCard = styled.section`
  background-color: ${props =>
    props.theme.main === 'light' ? 'white' : '#424242'};
  box-shadow: ${props => (props.theme === 'dark' ? darkShadow : lightShadow)};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 560px;
  width: 100%;
  @media (max-width: 600px) {
    padding: 1.75rem;
  }
  @media (min-width: 601px) {
    padding: 2rem 3.5rem;
  }
`

const Card = memo(({ children }) => <StyledCard>{children}</StyledCard>)

export default Card
