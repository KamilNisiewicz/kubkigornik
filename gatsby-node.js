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

    // cups link
    const cups_links = await graphql(`
      query MyQuery {
        allWordpressWpKategorieKubki {
          edges {
            node {
              slug
              wordpress_id
              title
            }
          }
        }
      }
    `)

    cups_links.data.allWordpressWpKategorieKubki.edges.forEach(({ node }) => {
      createPage({
        path: '/kubki/' + node.slug,
        component: require.resolve(`./src/pages/cups_list.js`),
        context: {
          cat_name: node.title,
          cat_id: node.wordpress_id,
          cat_slug: node.slug
        },
      })
    })

    // glass link
    const glass_links = await graphql(`
      query MyQuery {
        allWordpressWpKategorieSzklo {
          edges {
            node {
              slug
              wordpress_id
              title
            }
          }
        }
      }
    `)

    glass_links.data.allWordpressWpKategorieSzklo.edges.forEach(({ node }) => {
      createPage({
        path: '/szklo/' + node.slug,
        component: require.resolve(`./src/pages/glass_list.js`),
        context: {
          cat_name: node.title,
          cat_id: node.wordpress_id,
          cat_slug: node.slug
        },
      })
    })
}