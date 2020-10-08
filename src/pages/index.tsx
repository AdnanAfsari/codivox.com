import React from 'react';
import { graphql, PageProps } from 'gatsby';
import SEO from '../components/seo';
import Hero from '../components/Main/Hero';
import Services from '../components/Main/Services';
import Process from '../components/Main/Process';
import Tech from '../components/Main/Tech';
import About from '../components/Main/About';
import Hi from '../components/Main/Hi';

type IndexPageProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const IndexPage: React.FC<PageProps<IndexPageProps>> = ({ data }) => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <Hero />
      <Services />
      <Process />
      <Tech />
      <About />
      <Hi />
    </React.Fragment>
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
