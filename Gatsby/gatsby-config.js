const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'Midwest Spray',
    description:
      'Midwest Spray is a paint spray repair company located in Cincinnati, Ohio.',
    author: 'Jamie Gobeille',
    company: 'Midwest Spray',
    siteUrl: 'https://midwestspraywebsitemaster.gatsbyjs.io/',
    keywords:
      'Paint Sprayers, Warranty service, Generators, Air compressors, Cincinnati, Ohio, Repair Service, Sprayers, Colerain, Local, Campbell Hausfeld, Graco, Titan, Wagner, ABAC Air Compressors, Belaire Compressors, Eaton Compressors, AR Blue Clean, AR North America, Black & Decker, Briggs and Stratton, Brute, Champion Power Equipment, Cleanforce, Colerman Powermate, Craftsman, DeWalt, Devillbiss, Duracraft, ETQ, Ex-Cell, FAIP, Generac, Homelite, Husky, John Deere, Mi-T-M, Monsoon, Northstar, Power-Cable, Power Boss, Power Stroke, Rigid, Ryobi, Simoniz, Snap-On, Snapper, Stanley, Task force, Task Master, Troy Bilt, Water Blaster, Workforce, Honda, Loncin, Tecumseh, Cat Pump, Giant Pumps, FNA Group, Anovi Reverberi, American Yard Products, Delta, Desa, Eastern Tool, Goss Power, Poulan Pro, Pramac, Reddy, Enerco, Heat Demon, HeatStar, Portable Heaters, Hero Cordless, Knipco, LB White, Master, Mr. Heater, Pinnacle Products, Remington, Schue, Sears Craftsman, Universal, Vanguard, 2x4, Air America, Charge Air Pro, Devair, Emglo, Ingersoll-Rand, MAT Tools, Pro 4000, Pro Air II, Sanborn',
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
        apiVersion: '2021-03-25',
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://midwestspraywebsitemaster.gatsbyjs.io/',
        sitemap: 'https://midwestspraywebsitemaster.gatsbyjs.io/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
