import React from 'react';
import { styled } from 'linaria/react';

const Wrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
`;

const LoadingWrapper = ({ isLoading, children }) => (
  <Wrapper>
    {children}
    {isLoading && <Overlay />}
  </Wrapper>
);

export default LoadingWrapper;
