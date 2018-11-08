import React from 'react';
import { styled } from 'linaria/react';

import { Spacer } from './common';
import MouseMove from '../Hero/MouseMove';
import { gradient } from '../Hero/common';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5.5rem 0;

  color: #fff;
  font-size: 2rem;

  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  height: 18rem;
  width: 100%;

  @media (min-width: 768px) {
    height: auto;
    width: 45vw;
    font-size: calc(40vw / 9);
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: rotate(180deg);
  z-index: 1;

  @media (max-width: 768px) {
    left: 1rem;
    top: 1rem;
    right: 1rem;
  }
`;

const SideContent = styled.div`
  z-index: 2;
  transform: rotateX(-8deg) rotateY(0deg) translateZ(2.5rem);
  transform-origin: 50% 50% 0px;
`;

const Title = styled.h1`
  font-size: 1em;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1.06em;
  letter-spacing: 0.155em;
`;

const Subtitle = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.333em;
  line-height: 2.5em;
  letter-spacing: 0.044em;
`;

const contentTransform = ({ x, y }) => {
  const rotateX = (-1 * y - 0.5) * 8;
  const rotateY = (x - 0.5) * 8;
  return {
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(2.5rem)`,
  };
};

const FixedBackground = () => (
  <Wrapper>
    <Background className={gradient} />
    <MouseMove>
      {vec => (
        <SideContent style={contentTransform(vec)}>
          <Title>
            Component
            <br />
            Did
            <br />
            Smoosh
          </Title>
          <Spacer />
          <Subtitle>What have they done now</Subtitle>
        </SideContent>
      )}
    </MouseMove>
  </Wrapper>
);

export default FixedBackground;
