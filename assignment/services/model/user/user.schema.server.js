var mongoose = require('mongoose');
var websiteSchema = require('../website/website.schema.server');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  facebook : {
    token: String,
    id: String,
    displayName: String
  },
  websites: [websiteSchema]
},{collection:'user'});

module.exports = userSchema;
