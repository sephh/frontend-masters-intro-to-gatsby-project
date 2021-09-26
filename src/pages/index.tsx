import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import { imageWrapper } from '../styles/index.module.css';

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
          allSanityEpisode(
              sort: { fields: date, order: DESC }
              filter: { youtubeID: { ne: null } }
              limit: 20
          ) {
              nodes {
                  id
                  title
                  guest {
                      name
                  }
                  gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
              }
          }
      }
  `);

  const posts = data.allMdx.nodes;
  const episodes = data.allSanityEpisode.nodes;

  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src={'../images/ivana-la-61jg6zviI7I-unsplash.jpg'}
          alt={'Dogs images with paper hearts'}
          placeholder='blurred'
          width={300}
          height={300}
        />
      </div>
      <h1>Hello World!</h1>
      <Link to='/about'>About this site</Link>

      <h2>Check my blog posts</h2>

      {posts.map(post => (<div key={post.id}>
        <Link to={post.slug}>{post.frontmatter.title}</Link> {' '}
        <small>{post.frontmatter.date}</small>
      </div>))}

      <h2>
        Latest episodes of <em>Learn With Jason</em>
      </h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link to={episode.gatsbyPath}>
              {episode.title} (with {episode.guest?.[0]?.name})
            </Link>
          </li>
        ))}
      </ul>
      <a href='https://www.learnwithjason.dev/'>
        Watch all episodes of <em>Learn With Jason</em>
      </a>
    </Layout>
  );
};

export default IndexPage;