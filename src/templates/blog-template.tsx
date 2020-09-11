/** @jsx jsx */
import { jsx, Heading, Box } from 'theme-ui';
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
      <div
        sx={{
          backgroundColor: 'ghostWhite',
          paddingTop: '2rem',
          paddingBottom: '7rem',
        }}
      >
        <Box sx={{ variant: 'styles.innerContainer' }}>
          <PostSummary
            post={{ slug: '', title, date, author, categories, featuredImage }}
          />
        </Box>
      </div>
      <Box
        sx={{
          variant: 'styles.innerContainer',
        }}
      >
        <div
          sx={{
            border: '1px solid lavender',
            backgroundColor: 'white',
            padding: '5rem',
            borderRadius: '10px',
            marginTop: '-5rem',
          }}
        >
          <Heading dangerouslySetInnerHTML={{ __html: excerpt }} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Box>
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
