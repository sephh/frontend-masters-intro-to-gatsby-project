import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import {imageWrapper} from '../styles/index.module.css';

const IndexPage: React.FC = function IndexPage() {
  const data = useStaticQuery(graphql`
      query GetBlogPosts {
          allMdx(sort: {order: DESC, fields: frontmatter___date}) {
              nodes {
                  id
                  slug
                  frontmatter {
                      date(fromNow: true)
                      description
                      title
                  }
              }
          }
      }
  `);

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src={'../images/ivana-la-61jg6zviI7I-unsplash.jpg'}
          alt={'Dogs images with paper hearts'}
          placeholder="blurred"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello World!</h1>
      <Link to="/about">About this site</Link>

      <h2>Check my blog posts</h2>

      {posts.map(post => (<div key={post.id}>
        <Link to={post.slug}>{post.frontmatter.title}</Link> {' '}
        <small>{post.frontmatter.date}</small>
      </div>))}
    </Layout>
  )
}

export default  IndexPage;