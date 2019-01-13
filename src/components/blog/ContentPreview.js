import styled from 'styled-components'

const ContentPreview = styled.p`
  font-size: 90%;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => (theme.main === 'light' ? '#616161' : '#c3c3c3')};
`

export default ContentPreview
