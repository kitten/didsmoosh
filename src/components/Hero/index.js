import React from 'react';

import Card from './Card';
import Background from './Background';
import MouseMove from './MouseMove';

const Hero = () => (
  <Background>
    <MouseMove>{pos => <Card {...pos} />}</MouseMove>
  </Background>
);

export default Hero;
