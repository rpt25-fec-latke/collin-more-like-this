import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import ImageCarousel from './ImageCarousel';
import Slider from './Slider';

const Container = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  width: 50%;
  height: 190px;
  margin-top: 40px;
  margin-bottom: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 616px;
  height: 26px;
  font-size: 14px;
  color: #acb2b8;
  margin-top: 16px;
  font-family: Arial, Helvetica, sans-serif;
  ::after {
    content: "";
    background-image: url("https://store.akamai.steamstatic.com/public/images/v6/maincol_gradient_rule.png");
    background-repeat: no-repeat;
    background-position: bottom-left;
  }

`;

const Right = styled.div`
  align-self: flex-end;
  margin-right: 3px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 57px;
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  width: 65%;
`;

const Liner = styled.img`
  margin-top: 10px;
`;

const Button = styled.div`
  width: 33px;
  height: 12px;
  background-color: rgba( 103, 193, 245, 0.2 );
  border-radius: 1px;
  color: #67c1f5;
  font-size: 11px;
  padding: 0px 4px;
  padding-bottom: 4px;
  line-height: 19px;
  box-shadow: none;
  margin-right: 2px;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    background: linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%);
    color: white;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  display: block;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 0 10px;
  letter-spacing: 2px;
  line-height: 26px;
  text-align: start;
  font-weight: normal;
  padding-top: 2px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const MoreLikeThis = ({ apiRoute }) => {
  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const { signal } = abortController;
  //   fetch(apiRoute, { signal })
  //     .then((res) => res.json())
  //     .then(({ bacon }) => {
  //       console.log(bacon);
  //     })
  //     .catch((err) => console.log(err));

  //   return () => {
  //     abortController.abort();
  //   };
  // }, []);

  return (
    <Container>
      <Wrapper>
        <HeaderWrapper>
          <Header>
            <Title>More Like This</Title>
            <Spacer />
            <Right>
              <Button>See all</Button>
            </Right>
          </Header>
          <Liner src="https://store.akamai.steamstatic.com/public/images/v6/maincol_gradient_rule.png" />
        </HeaderWrapper>
        <ImageCarousel />
        <Slider />
      </Wrapper>
    </Container>
  );
};

export default MoreLikeThis;
