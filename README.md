# Game Information Carousel & Side Panel

> An information section that includes images from the game, a brief description, tags related to the game and other specs.

## Dependent Projects
reviews section - https://github.com/rpt25-fec-latke/tyler-services
game info & carousel - https://github.com/rpt25-fec-latke/collin-services
meta data sidebar - https://github.com/rpt25-fec-latke/dwayne-services

## Table of Contents

1. [Versions](#versions)
2. [Installation](#installation)
3. [Development](#development)
4. [Seed Script](#seedscript)

## Versions
1.) Node - 12.16.1
2.) NPM - 6.14.11
3.) MongoDB shell - 4.4.1
5.) All NPM packages should be the most current version.

## Installation
From within the root directory:

1.) npm install
2.) npm run seed
3.) npm start (run server)
4.) npm run dev (run app on dev server)

## Development

Backend:
  This service is dependent on the Reviews API, the Metadata API and the Game Info/Carousel API. It makes an initial call to Game Info/Carousel API based on the genre of the current game ID and recieves back 7 games. Based on the game ID for each game it makes 7 calls to the Reviews API and 7 calls to the Metadata API to get the necessary data to display related games.
  I created some helper functions to combine data and help me send back a single object to deal with on the front end.

Frontend:
  I'm using primarily React Hooks. If unfamiliar with hooks, the useState hook is used to store state and set state. The useEffect hook is used similarly to componentDidMount and componentDidUpdate in React.
  This project uses styled-components and utilizes global styles and themes which are both part of styled-components.
  The image carousel is currently made with overflow set to scroll and the scroll bar is currently not visible as I was trying to build out a custom slider similar to Steam's but right now scrolling is done only with the mouse or trackpad.
  The  modal is currently very buggy and only working on the first three. The line up with the image is perfect until you scroll and then they get out of position. This is due to using absolute positioning. The modal also disappears after first hover. There is a setTimeout on the modal that cycles through the pictures one time and then stops to prevent too many s3 calls.

## Seed Script
Example:[
  {
    game_id: 1,
    genre: '31.00',
  }
];
