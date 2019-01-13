import styled from 'styled-components'

const ProfileCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 560px;
  border-radius: 4px;
  background-color: ${({ theme }) =>
    theme.main === 'light' ? 'white' : '#424242'};
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
  @media (max-width: 600px) {
    padding: 1.75rem;
  }
  @media (min-width: 601px) {
    padding: 2rem 3.5rem;
  }
`

export default ProfileCard
