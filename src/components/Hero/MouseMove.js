import { Component } from 'react';

class MouseMove extends Component {
  state = { x: 0.5, y: 0.5 };

  onMouseMove = ({ clientX, clientY }) => {
    const { innerWidth, innerHeight } = this.state;
    if (!innerWidth || !innerHeight) {
      return;
    }

    const x = Math.min(clientX, innerWidth) / innerWidth;
    const y = Math.min(clientY, innerHeight) / innerHeight;
    this.setState({ x, y });
  };

  onResize = () => {
    const { innerWidth, innerHeight } = window;
    this.setState({ innerWidth, innerHeight });
  };

  componentDidMount() {
    this.onResize();
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    const { children } = this.props;
    const { x, y } = this.state;
    return children({ x, y });
  }
}

export default MouseMove;
