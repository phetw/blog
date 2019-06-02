import React, { memo } from 'react'
import { Link } from 'gatsby'

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

const PageNumber = styled.li`
  margin: 0 1rem;
  a {
    color: ${props =>
      props.currentPage
        ? theme(props.theme.main).menu
        : `${theme(props.theme.main).menu}80`};
  }
`

const Pagination = memo(props => {
  const { currentPage, numPages } = props

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <PaginationContainer>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ←
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <PageNumber key={`page-${i + 1}`} currentPage={i + 1 === currentPage}>
          <Link to={`/${i === 0 ? '' : i + 1}`}>{i + 1}</Link>
        </PageNumber>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next">
          →
        </Link>
      )}
    </PaginationContainer>
  )
})

export default Pagination
