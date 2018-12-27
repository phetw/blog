import React from 'react'
import PropTypes from 'prop-types'

const ShareToSocial = ({ title = '', path, siteUrl }) => (
  <section
    style={{
      float: 'right',
      marginBottom: '2rem',
    }}
  >
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
  </section>
)

ShareToSocial.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
}

export default ShareToSocial
