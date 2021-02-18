import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  top: -100px;
  background: #122333;
`;

const Left = styled.div`
  border-radius: 10%;
  height: 20px;
  width: 38px;
  bottom: 0;
  background-color: #0b1520;
  border-radius: 3px;
  cursor: pointer;
`;

const Right = styled.div`
  border-radius: 10%;
  height: 20px;
  right: 110px;
  width: 38px;
  bottom: 0;
  background-color: #0b1520;
  border-radius: 3px;
  cursor: pointer;
`;

const LeftArrow = styled.span`
  display: inline-block;
  background-position: -18px 0px;
  background-repeat: no-repeat;
  background-image: url('https://store.cloudflare.steamstatic.com/public/images/v6/icon_cluster_controls.png');
  width: 9px;
  height: 7px;
  margin-left: 13px;
  margin-top: 5px;
`;

const RightArrow = styled.span`
  display: inline-block;
  background-position: -9px 0px;
  background-repeat: no-repeat;
  background-image: url('https://store.cloudflare.steamstatic.com/public/images/v6/icon_cluster_controls.png');
  width: 9px;
  height: 7px;
  margin-left: 15px;
  margin-top: 5px;
`;

const Bar = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Handle = styled.input`
  position: absolute;
  left: 39px;
  background-color: #0e1c2a;
  border-radius: 3px;
  height: 18px;
  width: 538px;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  top: 0px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;


  ::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 60px;
  height: 18px;
  background: #070e14;
  opacity: .9;
  cursor: pointer;
  border-radius: 7%;
  &:hover {
    opacity: 1;
    background: linear-gradient(135deg, #3d6c8d 0%,#2e5470 100%)
  }
  }
`;

const Slider = () => {
  return (
    <Container>
      <Left>
        <LeftArrow />
      </Left>
      <Right>
        <RightArrow />
      </Right>
      <Bar>
        <Handle type="range" min="1" max="100" defaultValue="0" />
      </Bar>
    </Container>
  );
};

export default Slider;
