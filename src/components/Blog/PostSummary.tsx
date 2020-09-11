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
      return <div sx={sx}></div>;
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
        <div
          sx={{
            display: slug
              ? ['block', 'flex', 'block', 'flex']
              : ['block', 'flex'],
            justifyContent: 'space-between',
          }}
        >
          <div
            sx={{
              order: 0,
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
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
              <Heading sx={{ my: '15px' }}>{title}</Heading>
            </div>
            <Flex>
              {renderAvatar(author.node.avatar.url)}
              <span sx={{ m: '20px' }}>
                {author.node.name} - {date}
              </span>
            </Flex>
          </div>
          <div
            sx={{
              order: 1,
              flex: 1,
              display: 'flex',
            }}
          >
            {renderImage(featuredImage, {
              width: '207px',
              height: '207px',
              backgroundColor: 'ghostWhite',
              borderRadius: '10px',
              mx: 'auto',
            })}
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default PostSummary;
