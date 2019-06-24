module.exports = {
  siteMetadata: {
    title: `Wasuwat Limsuparhat's personal blog`,
    description: `This is Wasuwat's personal blog. He is a frontend web developer and he likes building a blazingly fast and beautiful websites.`,
    author: `Wasuwat Limsuparhat`,
    siteUrl: `https://wasuwat.me`,
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
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 70,
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
              quality: 65,
              maxWidth: 800,
              withWebp: true,
              backgroundColor: 'transparent',
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        head: true,
        trackingId: 'UA-128174751-2',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://wasuwat.me/blog',
        sitemap: 'https://wasuwat.me/blog/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify',
  ],
}
