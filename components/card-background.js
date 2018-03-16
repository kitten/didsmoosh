import React from 'react'

const CardBackground = props => (
  <svg viewBox="0 0 565 470" {...props}>
    <defs>
      <linearGradient x1="2.463%" y1="2.463%" x2="97.053%" y2="97.053%" id="a">
        <stop stopColor="#A601FD" offset="0%" />
        <stop stopColor="#BA94DE" offset="100%" />
      </linearGradient>
      <radialGradient
        cx="117.548%"
        cy="17.429%"
        fx="117.548%"
        fy="17.429%"
        r="90.434%"
        gradientTransform="matrix(.124 .98883 -.70654 .12803 1.153 -1.01)"
        id="b"
      >
        <stop stopColor="#FEF9D1" offset="0%" />
        <stop stopColor="#FEF9D1" stopOpacity={0} offset="100%" />
      </radialGradient>
      <radialGradient
        cx="-10.204%"
        cy="108.384%"
        fx="-10.204%"
        fy="108.384%"
        r="118.122%"
        gradientTransform="matrix(-.03683 -.99902 .81661 -.04351 -.99 1.03)"
        id="c"
      >
        <stop stopColor="#D51261" offset="0%" />
        <stop stopColor="#FEF9D1" stopOpacity={0} offset="100%" />
      </radialGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#a)" d="M0 0h565v470H0z" />
      <path fill="url(#b)" d="M0 0h565v470H0z" />
      <path fill="url(#c)" d="M0 0h565v470H0z" />
    </g>
  </svg>
)

export default CardBackground
