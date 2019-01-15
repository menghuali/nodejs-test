var db = require('./db.js');

var handleSignup = (email, password) => {
  // Check if email already exists
  db.saveUser({email, password});
  //Send the welcome message
};

module.exports.handleSignup = handleSignup;
