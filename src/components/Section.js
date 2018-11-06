import React from 'react';
import { styled } from 'linaria/react';

import decoration from '../images/decoration.png';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-repeat: no-repeat;
  background-position: 0% 0%;
  background-image: url(${decoration});
  background-size: 6.25rem 25rem;

  color: #0e1e25;
  min-height: 25rem;
`;

const SectionHeading = styled.h2`
  font-size: 4.75rem;
  font-weight: 800;
  letter-spacing: 0.6875rem;
  text-transform: uppercase;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  margin: 1.875rem 0px;
`;

const Body = styled.p`
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.125rem;
  letter-spacing: 0.055rem;
`;

const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.75rem;
  line-height: 2.125rem;
  letter-spacing: 0.055rem;
`;

const Section = () => (
  <Wrapper>
    <SectionHeading>Program</SectionHeading>
  </Wrapper>
);

export default Section;
