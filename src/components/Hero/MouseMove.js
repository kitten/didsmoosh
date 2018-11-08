import { Component } from 'react';

class MouseMove extends Component {
  state = { x: 0.5, y: 0.5 };
  ignoreMove = false;

  onMouseMove = ({ clientX, clientY }) => {
    if (this.ignoreMove) {
      return;
    }

    const { innerWidth, innerHeight } = this.state;
    if (!innerWidth || !innerHeight) {
      return;
    }

    const x = Math.min(clientX, innerWidth) / innerWidth;
    const y = Math.min(clientY, innerHeight) / innerHeight;
    this.setState({ x, y });
  };

  onDeviceMotion = ({ rotationRate: { beta, gamma } }) => {
    // Start ignoring mousemove events
    window.removeEventListener('mousemove', this.onMouseMove);

    const x = Math.min(Math.max(gamma, -45), 45) / -90;
    const y = Math.min(Math.max(beta, -45), 45) / -90;

    this.setState({ x, y });
  };

  onResize = () => {
    const { innerWidth, innerHeight } = window;
    this.setState({ innerWidth, innerHeight });
  };

  componentDidMount() {
    this.onResize();
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
    window.addEventListener('devicemotion', this.onDeviceMotion);
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('devicemotion', this.onDeviceMotion);
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    return this.props.children(this.state);
  }
}

export default MouseMove;
