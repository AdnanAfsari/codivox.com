import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, PageProps } from 'gatsby';

type IndexPageProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const IndexPage: React.FC<PageProps<IndexPageProps>> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hello {data.site.siteMetadata.title}!</h1>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
