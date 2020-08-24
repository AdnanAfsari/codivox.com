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
};
