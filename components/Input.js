import styled from 'styled-components'
import { rem } from 'polished'

const Wrapper = styled.label`
  position: relative;
  display: block;
  width: 100%;

  box-shadow:
    rgba(50, 50, 93, 0.14902) 0 ${rem(1)} ${rem(3)},
    rgba(0, 0, 0, 0.0196078) 0 ${rem(1)} 0;

  margin: ${rem(10)} 0 ${rem(20)} 0;
  padding: ${rem(12)} ${rem(16)};
  border-radius: ${rem(4)};
  background: #fff;
  border: 1px solid #d1d3d4;

  color: rgb(65, 65, 70);
  font-size: ${rem(14)};
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
  font-size: ${rem(18)};

  padding-top: ${rem(12)};
`

const Input = ({ label, ...rest }) => (
  <Wrapper>
    {label}
    <Val {...rest} />
  </Wrapper>
);

export default Input
