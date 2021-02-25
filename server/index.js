const path = require('path');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');

const { getGamePrice } = require('./db');
const organizeData = require('./utils');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.resolve('client', 'public')));

const priceFetcher = async (relatedGames) => {
  const result = [];
  for (let i = 0; i < relatedGames.length; i++) {
    const currentGame = relatedGames[i];
    const gameId = currentGame.game_id;
    const price = await getGamePrice(gameId).catch((err) => console.log(err));
    result.push(price);
  }
  return result;
};

const getRelatedReview = async (relatedGames) => {
  const result = [];
  for (let i = 0; i < relatedGames.length; i++) {
    const currentGame = relatedGames[i];
    const gameId = currentGame.game_id;
    const { data } = await axios.get(`http://204.236.178.72:3001/reviews?id=${gameId}`);
    result.push(data);
  }
  return result;
};

const getRelatedMetaData = async (relatedGames) => {
  const result = [];
  for (let i = 0; i < relatedGames.length; i++) {
    const currentGame = relatedGames[i];
    const gameId = currentGame.game_id;
    const { data } = await axios.get(`http://3.131.140.35:3005/metadata?id=${gameId}`);
    result.push(data);
  }
  return result;
};

app.get('/morelikethis', async (req, res) => {
  console.log(req.query.id);
  // call to game info
  // get 7 game prices based on game_id
  // 7 calls to meta for title/release based on game_id
  // 7 calls to reviews_counts for overall reviews based on game_id
  try {
    const { data: { relatedGames } } = await
    axios.get(`http://3.137.75.100:3008/game_info/related?id=${req.query.id}`);

    const prices = await priceFetcher(relatedGames);
    const overallReviews = await getRelatedReview(relatedGames);
    const relatedMetaData = await getRelatedMetaData(relatedGames);
    const conjoinedData = organizeData(relatedGames, overallReviews, relatedMetaData, prices);
    res.json({ data: conjoinedData });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
console.log(process.env.PORT);
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`service running on port ${PORT}`);
});
