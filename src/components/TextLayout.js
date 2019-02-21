import React from 'react';
import { styled } from 'linaria/react';

const Container = styled.div`
  width: 100%;
  background: #fff;
  flex-grow: 1;
`;

const Wrapper = styled.div`
  padding: 0 1.5rem 2.5rem 2.5rem;
  margin: 0 auto;
  max-width: 70rem;
  min-height: 25rem;
  overflow: hidden;

  font-size: 1.75rem;
  line-height: 1.25;
  letter-spacing: 0.055rem;
  font-weight: 600;

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 1.2rem;
  }

  b,
  h4,
  strong {
    font-weight: 800;
    text-transform: uppercase;
  }

  p {
    margin: 2.45rem 0;
  }

  ul {
    list-style: none;

    li {
      margin: 2.45rem 0;

      @media (max-width: 768px) {
        margin: 1.75rem 0;
      }

      p {
        font-size: 0.8em;
        font-weight: 400;
        letter-spacing: 0.08rem;
        margin: 1rem 0 3rem 0;

        @media (max-width: 768px) {
          font-size: 1.2rem;
          letter-spacing: 0.04rem;
        }
      }
    }
  }
`;

const TextLayout = ({ children }) => (
  <Container>
    <Wrapper>{children}</Wrapper>
  </Container>
);

const Heading = styled.h3`
  position: relative;
  margin-left: -0.25rem;
  font-size: 4.75rem;
  line-height: 7.25rem;
  font-weight: 800;
  letter-spacing: 0.7rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: -1.75rem;
    width: 0.3rem;
    height: 25rem;
    background: linear-gradient(#3e194a, #f7f1fc00);
  }

  @media (max-width: 768px) {
    margin-top: 3rem;

    &:before {
      left: -2rem;
      top: -1rem;
      width: 90%;
      height: 0.3rem;
      background: linear-gradient(90deg, #3e194a, #f7f1fc00);
    }
  }

  @media (min-width: 768px) {
    &:first-child {
      padding: 1.5rem 0 0.5rem 0;
    }

    &:not(:first-child) {
      margin-top: 7rem;

      &:before {
        top: 0.5rem;
      }
    }
  }
`;

TextLayout.Heading = Heading;
export default TextLayout;
