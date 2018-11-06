import React from 'react';
import { styled } from 'linaria/react';

import FixedBackground from './FixedBackground';
import Nav from './Nav';
import Content from './Content';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  padding: 2.5rem 0;
  margin-left: 45vw;
  margin-top: 0;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

const After = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  flex-grow: 1;
  z-index: 2;
`;

const HeroLayout = ({ children }) => (
  <Container>
    <FixedBackground />
    <Row>
      <Nav />
      <Content />
    </Row>
    <After>{children}</After>
  </Container>
);

export default HeroLayout;
