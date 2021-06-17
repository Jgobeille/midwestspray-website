const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'Midwest Spray',
    description:
      'Midwest Spray is a paint spray repair company located in Cincinnati, Ohio.',
    author: 'Jamie Gobeille',
    company: 'Midwest Spray',
    siteUrl: 'https://www.midwestspray.com',
    keywords:
      'Paint Sprayers, Warranty service, Generators, Air compressors, Cincinnati, Ohio, Campbell Hausfeld, Graco, Titan, Wagner, ABAC Air Compressors, Belaire Compressors, Eaton Compressors ',
  },
  flags: {
    FUNCTIONS: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Midwest-Spray-Website',
        short_name: 'Midwest-Spray',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#5D9D0E',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `wgpo4u84`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        // Sanity project info (required)
        projectId: `wgpo4u84`,
        dataset: `production`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
