import styled from 'styled-components'

const BlogContent = styled.section`
  color: ${props =>
    props.theme.main === 'light' ? 'hsla(0,0%,0%,0.8)' : '#b9b9b9'};
  h1 {
    color: ${props =>
      props.theme.main === 'light' ? 'hsla(0,0%,0%,0.875)' : '#c3c3c3'};
  }
  blockquote {
    p {
      color: ${props =>
        props.theme.main === 'light' ? 'hsla(0,0%,0%,0.59)' : '#888888'};
    }
  }
  p {
    code {
      background: ${props =>
        props.theme.main === 'light' ? '#f5f2f0' : '#c7c7c7'};
    }
  }
`
export default BlogContent
