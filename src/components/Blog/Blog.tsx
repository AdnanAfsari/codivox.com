/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import Intro from './Intro';
import SearchBar from './SearchBar';
import PostSummary from './PostSummary';
import Hi from '../Main/Hi';
import { BlogPostsProps } from '../../types/blog';

interface BlogProps {
  data: BlogPostsProps;
}

const Blog = ({ data }: BlogProps) => {
  return (
    <div>
      <Intro />
      <Box
        sx={{
          m: '0 auto',
          maxWidth: 1110,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Flex>
          <div sx={{ flex: 1 }}>
            <SearchBar />
          </div>
          <div sx={{ flex: 2, marginLeft: '3rem' }}>
            {data.wpgraphql.posts.nodes.map((post) => (
              <div
                sx={{
                  mb: '3rem',
                  p: '3rem',
                  border: (theme) => `1px solid ${theme.colors.gray[3]}`,
                  borderRadius: '10px',
                }}
              >
                <PostSummary post={post} />
              </div>
            ))}
          </div>
        </Flex>
        <div
          sx={{
            mb: 46,
          }}
        >
          <Hi />
        </div>
      </Box>
    </div>
  );
};

export default Blog;
