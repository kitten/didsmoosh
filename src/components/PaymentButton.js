import React from 'react';
import { styled } from 'linaria/react';

import { gradient } from './Hero/common';

const Wrapper = styled.button`
  cursor: pointer;
  position: relative;
  font-size: 0.9rem;
  max-width: 11rem;
  padding: 0.4em;
  background: rgb(170, 38, 111);
  border-radius: 0.1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 3.75rem 0;
  user-select: none;
  box-shadow: 0 0.2rem 0 0 rgba(42, 9, 27, 0.2);
`;

const Text = styled.span`
  display: block;
  font-size: 1.5em;
  font-weight: 600;
  color: #fff;

  &:before,
  &:after {
    display: inline;
    position: relative;
    bottom: 0.1em;
    padding: 0.8em;
    font-size: 0.8em;
    font-weight: 400;
    opacity: 0.3;
    content: '/';
  }
`;

const OneSmooshyBoii = ({ href, children }) => (
  <Wrapper type="submit">
    <Text>{children}</Text>
  </Wrapper>
);

export default OneSmooshyBoii;
