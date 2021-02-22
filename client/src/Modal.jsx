import React from 'react';
import styled from 'styled-components';

const MoreLikeModalContainer = styled.div`
  display: ${({ modalDisplay }) => { return modalDisplay ? 'block' : 'none'; }};
  position: absolute;
  z-index: 5;
  padding: 5px 12px 0 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: #c6d4df;
  font-size: 12px;
`;
const MoreLikeModalWrapper = styled.div`
  margin: 8px 0px;
  background: linear-gradient(to bottom, rgba(227,234,239,1) 0%,rgba(199,213,224,1) 100%);
  width: 306px;
  color: #30455a;
  font-size: 12px;
  overflow: hidden;
  box-shadow: 0 0 12px #000000;
`;

const MoreLikeModalContent = styled.div`
  padding: 16px;
  color: #30455a;
  font-size: 12px;
`;

const MoreLikeModalHeader = styled.h4`
    color: #222d3d;
    font-weight: normal;
    font-size: 15px;
    font-family: "Motiva Sans", Sans-serif;
    text-transform: unset;
    letter-spacing: 0px;
    margin-top: -4px;
    line-height: 17px;
    margin-bottom: 4px;
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const MoreLikeModalRelease = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: space-between;
`;

const MoreLikeModalPictures = styled.div`
  position: relative;
  width: 274px;
  height: 153px;
  margin: 5px 0;
`;

const MoreLikeModalPicture = styled.div`
  background-image: url("https://cdn.cloudflare.steamstatic.com/steam/apps/1030840/ss_f531c551d9794deafc1e45421b70e8d4c254aaca.600x338.jpg?t=1606265718");
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

const MoreLikeModalInfo = styled.div`
  display: block;
  margin-bottom: 6px;
`;

const MoreLikeModalReviewSummary = styled.div`
  margin-bottom: 10px;
  border-radius: 2px;
  padding: 4px;
  color: #c6d4df;
  background-color: rgba( 38, 54, 69, 0.6);
`;

const MoreLikeModalTagsWrapper = styled.div`
  overflow: hidden;
  height: 19px;
  margin-top: 2px;
`;

const MoreLikeModalTag = styled.div`
  background-color: #96a3ae;
  color: rgba(227,234,239,1);
  box-shadow: none;
  padding: 0 4px;
  font-size: 11px;
  border-radius: 2px;
  display: inline-block;
  line-height: 19px;
  margin-right: 2px;
  cursor: pointer;
  margin-bottom: 3px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MoreLikeModalPointer = styled.div`
  background-position: left;
  left: 5px;
  width: 7px;
  height: 15px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJlJREFUeNqc0k0KgCAQBlCdI0SLlkEtu4DLTt6yC7SN2hX0cwWbCQvDMa0PBhN9EsxIrbXgMs57RWueJR13Di+ooboeCEILpaZYDC/oCoshgLwYIhCL5TBtMcjOilUT1OJH6FdLrOWDobslYIN7/FCRmO4oMmCmIwbf6NGOAH4gZwA82EFnO7ghx14VuLRm6yAvtLDgEOUQYADt6VgCZRDsZgAAAABJRU5ErkJggg==");
  background-repeat: no-repeat;
  position: absolute;
  top: 48px;
`;

const Modal = ({ modalDisplay }) => (
  <MoreLikeModalContainer modalDisplay={modalDisplay}>
    <MoreLikeModalWrapper>
      <MoreLikeModalContent>
        <MoreLikeModalHeader>Mafia: Definitive Edition</MoreLikeModalHeader>
        <MoreLikeModalRelease>
          <span>Released: Sep 24, 2020</span>
          <div />
        </MoreLikeModalRelease>
        <MoreLikeModalPictures>
          <MoreLikeModalPicture />
        </MoreLikeModalPictures>
        <MoreLikeModalInfo>
          <MoreLikeModalReviewSummary>
            <div>Overall user reviews:</div>
            <span style={{ color: '#66C0F4' }}>Very Positive</span>
            (19,826 reviews)
          </MoreLikeModalReviewSummary>
          <div stlye={{ clear: 'left' }} />
        </MoreLikeModalInfo>
        <MoreLikeModalInfo>
          User tags:
          <MoreLikeModalTagsWrapper>
            <MoreLikeModalTag>Action</MoreLikeModalTag>
          </MoreLikeModalTagsWrapper>
        </MoreLikeModalInfo>
      </MoreLikeModalContent>
    </MoreLikeModalWrapper>
    <MoreLikeModalPointer />
  </MoreLikeModalContainer>
);

export default Modal;
