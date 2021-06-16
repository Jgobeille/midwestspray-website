const path = require('path');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const turnBlogPostsIntoPages = async ({ graphql, actions }) => {
  // 1. Get a template for this page
  const blogPostTemplate = path.resolve('./src/templates/BlogPost.js');
  // 2. Query all pizzas
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.posts.nodes.forEach((post) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `dougs-blog/${post.slug.current}`,
      component: blogPostTemplate,
      context: {
        slug: post.slug.current,
      },
    });
  });
};

const createPages = async (params) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  // create pages dynamically
  await Promise.all([turnBlogPostsIntoPages(params)]);
};

module.exports = {
  createPages,
};
