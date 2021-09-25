import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SeoComponent from '../components/SeoComponent';

const IndexPage: React.FC = function IndexPage() {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta =  data?.site?.siteMetadata ?? {};

  return (
    <>
      <SeoComponent/>
      <header>
        <Link to="/">{meta?.title}</Link>
      </header>
      <main>
      <h1>Hello World!</h1>
      <Link to="/about">About this site</Link>
    </main>
    </>

  )
}

export default  IndexPage;