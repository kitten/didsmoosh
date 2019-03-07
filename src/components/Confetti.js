import React, { Component } from 'react';
import { styled } from 'linaria/react';
import Confetti from 'react-confetti';

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
`;

class DisplayConfetti extends Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    this.setState({
      visible: true,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <Container>
        <Confetti
          width={this.state.width}
          height={this.state.height}
          numberOfPieces={200}
          wind={0.01}
          gravity={0.14}
          recycle={false}
          run
        />
      </Container>
    );
  }
}

export default DisplayConfetti;
