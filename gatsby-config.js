require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `A Cloudy Journey`,
    // Default title of the page
    siteTitleAlt: `A Cloudy Journey`,
    // Can be used for e.g. JSONLD
    siteHeadline: `My Journey Learning the Cloud`,    
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: `MMMM DD, YYYY`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Links`,
            slug: `/links`,
          },
        ],
        externalLinks: [
          {
            name: `AWS Docs`,
            url: `https://docs.aws.amazon.com`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `A Cloudy Journey`,
        short_name: `Chris's Dev Journal`,
        description: `Notes about the cloud`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f4900c`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
