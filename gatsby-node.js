/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/contact/)) {
    page.context.layout = 'contact';
    createPage(page);
  }
  if (page.path.match(/design/)) {
    page.context.layout = 'design';
    createPage(page);
  }
  if (page.path.match(/appdevelopment/)) {
    page.context.layout = 'appdevelopment';
    createPage(page);
  }
  if (page.path.match(/webdevelopment/)) {
    page.context.layout = 'webdevelopment';
    createPage(page);
  }
};

const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Will create pages for WordPress posts (route : /blog/{slug})
  const res = await graphql(`
    query {
      wpgraphql {
        posts {
          nodes {
            id
            slug
          }
        }
      }
    }
  `);

  if (res.errors) {
    console.error(res.errors);
  }

  const { wpgraphql } = res.data;
  const blogTemplate = path.resolve('./src/templates/blog-template.tsx');
  wpgraphql.posts.nodes.forEach(({ id, slug }) => {
    createPage({
      path: `/blog/${slug}/`,
      component: slash(blogTemplate),
      context: { id },
    });
  });
};
