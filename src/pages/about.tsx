import React from 'react';
import { Link } from 'gatsby';

const About: React.FC = function About() {
  return (
    <main>
      <h1>About page</h1>
      <Link to={'/'}>Back to home</Link>
    </main>
  );
};

export default About;