import React from 'react'

const ButtonBackground = props => (
  <svg viewBox="0 0 220 57" {...props}>
    <defs>
      <linearGradient x1="2.463%" y1="2.463%" x2="97.053%" y2="97.053%" id="a">
        <stop stopColor="#A601FD" offset="0%" />
        <stop stopColor="#BA94DE" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M13.817 0H218a2 2 0 0 1 2 2v49.13L205.42 57H2a2 2 0 0 1-2-2V7.05L13.817 0z"
      fill="url(#a)"
      fillRule="evenodd"
    />
  </svg>
)

export default ButtonBackground
