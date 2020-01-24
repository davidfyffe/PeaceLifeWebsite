module.exports = {
  pathPrefix: "/PeaceLifeWebsite",
  siteMetadata: {
    title: "Peacelife Yoga",
    template_kudos: "Gatsby Starter - Forty V2",
    author: "David Fyffe",
    description: "Shopfront site for PeaceLife Yoga, Belfast, NI."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/SmallLogo_icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
