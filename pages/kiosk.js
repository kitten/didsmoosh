import React, { Component } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

import HeroBackground from '../components/HeroBackground'
import GlitchBackground from '../components/GlitchBackground'
import Card from '../components/Hero/Card'

const Tagline = styled.h3`
  text-align: center;
  font-weight: 600;
  letter-spacing: ${rem(7)};
  font-size: ${rem(42)};
  margin: ${rem(30)} 0;
  color: rgba(255, 255, 255, 0.88);
`

const Zoom = styled.div`
  position: relative;
  transform-origin: 50% 50%;
  transform: scale(1.2);
`

const rhythmx = 5000
const rhythmy = 5800

class Hero extends Component {
  state = { x: 0.5, y: 0.5 }

  step = () => {
    this.timeout = setTimeout(() => {
      requestAnimationFrame(() => {
        const now = new Date().valueOf()
        const delta = now - this.base

        const x = Math.sin(2 * Math.PI * (delta % rhythmx) / rhythmx) * 0.8
        const y = Math.cos(2 * Math.PI * (delta % rhythmy) / rhythmy) * 0.8

        if (this.mounted) {
          this.setState({ x, y }, this.step)
        }
      })
    }, 1000 / 60)
  }

  renderBackground = () => <GlitchBackground />

  componentDidMount() {
    this.base = new Date().valueOf()
    this.mounted = true
    this.step()
  }

  componentWillUnmount() {
    this.mounted = false
    clearTimeout(this.timeout)
  }

  render() {
    const { x, y } = this.state

    return (
      <HeroBackground fullscreen innerRef={this.onRef} renderBackground={this.renderBackground}>
        <Zoom>
          <Tagline>
            smoosh.fun/donate
          </Tagline>
          <Card x={x} y={y} />
        </Zoom>
      </HeroBackground>
    )
  }
}

export default Hero
