/** @jsx jsx */
import { jsx, Heading, Flex } from 'theme-ui';
import { Fragment, Component } from 'react';
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

  const { slug, title, date, author, categories, featuredImage } = post;
  return (
    <Fragment>
      <Flex key={slug}>
        <div sx={{ flex: 2 }}>
          <Link
            to={`/blog/${slug}`}
            sx={{ variant: (theme) => theme.buttons.disabled }}
          >
            <div>
              {categories.nodes.map((category) => {
                <Link to={category.slug} key={category.slug}>
                  {category.name}
                </Link>;
              })}
            </div>
            <div>
              <Link to={slug}>
                <Heading>{title}</Heading>
              </Link>
            </div>
            <div>{author.node.name}</div>
            <div>{date}</div>
          </Link>
        </div>
        <div sx={{ flex: 1 }}>
          {renderImage(featuredImage, {
            maxWidth: '100%',
            backgroundColor: '#555',
          })}
        </div>
      </Flex>
    </Fragment>
  );
};

export default PostSummary;
