module.exports = {
  siteMetadata: {
    title: 'Matt Lai',
    author: 'Matt Lai',
    description: 'UX Design',
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-BHZHN0WQ9F', // Google Analytics / GA
        ],
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },

        pluginConfig: {
          head: false,

          respectDNT: true,

          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
  ],
}
