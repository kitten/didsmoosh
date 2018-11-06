import React from 'react';
import { styled } from 'linaria/react';

import NavLink from './NavLink';

const Wrapper = styled.nav`
  background: #fff;
  position: relative;

  @media (max-width: 768px) {
    overflow-x: auto;
    width: 100%
    border-bottom: 1px solid #e0d6eb;
  }

  @media (min-width: 769px) {
    writing-mode: vertical-lr;
  }
`;

const List = styled.ul`
  margin: 0;
  list-style: none;
  white-space: nowrap;
  padding: 1.25rem;

  @media (max-width: 768px) {
    padding-right: 1.5rem;
  }
`;

const Item = styled.li`
  display: inline-block;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -0.05rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

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

export const NavContent = () => (
  <List>
    <Item>
      <NavLink to="/">Upcoming</NavLink>
    </Item>
    <Item>
      <NavLink to="/past-events">Past Events</NavLink>
    </Item>
    <Item>
      <NavLink to="/coc">Code of Conduct</NavLink>
    </Item>
  </List>
);

const Nav = () => (
  <Wrapper aria-label="Primary Navigation">
    <NavContent />
  </Wrapper>
);

export default Nav;
