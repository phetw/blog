import React, { memo } from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import theme from '../../utils/color'

import PaginationContainer from '../../components/blog/Pagination'

const PageNumber = styled.li`
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
        <li>
          <Link to={prevPage} rel="prev">
            ←
          </Link>
        </li>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <PageNumber key={`page-${i + 1}`} currentPage={i + 1 === currentPage}>
          <Link to={`/${i === 0 ? '' : i + 1}`}>{i + 1}</Link>
        </PageNumber>
      ))}
      {!isLast && (
        <li>
          <Link to={nextPage} rel="next">
            →
          </Link>
        </li>
      )}
    </PaginationContainer>
  )
})

export default Pagination
