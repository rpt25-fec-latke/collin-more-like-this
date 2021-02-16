import React from 'react';
import { render } from 'react-dom';
import MoreLikeThis from './MoreLikeThis';

let apiRoute;
if (process.env.NODE_ENV !== 'production') {
  apiRoute = 'http://localhost:3002/morelikethis';
} else {
  apiRoute = '/morelikethis';
}

render(
  <MoreLikeThis apiRoute={apiRoute} />,
  document.getElementById('moreLikeThis'),
);
