import styled from 'styled-components'

const BlogPublishDate = styled.p`
  font-size: 12px;
  color: ${({ theme }) => (theme.main === 'light' ? '#c3c3c3' : '#797979')};
  margin: 0;
  align-self: flex-end;
`

export default BlogPublishDate
