import React from "react";

const Decoration = props => (
  <svg width={100} height={388} viewBox="0 0 100 388" {...props}>
    <title>Combined Shape</title>
    <defs>
      <linearGradient x1="2.463%" y1="2.463%" x2="94.443%" y2="94.443%" id="a">
        <stop stopColor="#351944" offset="0%" />
        <stop stopColor="#BA94DE" offset="41.93%" />
        <stop stopColor="#BA94DE" stopOpacity={0} offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M209 3v355.809L208.801 400H208a2 2 0 0 1-2-2V49.471L206.177 3H159a2 2 0 0 1-2-2V.371L163.28 0H255a2 2 0 0 1 2 2v.691L250.372 3H209z"
      transform="translate(-157)"
      fill="url(#a)"
      fillRule="evenodd"
    />
  </svg>
);

export default Decoration;

