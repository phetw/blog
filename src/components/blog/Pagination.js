import styled from 'styled-components'
import theme from '../../utils/color'

const PaginationContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 1rem 0;

  a {
    text-decoration: none;
    color: ${props => `${theme(props.theme.main).menu}80`};
  }
`

export default PaginationContainer
