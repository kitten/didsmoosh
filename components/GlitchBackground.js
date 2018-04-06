import React, { PureComponent } from 'react'
import styled from 'styled-components'
import domToImage from 'dom-to-image'

import BackgroundGradients from './background-gradients'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
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

const Canvas = styled.canvas.attrs({
  width: '100%',
  height: '100%'
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`

class GlitchBackground extends PureComponent {
  makeImage = dataUrl => new Promise(resolve => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.src = dataUrl
  })

  drawImage = image => {
    const ctx = this.canvasRef.getContext('2d')
    const { width, height } = this.canvasRef
    ctx.drawImage(image, 0, 0, width, height)
  }

  triggerGlitch = (i = 0, offset = 0, step = 1) => {
    setTimeout(() => {
      requestAnimationFrame(() => {
        if (i >= 8 || (i >= 4 && Math.random() > 0.9)) {
          this.drawImage(this.baseImage)
          return
        }

        const glitchImage = this.glitchImages[i % this.glitchImages.length]
        this.drawImage(glitchImage)
        this.triggerGlitch(i + 1, offset, step)
      })
    }, 80)
  }

  seedGlitches = async () => {
    const glitch = require('./glitch-canvas-browser.es6.js').default;

    this.glitchImages = await Promise.all(
      Array.from({ length: 40 })
      .map(() => {
        return glitch({
          seed: Math.random() * 50,
          quality: 95,
          amount: Math.floor(Math.random() * 5 + 3),
          iterations: 5
        })
          .fromImage(this.baseImage)
          .toDataURL()
          .then(data => this.makeImage(data))
      })
    )
  }

  init = async () => {
    const data = await domToImage.toJpeg(this.bgRef, { quality: 0.95 })
    const image = this.baseImage = await this.makeImage(data)
    await this.seedGlitches()
    this.drawImage(image)
    setInterval(() => {
      const offset = Math.floor(Math.random() * 20)
      const step = Math.floor(Math.random() * 10)
      this.triggerGlitch(0, offset, step)
    }, 10000)
  }

  onCanvasRef = ref => {
    if (ref) {
      const { width, height } = ref.getBoundingClientRect()
      ref.width = width
      ref.height = height
      this.canvasRef = ref
      if (this.bgRef) this.init()
    }
  }

  onBackgroundRef = ref => {
    if (ref) {
      this.bgRef = ref
      if (this.canvasRef) this.init()
    }
  }

  render() {
    return (
      <Wrapper innerRef={this.onBackgroundRef}>
        <Background />
        <Canvas innerRef={this.onCanvasRef} />
      </Wrapper>
    )
  }
}

export default GlitchBackground
