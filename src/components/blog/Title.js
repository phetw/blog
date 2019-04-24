import styled from 'styled-components'
import theme from '../../utils/color'

const BlogTitle = styled.h1`
  margin-top: 1rem;
  margin-bottom: 0.65rem;
  font-size: 1.5rem;
  color: ${props => theme(props.theme.main).cardTitle};
  a {
    text-decoration: none;
    color: ${props => theme(props.theme.main).cardTitle};
  }
`

export default BlogTitle
