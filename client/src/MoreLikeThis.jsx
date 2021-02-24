import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ImageCarousel from './ImageCarousel';
import Slider from './Slider';

const MoreLikeContainer = styled.div`
  display: flex;
  width: 945px;
  height: 190px;
  margin-top: 40px;
  margin-bottom: 16px;

`;

const MoreLikeHeader = styled.div`
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

const MoreLikeRightSide = styled.div`
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

const MoreLikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MoreLikeSpacer = styled.div`
  width: 65%;
`;

const MoreLikeLiner = styled.img`
  margin-top: 10px;
`;

const MoreLikeButton = styled.div`
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

const MoreLikeTitle = styled.h2`
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
  const [gameId, setGameId] = useState(1);
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const queryId = window.location.search.slice(4);
    const currentId = queryId || gameId;
    setGameId(currentId);
    const abortController = new AbortController();
    const { signal } = abortController;
    fetch(`${apiRoute}?id=${gameId}`, { signal })
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
        setCarouselData(data);
      })
      .catch((err) => console.log(err));

    return () => {
      abortController.abort();
    };
  }, [gameId]);

  return (
    <MoreLikeContainer>
      <MoreLikeWrapper>
        <HeaderWrapper>
          <MoreLikeHeader>
            <MoreLikeTitle>More Like This</MoreLikeTitle>
            <MoreLikeSpacer />
            <MoreLikeRightSide>
              <MoreLikeButton>See all</MoreLikeButton>
            </MoreLikeRightSide>
          </MoreLikeHeader>
          <MoreLikeLiner src="https://store.akamai.steamstatic.com/public/images/v6/maincol_gradient_rule.png" />
        </HeaderWrapper>
        <ImageCarousel carouselData={carouselData} />
        <Slider />
      </MoreLikeWrapper>
    </MoreLikeContainer>
  );
};

export default MoreLikeThis;
