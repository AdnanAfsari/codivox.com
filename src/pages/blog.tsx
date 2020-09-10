import React from 'react';
import { graphql } from 'gatsby';
import BlogMain from '../components/Blog/Blog';
import { BlogPostsProps } from '../types/blog';

interface BlogProps {
  data: BlogPostsProps;
}
const Blog = ({ data }: BlogProps) => {
  return <BlogMain data={data} />;
};

export default Blog;

export const blogPostsQuery = graphql`
  query {
    wpgraphql {
      posts {
        nodes {
          slug
          title(format: RENDERED)
          date
          author {
            node {
              avatar {
                url
              }
              name
            }
          }
          categories {
            nodes {
              slug
              name
            }
          }
          featuredImage {
            node {
              altText
              title
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
