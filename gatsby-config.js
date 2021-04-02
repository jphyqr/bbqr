require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
      resolve: "gatsby-source-firestore",
      options: {
        credential: {
          type: "service_account",
          project_id: "bbqr-6984c",
          private_key_id: "73dcbb76fc9c40c9a294e4e47624792d84bbc47f",
          private_key: process.env.firebaseKey,
          client_email:
            "firebase-adminsdk-fhnco@bbqr-6984c.iam.gserviceaccount.com",
          client_id: "111469830084531883448",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url:
            "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fhnco%40bbqr-6984c.iam.gserviceaccount.com",
        },
        types: [
          {
            type: "Book",
            collection: "books",
            map: (doc) => ({
              title: doc.title,
              isbn: doc.isbn,
            }),
          },
          {
            type: "Author",
            collection: "authors",
            map: (doc) => ({
              name: doc.name,
              country: doc.country,
              books___NODE: doc.books.map((book) => book.id),
            }),
          },
        ],
      },
    },
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://bbqr.vercel.app",
        sitemap: "https://bbqr.vercel.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gatsby + Node.js (TypeScript) API",
        short_name: "Gatsby + Node.js (TypeScript)",
        start_url: "/",
        icon: "src/images/gatsby-icon.png",
      },
    },
  ],
};
