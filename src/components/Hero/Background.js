import React from 'react';
import { styled } from 'linaria/react';
import { rem } from 'polished';

import { gradient } from './common';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 ${rem(-4)} ${rem(24)} rgba(166, 1, 253, 0.2);
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const HeroBackground = ({ children }) => (
  <Wrapper>
    <Background className={gradient} />
    {children}
  </Wrapper>
);

export default HeroBackground;
