const express = require('express');
const bp = require('body-parser');
const models = require('./models');

const server = express();

const port = process.env.PORT || 3001;

server.use(bp.json());
server.use(bp.urlencoded({ extended: true }));

server.use('/users', require('./crud')(models.Users));

server.listen(port, () => console.log(`Listening on port ${port}`));
