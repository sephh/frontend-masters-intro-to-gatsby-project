import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage: React.FC = function IndexPage() {
  return (
    <Layout>
      <h1>Hello World!</h1>
      <Link to="/about">About this site</Link>
    </Layout>
  )
}

export default  IndexPage;