/** @jsx jsx */
import { jsx, Heading, Box } from 'theme-ui';
import { Fragment } from 'react';
import { graphql } from 'gatsby';
import PostSummary from '../components/Blog/PostSummary';
import { SinglePostProps } from '../types/blog';
import AuthorInfo from '../components/Blog/AuthorInfo';

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
            titleSize="36px"
          />
        </Box>
      </div>
      <Box
        sx={{
          variant: 'styles.innerContainer',
          marginBottom: '10rem',
        }}
      >
        <div
          sx={{
            border: '1px solid lavender',
            marginTop: '-5rem',
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '10px',
          }}
        >
          <Heading dangerouslySetInnerHTML={{ __html: excerpt }} />
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            sx={{ variant: 'styles.centerFigure' }}
          />
          <div
            sx={{
              borderTop: '1px solid lavender',
              borderBottom: '1px solid lavender',
              marginTop: '3rem',
            }}
          >
            <AuthorInfo author={author} date={date} color="heading" />
          </div>
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
