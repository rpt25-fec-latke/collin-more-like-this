const faker = require('faker');
const mongoose = require('mongoose');
const { GamePrices } = require('.');

mongoose.connect('mongodb://localhost/gameinfo', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const saveSeed = async (seed) => {
  await new GamePrices(seed).save().catch((err) => console.log('ERROR', err));
};

db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', () => {
  (async () => {
    let seeder = 1;

    while (seeder <= 100) {
      const dataFormat = {
        game_id: seeder,
        price: faker.commerce.price(25, 60),
      };
      await saveSeed(dataFormat);
      seeder++;
    }

    console.log('Seeding Complete');
    db.close();
  })();
});
