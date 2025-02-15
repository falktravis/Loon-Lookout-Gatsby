/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Loon-Lookout-Gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", `gatsby-plugin-sass`, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: './src/images/icon.png',
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-L92EZEEP7Z",
      ],
      pluginConfig: {
        head: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  },]
};