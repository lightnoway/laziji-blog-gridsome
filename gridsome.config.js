// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://ec2-18-163-84-125.ap-east-1.compute.amazonaws.com:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['blog'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiBlog: [{
      path: "/blog/:id",
      component: './src/templates/Blog.vue'
    }]
  }
}
