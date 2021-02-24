import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from './Modal';

const Photo = styled.img`
  width: 171px;
  height: 64px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba( 0, 0, 0, 0.2 );
  padding: 5px 15px 15px;
  height: 100px;
  margin-right: 2px;
  margin-bottom: 10px;
  border: 1px solid rgba( 0, 0, 0, 0 );
    &:hover {
      text-decoration: none;
      border: 1px solid rgba( 103, 193, 245, 0.5 );
      cursor: pointer;
    }

`;

const GameTitle = styled.h5`
    display: block;
    color: #8f98a0;
    width: 171px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 13px;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: normal;
    margin-top: 5px;
`;

const Price = styled.div`
  font-family: Tahoma, Arial, Helvetica, sans-serif;
  color: #acdbf5;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: normal;
`;

const Image = ({ currentGame, id }) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalCancel, setModalCancel] = useState(false);
  const [startPicAutomation, setStartPicAuto] = useState(false);
  const [autoIterate, setAutoIterate] = useState(1);

  return (
    <Container
      onMouseEnter={() => {
        setAutoIterate(1);
        setStartPicAuto(true);
        setModalDisplay(true);
      }}
      onMouseLeave={() => {
        setModalCancel(true);
        setModalDisplay(false);
      }}
    >
      <Photo src={currentGame.photos[0]} />
      <GameTitle>
        {currentGame.gameTitle}
        {' '}
      </GameTitle>
      <Price>{`$${currentGame.price}`}</Price>
      <Modal
        id={id}
        modalDisplay={modalDisplay}
        currentGame={currentGame}
        startPicAutomation={startPicAutomation}
        autoIterate={autoIterate}
        setAutoIterate={setAutoIterate}
        modalCancel={modalCancel}
      />
    </Container>
  );
};

export default Image;
