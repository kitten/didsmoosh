import styled from 'styled-components'
import { rem } from 'polished'

import ButtonBackground from './button-background'

const Wrapper = styled.a`
  cursor: pointer;
  position: relative;
  width: ${rem(240)};
  height: ${rem(67)};
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${rem(50)} 0 ${rem(60)} 0;
  transition: transform .1s ease-in-out;
  user-select: none;

  &:hover {
    transform: scale(1.08) rotate(-3deg);
  }

  &:active {
    transform: scale(1.04) rotate(-2.7deg);
  }
`

const Text = styled.span`
  display: block;
  font-size: ${rem(28)};
  font-weight: 600;
  color: #fff;
  z-index: 2;
`

const Background = styled(ButtonBackground).attrs({
  width: '100%',
  height: '100%',
  preserveAspectRatio: 'none'
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  z-index: 1;
`

const Button = ({ children }) => (
  <Wrapper>
    <Background />
    <Text>{children}</Text>
  </Wrapper>
)

export default Button
