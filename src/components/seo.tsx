import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<any>;
  title: string;
}

const SEO: React.FC<SEOProps> = ({ description, lang, meta, title }) => {
  const { site, ogImageDefault } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        ogImageDefault: file(absolutePath: { regex: "/src/images/meta-img/" }) {
          childImageSharp {
            fixed(height: 627, width: 1200) {
              src
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const ogImage = site.siteMetadata.siteUrl.concat(
    ogImageDefault.childImageSharp.fixed.src,
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title + ' | Codivox'}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: `software development,react,react native,gatsbyjs,graphql,nodejs,serverless,consulting,contracting,software engineering,engineering leadership,product development,software as a service, saas,reactjs,software architecture,consultants,contractors`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  description: '',
  lang: 'en',
  meta: [],
};

export default SEO;
