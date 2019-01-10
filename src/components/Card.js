import React, { memo } from 'react'
import styled from 'styled-components'

const StyledCard = styled.section`
  background-color: ${({ theme }) =>
    theme.main === 'light' ? 'white' : '#424242'};
  box-shadow: '0 30px 75px 0 rgba(10, 25, 41, 0.2)';
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
