import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from './Image';

const ImageCarouselContainer = styled.div`
  display: flex;
  height: 132px;
  width: 616px;
  margin-bottom: 2px;
  overflow-x: scroll;
  overflow-y: hidden;
  z-index: 2;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ImageCarouselWrapper = styled.div`
  display: flex;
  vertical-align: top;
  width: auto;
  white-space: nowrap;
`;

const ImageCarousel = ({ carouselData }) => {
  // slider functionality start if time
  // useEffect(() => {
  //   setTimeout(() => {
  //     document.getElementById('scroll').click();
  //     document.getElementById('scroll').scrollRight = 100;
  //   }, 5000);
  // }, []);
  return (
    <ImageCarouselContainer>
      <ImageCarouselWrapper>
        {carouselData.length === 0 ? '' : carouselData.map((currentGame, i) => (
          <Image
            currentGame={currentGame}
            key={i}
            id={i}
          />
        ))}
      </ImageCarouselWrapper>
    </ImageCarouselContainer>
  );
};

export default ImageCarousel;
