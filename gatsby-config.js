module.exports = {
  siteMetadata: {
    title: 'componentDidSmoosh',
    siteUrl: 'https://smoosh.fun',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'componentDidSmoosh',
        short_name: 'smoosh.fun',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#aa266f',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    'gatsby-plugin-linaria',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
