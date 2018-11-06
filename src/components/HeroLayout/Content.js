import React from 'react';
import { styled } from 'linaria/react';

import { Spacer } from './common';

const Wrapper = styled.div`
  flex-grow: 1;
  padding: 3rem;
  background: #fff;

  @media (max-width: 768px) {
    border-bottom: 1px solid #e0d6eb;
    padding: 1rem;
  }
`;

const Info = styled.h3`
  font-weight: 600;
  letter-spacing: 0.1rem;
  line-height: 3.9rem;
  font-size: 3.75rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 1.25;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.08rem;
  margin: 2.7rem 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 0.04rem;
  }
`;

const Content = () => (
  <Wrapper>
    <Info>
      30 November
      <br />
      React Day Berlin
    </Info>
    <Spacer />
    <Description>
      <b>componentDidSmoosh</b> is a comedy night for JavaScript nerds. We bring
      together Europe’s greatest experts of developer humour on stage to make
      you laugh and cry. This is not a party you’ll want to miss.
    </Description>
  </Wrapper>
);

export default Content;
