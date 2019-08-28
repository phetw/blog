import styled from 'styled-components'

import theme from '../../utils/color'

const BlogPublishDate = styled.p`
  opacity: 0.65;
  font-size: 10px;
  color: ${props => theme(props.theme.main).publishDate};
  margin: 0;
  align-self: flex-end;
`

export default BlogPublishDate
