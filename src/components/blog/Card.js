import styled from 'styled-components'
import theme from '../../utils/color'

const BlogCard = styled.article`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 1.35rem;
  border-radius: 4px;
  width: 100%;
  max-width: 550px;
  padding-top: 2.15rem;
  padding-left: 2.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.25rem;
  background-color: ${props => theme(props.theme.main).cardBg};
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
  transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 450ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 30px rgba(25, 17, 34, 0.1);
  }
`
export default BlogCard
