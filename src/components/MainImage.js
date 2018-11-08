import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const MainImage = () => (
  <StaticQuery
    query={graphql`
      query {
        mainImage: file(relativePath: { eq: "april-2018/001.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 616) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.mainImage.childImageSharp.fluid} />}
  />
);

export default MainImage;
