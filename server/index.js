const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.resolve('client', 'dist')));

app.get('/morelikethis', (req, res) => {
  res.json({ bacon: 'bacon' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`service running on port ${PORT}`);
});
