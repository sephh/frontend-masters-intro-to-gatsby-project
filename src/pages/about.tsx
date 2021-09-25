import React from 'react';
import { Link } from 'gatsby';
import SeoComponent from '../components/SeoComponent';

const About: React.FC = function About() {
  return (
    <>
      <SeoComponent
        title="About this site"
        description="More description about this site"
      />
      <main>
        <h1>About page</h1>
        <Link to={'/'}>Back to home</Link>
      </main>
    </>
  );
};

export default About;