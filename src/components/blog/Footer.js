import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../utils/color'

const ShareToSocialWrapper = styled.section`
  float: right;
  a {
    font-weight: bold;
    text-decoration: none;
    color: ${props => theme(props.theme.main).menu};
  }
`

const ShareToSocial = memo(({ title = '', path, siteUrl }) => (
  <ShareToSocialWrapper>
    Share to :{' '}
    <a
      href={`https://facebook.com/sharer.php?u=${siteUrl}${path}`}
      rel="noopener noreferrer"
      target="_blank"
      title="Share on Facebook"
    >
      Facebook
    </a>{' '}
    |{' '}
    <a
      href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Frappad.github.io%2Fblog%2F&text=${title}`}
      rel="noopener noreferrer"
      target="_blank"
      title="Share on Facebook"
    >
      Twitter
    </a>
  </ShareToSocialWrapper>
))

ShareToSocial.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
}

export default ShareToSocial
