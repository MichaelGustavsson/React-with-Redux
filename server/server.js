const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const reactions = require('./routes/reactions');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/v1/reactions', reactions);

const PORT = process.env.PORT || 5005;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
