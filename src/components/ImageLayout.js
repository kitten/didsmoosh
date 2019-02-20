import React from 'react';
import { styled } from 'linaria/react';

import MainImage from './MainImage';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  background: rgb(251, 250, 252);
  max-height: 50vh;

  @media (max-width: 768px) {
    max-height: auto;
    flex-direction: column-reverse;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  width: 45%;

  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: 0.08rem;
  border-bottom: 1px solid #e0d6eb;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
    letter-spacing: 0.04rem;
  }
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 55%;

  @media (min-width: 768px) {
    > * {
      min-height: 100%;
      min-width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageLayout = ({ children }) => (
  <Container>
    <Content>{children}</Content>
    <Image>
      <MainImage />
    </Image>
  </Container>
);

export default ImageLayout;
