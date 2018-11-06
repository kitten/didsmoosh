import React from 'react';
import { styled } from 'linaria/react';

import { gradient } from './Hero/common';
import { NavContent } from './HeroLayout/Nav';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

const Fixed = styled.div`
  width: 100%;
  height: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    z-index: 2;
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    width: 45vw;
    height: 6rem;
  }
`;

const Info = styled.h3`
  font-weight: 800;
  letter-spacing: 0.2rem;
  font-size: 2.1rem;
  line-height: 2.1rem;
  text-transform: uppercase;
  text-align: right;
  padding: 0 2rem;
  color: #fff;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-width: 100%;
  width: 100%;
  z-index: 1;
  background: #fff;

  @media (min-width: 769px) {
    height: 6rem;
    padding-right: 45vw;
    padding-left: 1rem;
  }

  @media (max-width: 768px) {
    overflow-x: auto;
    width: 100%;
  }
`;

const After = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  flex-grow: 1;
  z-index: 3;
  background: white;
`;

const HeroLayout = ({ children }) => (
  <Container>
    <Fixed className={gradient}>
      <Info>Component Did Smoosh</Info>
    </Fixed>
    <NavWrapper>
      <NavContent />
    </NavWrapper>
    <After>{children}</After>
  </Container>
);

export default HeroLayout;
