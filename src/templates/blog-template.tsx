/** @jsx jsx */
import { jsx, Heading, Flex } from 'theme-ui';
import { Fragment } from 'react';
import { graphql } from 'gatsby';
import PostSummary from '../components/Blog/PostSummary';
import { SinglePostProps } from '../types/blog';

interface BlogTemplateProps {
  data: SinglePostProps;
}

const BlogTemplate = ({ data }: BlogTemplateProps) => {
  const { post } = data.wpgraphql;
  const {
    slug,
    title,
    date,
    author,
    categories,
    featuredImage,
    excerpt,
    content,
    tags,
  } = post;
  return (
    <Fragment>
      <PostSummary
        post={{ slug, title, date, author, categories, featuredImage }}
      />
      <div>
        <Heading dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Fragment>
  );
};

export default BlogTemplate;

export const singlePostQuery = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        slug
        title(format: RENDERED)
        date
        author {
          node {
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
        excerpt(format: RENDERED)
        content(format: RENDERED)
        tags {
          nodes {
            slug
            name
          }
        }
      }
    }
  }
`;
