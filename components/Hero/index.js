import React, { Component } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

import HeroBackground from '../HeroBackground'
import Card from './Card'

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
    const { tagline } = this.props
    const { x, y } = this.state

    return (
      <HeroBackground innerRef={this.onRef}>
        <Tagline>
          {tagline || 'No one should see this'}
        </Tagline>
        <Card x={x} y={y} />
      </HeroBackground>
    )
  }
}

export default Hero
