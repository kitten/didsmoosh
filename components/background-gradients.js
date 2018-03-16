import React from 'react'

const BackgroundGradients = props => (
  <svg viewBox="0 0 1024 700" {...props}>
    <defs>
      <linearGradient x1="2.463%" y1="2.463%" x2="97.053%" y2="97.053%" id="a">
        <stop stopColor="#A601FD" offset="0%" />
        <stop stopColor="#BA94DE" offset="100%" />
      </linearGradient>
      <radialGradient
        cx="113.686%"
        cy="19.835%"
        fx="113.686%"
        fy="19.835%"
        r="144.956%"
        gradientTransform="matrix(.14816 .97623 -.57321 .18616 1.082 -.948)"
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
        r="118.177%"
        gradientTransform="matrix(-.03682 -.99855 .67075 -.05292 -.833 1.04)"
        id="c"
      >
        <stop stopColor="#D51261" offset="0%" />
        <stop stopColor="#FEF9D1" stopOpacity={0} offset="100%" />
      </radialGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="url(#a)"
        d="M0 0h1024v700H0z"
        transform="rotate(180 512 350)"
      />
      <path
        fill="url(#b)"
        d="M0 0h1024v700H0z"
        transform="rotate(180 512 350)"
      />
      <path
        fill="url(#c)"
        d="M0 0h1024v700H0z"
        transform="rotate(180 512 350)"
      />
    </g>
  </svg>
)

export default BackgroundGradients
