import styled from 'styled-components'
import theme from '../../utils/color'

const ContentPreview = styled.p`
  font-size: 90%;
  margin-bottom: 1.75rem;
  color: ${props => theme(props.theme.main).cardContent};
`

export default ContentPreview
