import styled from 'styled-components'
import { rem } from 'polished'

const Wrapper = styled.label`
  position: relative;
  display: block;
  width: 100%;

  box-shadow:
    rgba(50, 50, 93, 0.14902) 0 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0 1px 0;

  margin: 10px 0 20px 0;
  padding: 12px 16px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #d1d3d4;

  color: rgb(65, 65, 70);
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
`

const Val = styled.input`
  display: block;
  width: 100%;

  padding: 0;
  margin: 0;
  background: none;
  border: none;
  appearance: none;
  outline: none;
  color: #0e1e25;
  font-size: 14px;

  padding-top: 12px;
`

const Input = ({ label, ...rest }) => (
  <Wrapper>
    {label}
    <Val {...rest} />
  </Wrapper>
);

export default Input
