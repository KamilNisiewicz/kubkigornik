/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    createPage({
      path: `/kubki`,
      component: require.resolve(`./src/pages/cups.js`),
      context: {  },
    })

    createPage({
      path: `/szklo`,
      component: require.resolve(`./src/pages/glass.js`),
      context: {  },
    })

    createPage({
      path: `/szukam`,
      component: require.resolve(`./src/pages/looking.js`),
      context: {  },
    })
}