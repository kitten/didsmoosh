import React from 'react';
import { styled } from 'linaria/react';
import { rem } from 'polished';

import Parens from './Parens';
import { gradient } from './common';

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  color: #f6ffff;
  margin: ${rem(25)} ${rem(40)};
  transform-origin: 50% 50%;
  will-change: transform, box-shadow;
`;

const CardBackground = styled.div`
  transform: rotate(180deg);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const CardContent = styled.div`
  position: relative;
  padding: ${rem(20)} ${rem(15)} ${rem(24)} ${rem(32)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
`;

const Title = styled.h1`
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: ${rem(11.25)};
  line-height: ${rem(76)};
  font-size: ${rem(72)};
  margin: 0;
`;

const Spacer = styled.hr`
  width: ${rem(150)};
  height: ${rem(10)};
  border: none;
  background: #f6ffff;
  margin: ${rem(10)} 0;
`;

const Info = styled.h2`
  font-weight: 600;
  letter-spacing: ${rem(4.5)};
  line-height: ${rem(48)};
  font-size: ${rem(48)};
  margin: ${rem(8)} 0;
`;

const Icon = styled(Parens)`
  position: absolute;
  right: ${rem(-30)};
  bottom: ${rem(-20)};
  z-index: 3;
  width: ${rem(66)};
  height: ${rem(99)};
  opacity: 0.876;
`;
const cardTransform = (x, y) =>
  `rotateX(${(-1 * y - 0.5) * 8}deg) rotateY(${(x - 0.5) *
    8}deg) translateZ(${rem(40)})`;

const shadow = (x, y) =>
  `${rem((x - 0.5) * 10)} ${rem(40 - (y - 0.5) * 10)} ${rem(
    85
  )} rgba(0, 0, 0, 0.34)`;

const move = (x, y) =>
  `translateY(${(y - 0.5) * 2}px) translateX(${(x - 0.5) * 2}px)`;

const Card = ({ x = 0.5, y = 0.5 }) => (
  <Wrapper style={{ transform: cardTransform(x, y), boxShadow: shadow(x, y) }}>
    <CardBackground className={gradient} />
    <Icon style={{ transform: move(x, y) }} />
    <CardContent>
      <Title>
        Component
        <br />
        Did
        <br />
        Smoosh
      </Title>
      <Spacer />
      <Info>30 November</Info>
      <Info>
        React Day,
        <br />
        Berlin
      </Info>
    </CardContent>
  </Wrapper>
);

export default Card;
