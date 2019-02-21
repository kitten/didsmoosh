import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { styled } from 'linaria/react';

import { BlackSpacer } from '../components/HeroLayout/common';

const ImageGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ImageCell = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
  flex-basis: 100%;

  @media (min-width: 400px and max-width: 768px) {
    flex-basis: 50%;
    margin-right: 1.5rem;

    &:nth-child(2) {
      margin-right: 0;
    }
  }

  @media (min-width: 768px) {
    flex-basis: 33.33%;
    margin-right: 1.5rem;
  }
`;

const Info = styled.h3`
  font-weight: 600;
  letter-spacing: 0.1rem;
  line-height: 3.9rem;
  font-size: 3.75rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 1.25;
  }
`;

export const query = graphql`
  fragment PastEventImageFragment on FileConnection {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 340) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

export default ({ title, location, data }) => {
  return (
    <Fragment>
      <Info>
        {title}
        <br />
        {location}
        <BlackSpacer />
      </Info>
      <ImageGrid>
        {data.edges.map(({ node }, i) => (
          <ImageCell key={i}>
            <Img fluid={node.childImageSharp.fluid} />
          </ImageCell>
        ))}
      </ImageGrid>
    </Fragment>
  );
};
