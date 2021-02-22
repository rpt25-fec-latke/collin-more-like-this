import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import MoreLikeThis from './MoreLikeThis';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%auto;
  }
  * {
    padding: 0;
    margin: 0;
  }
  body {
    background: linear-gradient(to right, #2d4e61, #1b2839);
    overflow-x: hidden;
  }
  #moreLikeThis {
    display: flex;
    justify-content: center;
    /* width: 616px; */
  }
`;

let apiRoute;
if (process.env.NODE_ENV !== 'production') {
  apiRoute = 'http://localhost:3002/morelikethis';
} else {
  apiRoute = '/morelikethis';
}

render(
  <>
    <GlobalStyle />
    <MoreLikeThis apiRoute={apiRoute} />
  </>,
  document.getElementById('moreLikeThis'),
);
