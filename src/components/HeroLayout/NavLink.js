import React from 'react';
import { css } from 'linaria';
import { Link } from 'gatsby';

const link = css`
  position: relative;
  cursor: pointer;
  color: rgb(170, 38, 111);
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #690c9a;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;

    transition: opacity 0.3s;
    opacity: 0;

    writing-mode: inherit;
    font-size: 2em;
    font-weight: 600;
    line-height: 0.8em;
    vertical-align: text-bottom;
    color: inherit;
    content: '_';
  }

  &.active {
    color: rgb(14, 30, 37);

    &:before {
      opacity: 1;
    }
  }
`;

const NavLink = ({ to, children }) => (
  <Link className={link} activeClassName="active" to={to}>
    {children}
  </Link>
);

export default NavLink;
