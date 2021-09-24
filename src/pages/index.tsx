import React from 'react';
import { Link } from 'gatsby';

const IndexPage: React.FC = function IndexPage() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link to="/about">About this site</Link>
    </main>
  )
}

export default  IndexPage;