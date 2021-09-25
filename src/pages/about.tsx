import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const About: React.FC = function About() {
  return (
    <Layout
        title="About this site"
        description="More description about this site"
      >
        <h1>About page</h1>
        <Link to={'/'}>Back to home</Link>
    </Layout>
  );
};

export default About;