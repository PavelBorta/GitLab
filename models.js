const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.connect(
  'mongodb://localhost/users',
  { useNewUrlParser: true }
);

const usersSchema = new Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
  country: String,
}, { strict: false });

const models = {};
models.Users = mongoose.model('users', usersSchema);

module.exports = models;
