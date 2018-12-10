module.exports = {
  siteMetadata: {
    title: `wasuwat's thoughts`,
    author: `Wasuwat Limsuparhat`,
    description:
      "Wasuwat Limsuparhat's personal blog, learn more about me at https://rappad.github.io/wasuwat-limsuparhat",
    image: '/static/main.jpg',
    siteUrl: 'https://rappad.github.io/blog/',
  },
  pathPrefix: '/blog',
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              withWebp: true,
              wrapperStyle:
                'margin-left:0!important;margin-right:0!important;max-width:600px;',
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-js',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        head: true,
        trackingId: 'UA-128174751-2',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wasuwat's thought`,
        short_name: `W`,
        start_url: '.',
        display: 'standalone',
        background_color: `#fff`,
        theme_color: `#d65947`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        cacheId: `wasuwat-blog`,
      },
    },
  ],
}