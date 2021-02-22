const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gameinfo', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
});
const { connection } = mongoose;

connection.on('error', console.error.bind(console, 'mongoose connection error:'));

connection.once('open', () => {
  console.log('successfully connected to mongoose');
});

const gamePrices = new mongoose.Schema({
  game_id: {
    type: Number,
    unique: true,
  },
  price: String,
},
{ collection: 'gamePrices' });

const GamePrices = mongoose.model('GamePrices', gamePrices);

const getGamePrice = async (gameId) => {
  try {
    const [{ price }] = await GamePrices.find({ game_id: gameId }).exec();
    return price;
  } catch (err) {
    console.log('DB FETCH ERROR', err);
  }
  return null;
};

module.exports = {
  GamePrices,
  getGamePrice,
};
