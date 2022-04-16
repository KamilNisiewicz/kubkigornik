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

    const looking_for_count = await graphql(`
      query Cups {
        total: allWordpressWpSzukam {
          totalCount
        }
      }
    `);

    const looking_pages = looking_for_count.data.total.totalCount
    const postsPerPageLooking = 12
    const numPages = Math.ceil(looking_pages / postsPerPageLooking)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/szukam` : `/szukam/${i + 1}`,
        component: require.resolve("./src/pages/looking.js"),
        context: {
          limit: postsPerPageLooking,
          skip: i * postsPerPageLooking,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // cups link
    const cups_category_links = await graphql(`
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

    let cups_in_category = 0;
    cups_category_links.data.allWordpressWpKategorieKubki.edges.forEach(({ node }) => {
      const cup_links = graphql(`
        query CupsLinks {
          cups: allWordpressWpKubki(filter: {acf: {kategoria: {wordpress_id: {eq: ${node.wordpress_id}}}}}) {
            edges {
              node {
                wordpress_id
                slug
              }
            }
          }
        }
      `).then(result => {
        const cat_slug = node.slug
        let cups_in_category = result.data.cups.edges.length
        
        result.data.cups.edges.forEach(({ node }) => {
          createPage({
            path: '/kubki/' + cat_slug + "/" + node.slug,
            component: require.resolve(`./src/pages/cup_elem.js`),
            context: {
              cup_id: node.wordpress_id,
            },
          })
        })

        if(cups_in_category > 12){
          const cups_pages = cups_in_category
          const postsPerPageCups = 12
          const numPages = Math.ceil(cups_pages / postsPerPageCups)
          Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
              path: i === 0 ? `/kubki/`+cat_slug : `/kubki/`+cat_slug+`/${i + 1}`,
              component: require.resolve("./src/pages/cups_list.js"),
              context: {
                limit: postsPerPageCups,
                skip: i * postsPerPageCups,
                numPages,
                currentPage: i + 1,
                cat_name: node.title,
                cat_id: node.wordpress_id,
                cat_slug: node.slug
              },
            })
          })
        }else{
          createPage({
            path: '/kubki/' + node.slug,
            component: require.resolve(`./src/pages/cups_list.js`),
            context: {
              cat_name: node.title,
              cat_id: node.wordpress_id,
              cat_slug: node.slug,
              currentPage: 1,
              numPages: 1
            }
          })
        }
      });
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
      const glasses_links = graphql(`
        query GlassesLinks {
          glasses: allWordpressWpSzklo(filter: {acf: {kategoria_szklo: {wordpress_id: {eq: ${node.wordpress_id}}}}}, sort: {fields: title, order: ASC}) {
            edges {
              node {
                wordpress_id
                slug
              }
            }
          }
        }
      `).then(result => {
        const cat_slug = node.slug
        let glass_in_category = result.data.glasses.edges.length

        result.data.glasses.edges.forEach(({ node }) => {
          createPage({
            path: '/szklo/' + cat_slug + "/" + node.slug,
            component: require.resolve(`./src/pages/glass_elem.js`),
            context: {
              glass_id: node.wordpress_id,
            },
          })
        })

        if(glass_in_category > 12){
          const glass_pages = glass_in_category
          const postsPerPageGlass = 12
          const numPages = Math.ceil(glass_pages / postsPerPageGlass)
          Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
              path: i === 0 ? `/szklo/`+cat_slug : `/szklo/`+cat_slug+`/${i + 1}`,
              component: require.resolve("./src/pages/glass_list.js"),
              context: {
                limit: postsPerPageGlass,
                skip: i * postsPerPageGlass,
                numPages,
                currentPage: i + 1,
                cat_name: node.title,
                cat_id: node.wordpress_id,
                cat_slug: node.slug
              },
            })
          })
        }else{
          createPage({
            path: '/szklo/' + node.slug,
            component: require.resolve(`./src/pages/glass_list.js`),
            context: {
              cat_name: node.title,
              cat_id: node.wordpress_id,
              cat_slug: node.slug,
              currentPage: 1,
              numPages: 1
            },
          })
        }
      });
    })

    createPage({
      path: `/nowosci`,
      component: require.resolve(`./src/pages/newest.js`),
      context: {  },
    })
}