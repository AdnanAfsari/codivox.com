/** @jsx jsx */
import { jsx, Heading, Flex } from 'theme-ui';
import { Fragment } from 'react';
import { FeaturedImage, Post } from '../../types/blog';
import { Link } from 'gatsby';

interface PostSummaryProps {
  post: Post;
}

const PostSummary = ({ post }: PostSummaryProps) => {
  const renderImage = (image: FeaturedImage, sx = {}) => {
    if (!image) {
      return <div sx={{ ...sx, width: '100%', height: '100%' }}></div>;
    }
    const { altText, sourceUrl } = image.node;
    return <img alt={altText} src={sourceUrl} sx={sx} />;
  };

  const renderAvatar = (url: string) => {
    return (
      <img
        alt=""
        src={url}
        sx={{ borderRadius: '50%', width: '48px', height: '48px' }}
      />
    );
  };

  const { slug, title, date, author, categories, featuredImage } = post;
  return (
    <Fragment>
      <Link
        to={slug}
        sx={{
          variant: slug ? 'buttons.a' : 'buttons.a.disabled',
        }}
      >
        <Flex key={slug}>
          <div sx={{ flex: 2 }}>
            <div>
              {categories.nodes.map((category) => (
                <Link
                  to={category.slug}
                  key={category.slug}
                  sx={{ textDecoration: 'none', color: 'mainDark' }}
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div>
              <Heading>{title}</Heading>
            </div>
            <Flex>
              {renderAvatar(author.node.avatar.url)}
              <span sx={{ m: '20px' }}>
                {author.node.name} - {date}
              </span>
            </Flex>
          </div>
          <div sx={{ flex: 1 }}>
            {renderImage(featuredImage, {
              maxWidth: '100%',
              backgroundColor: '#555',
            })}
          </div>
        </Flex>
      </Link>
    </Fragment>
  );
};

export default PostSummary;
