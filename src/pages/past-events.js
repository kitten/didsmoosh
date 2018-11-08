import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { styled } from 'linaria/react';

import { Spacer } from '../components/HeroLayout/common';
import ThinHeader from '../components/ThinHeader';

const Container = styled.div`
  width: 100%;
  background: #fff;
  flex-grow: 1;
`;

const Wrapper = styled.div`
  padding: 1.5rem;
  margin: 0 auto;
  max-width: 70rem;
  min-height: 25rem;
`;

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

    &:nth-child(3) {
      margin-right: 0;
    }
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

const query = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "april-2018/*.jpg" } }
      sort: { fields: [name] }
    ) {
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
  }
`;

const PastEventsPage = () => (
  <ThinHeader>
    <Container>
      <Wrapper>
        <Info>
          06 April 2018
          <br />
          Ticketmaster UK
          <Spacer />
        </Info>
        <ImageGrid>
          <StaticQuery
            query={query}
            render={({ images: { edges } }) =>
              edges.map(({ node }, i) => (
                <ImageCell key={i}>
                  <Img fluid={node.childImageSharp.fluid} />
                </ImageCell>
              ))
            }
          />
        </ImageGrid>
      </Wrapper>
    </Container>
  </ThinHeader>
);

export default PastEventsPage;
