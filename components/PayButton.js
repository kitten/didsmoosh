import styled from 'styled-components'
import { rem } from 'polished'

const PayButton = styled.button`
  position: relative;
  display: block;
  width: 100%;

  box-shadow:
    rgba(50, 50, 93, 0.14902) 0 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0 1px 0;

  margin: 10px 0 20px 0;
  padding: 12px 16px;
  border-radius: 4px;
  background: #d34a99;
  border: 1px solid #d1d3d4;
  outline: none;
  appearance: none;

  color: #fff;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    background: #d43c88;
    transform: translateY(-1px);
    box-shadow:
      0 7px 14px rgba(50, 50, 93, .10),
      0 3px 6px rgba(0, 0, 0, .08);
  }

  &:disabled {
    opacity: 0.5;
    background: rgb(60, 60, 60);
  }
`

export default PayButton
