import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

export const query = graphql`
    query GetCocktailImage {
        file(name: {eq: "cocktail"}) {
            childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
        }
    }
`;

const About: React.FC<{ data: any }> = function About({ data }) {
  return (
    <Layout
      title='About this site'
      description='More description about this site'
    >
      <h1>About page</h1>

      <GatsbyImage alt={'diferent cocktail'} image={getImage(data.file)} />
      <Link to={'/'}>Back to home</Link>
    </Layout>
  );
};

export default About;