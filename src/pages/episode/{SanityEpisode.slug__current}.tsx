import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';

export const query = graphql`
    query SanityEpisode($id: String!){
        sanityEpisode(id: {eq: $id}){
            id
            title
            description
            youtubeID
            date(fromNow: true)
            image{
                asset{
                    gatsbyImageData(placeholder: DOMINANT_COLOR)
                }
            }
            slug{
                current
            }
        }
    }
`;

export default function SanityEpisode({ data }) {
  const episode = data.sanityEpisode;
  return (
    <Layout title={episode.title} description={episode.description}>
      <GatsbyImage alt={episode.title} image={episode.image.asset.gatsbyImageData} />
      <h1>{episode.title}</h1>
      <p>(posted {episode.date}) - {episode.description}</p>
      <ul>
        <li>
          <a href={`https://www.learnwithjason.dev/${episode.slug.current}`}>
            full episode and details
          </a>
        </li>
        <li>
          <a href={`https://youtu.be/${episode.youtubeID}`}>watch on YouTube</a>
        </li>
      </ul>
    </Layout>
  );
}