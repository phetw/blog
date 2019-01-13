import styled from 'styled-components'

const BlogTitle = styled.h1`
  margin: 1rem 0;
  font-size: 1.5rem;
  color: ${props =>
    props.theme.main === 'light' ? 'hsla(0,0%,0%,0.875)' : '#c3c3c3'};
`

export default BlogTitle
