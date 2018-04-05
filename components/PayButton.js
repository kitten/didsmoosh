import styled from 'styled-components'
import { rem } from 'polished'

const PayButton = styled.button`
  position: relative;
  display: block;
  width: 100%;

  box-shadow:
    rgba(50, 50, 93, 0.14902) 0 ${rem(1)} ${rem(3)},
    rgba(0, 0, 0, 0.0196078) 0 ${rem(1)} 0;

  margin: ${rem(10)} 0 ${rem(20)} 0;
  padding: ${rem(12)} ${rem(16)};
  border-radius: ${rem(4)};
  background: #d34a99;
  border: 1px solid #d1d3d4;
  outline: none;
  appearance: none;

  color: #fff;
  font-size: ${rem(20)};
  letter-spacing: ${rem(3)};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    background: #d43c88;
    transform: translateY(-1px);
    box-shadow:
      0 ${rem(7)} ${rem(14)} rgba(50, 50, 93, .10),
      0 ${rem(3)} ${rem(6)} rgba(0, 0, 0, .08);
  }

  &:disabled {
    opacity: 0.5;
    background: rgb(60, 60, 60);
  }
`

export default PayButton
