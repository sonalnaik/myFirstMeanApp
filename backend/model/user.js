var mongoose = require('mongoose');
var Schema =mongoose.schema;

var User  = new Schema({
  firstName: {
    type: String 
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  is_active: {
    type: String,
  },
  city: {
    type: String,
  },
  state:{
    type: String,
  },
  username: {
    type: String,
  },
  
},{
    collection: 'Users'
});

module.exports = mongoose.model('User',User);