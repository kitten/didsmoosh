import React, { Component } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

import BackgroundGradients from '../background-gradients'
import Card from './Card'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0 ${rem(-4)} ${rem(24)} rgba(166, 1, 253, 0.2);
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

const Tagline = styled.h3`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: ${rem(7)};
  font-size: ${rem(24)};
  margin: ${rem(25)} 0;
  color: rgba(255, 255, 255, 0.88);
`

class Hero extends Component {
  state = { x: 0.5, y: 0.5 }

  onRef = ref => {
    this.wrapperRef = ref
  }

  onMouseMove = ({ clientX, clientY }) => {
    if (this.wrapperRef === undefined && !this.disableMouse) return

    const maxHeight = this.wrapperRef.getBoundingClientRect().height
    const maxWidth = window.innerWidth

    const x = Math.min(clientX, maxWidth) / maxWidth
    const y = Math.min(clientY, maxHeight) / maxHeight
    this.setState({ x, y })
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove, { passive: true })
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove)
  }

  render() {
    const { x, y } = this.state

    return (
      <Wrapper innerRef={this.onRef}>
        <Background />
        <Content>
          <Tagline>
            No one should see this
          </Tagline>
          <Card x={x} y={y} />
        </Content>
      </Wrapper>
    )
  }
}

export default Hero
