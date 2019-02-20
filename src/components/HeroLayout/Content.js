import React from 'react';
import { styled } from 'linaria/react';

import { Spacer } from './common';

const Wrapper = styled.div`
  flex-grow: 1;
  padding: 3rem 3rem 0 3rem;
  background: #fff;

  @media (max-width: 768px) {
    border-bottom: 1px solid #e0d6eb;
    padding: 1rem 1rem 0 1rem;
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
      08 March
      <br />
      Ticketmaster, London
    </Info>
    <Spacer />
    <Description>
      After a sold-out show in Berlin, <b>SMOOSH</b> is back at Ticketmaster in
      London with our next iteration of a JavaScript comedy night, bringing some
      of the greatest experts of developer humour on stage to make you laugh and
      cry.
    </Description>
    <Description>
      It's a meetup. It's a standup. It's a musical. It's a play. You can even
      get on stage and battle in an epic game of BattleDecks.
    </Description>
  </Wrapper>
);

export default Content;
