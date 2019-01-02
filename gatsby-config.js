module.exports = {
  siteMetadata: {
    title: `Wasuwat Limsuparhat`,
    author: `Wasuwat Limsuparhat`,
    description: `I write blogs to remind and keep track on what I ve learn.`,
    siteUrl: `https://rappad.github.io/blog/`,
  },
  pathPrefix: '/blog',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/img`,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        stripMetadata: true,
      },
    },
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
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 40,
              maxWidth: 800,
              withWebp: true,
              wrapperStyle: 'margin-left:0!important;margin-right:0!important;',
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-js',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        head: true,
        trackingId: 'UA-128174751-2',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify',
  ],
}
