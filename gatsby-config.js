module.exports = {
  siteMetadata: {
    title: "Severus Snape",
    titleTemplate: "%s · The Real Hero",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
          // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
          // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
          useHydrate: true,
      },
  },
    `gatsby-plugin-react-helmet`,     {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bbqr.vercel.app',
        sitemap: 'https://bbqr.vercel.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatsby + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
};
