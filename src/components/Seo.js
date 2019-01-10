import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import favicon from '../../static/favicon.png'

const SEO = memo(({ subTitle = '', description = '' }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { title, author },
      },
      allImageSharp,
    }) => {
      const img = allImageSharp.edges[0].node.resize.src
      return (
        <Helmet
          htmlAttributes={{ lang: 'th' }}
          title={`${title} ${subTitle ? ` - ${subTitle}` : ''}`}
          meta={[
            { name: 'author', content: author },
            {
              name: 'description',
              content: description,
            },
            { name: 'og:title', content: `${title} - ${subTitle}` },
            {
              name: 'og:description',
              content: description,
            },
            {
              name: 'og:image',
              content: img,
            },
            {
              name: 'twitter:title',
              content: `${title} - ${subTitle}`,
            },
            {
              name: 'twitter:description',
              content: description,
            },
            {
              name: 'twitter:image',
              content: img,
            },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        />
      )
    }}
  />
))

SEO.propTypes = {
  subTitle: PropTypes.string,
}

export default SEO

const query = graphql`
  query SeoQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allImageSharp(filter: { resize: { originalName: { eq: "me.jpg" } } }) {
      edges {
        node {
          id
          resize(quality: 40, width: 600, height: 315, toFormat: JPG) {
            src
          }
        }
      }
    }
  }
`
