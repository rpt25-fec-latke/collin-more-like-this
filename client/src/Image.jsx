import React from 'react';
import styled from 'styled-components';

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
`;

const Photo = styled.img`
  width: 171px;
  height: 64px;
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

const Image = () => {
  return (
    <Container id="scroll">
      <Photo src="https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_184x69.jpg?t=1592866696" />
      <GameTitle>Grand Theft Auto: San Andreas </GameTitle>
      <Price>$15.99</Price>
    </Container>
  );
};

export default Image;
