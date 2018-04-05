import styled, { css } from 'styled-components'
import { rem } from 'polished'

import BackgroundGradients from './background-gradients'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0 ${rem(-4)} ${rem(24)} rgba(166, 1, 253, 0.2);

  ${p => p.fullscreen && css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  `}
`

const Background = styled(BackgroundGradients).attrs({
  width: '100%',
  height: '100%',
  preserveAspectRatio: 'none'
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${rem(25)} ${rem(25)} ${rem(85)} ${rem(25)};
  z-index: 2;

  @media screen and (orientation: portrait) {
    padding: ${rem(55)} ${rem(25)} ${rem(115)} ${rem(25)};
  }
`

const HeroBackground = ({ children, innerRef, fullscreen = false }) => (
  <Wrapper innerRef={innerRef} fullscreen={fullscreen}>
    <Background />
    <Content>
      {children}
    </Content>
  </Wrapper>
)

export default HeroBackground
