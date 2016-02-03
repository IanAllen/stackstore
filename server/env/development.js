var config = require("../../config");

module.exports = {
  "DATABASE_URI": "mongodb://localhost:27017/slackstore",
  "SESSION_SECRET": "Optimus Prime is my real dad",
  "TWITTER": {
    "consumerKey": "INSERT_TWITTER_CONSUMER_KEY_HERE",
    "consumerSecret": "INSERT_TWITTER_CONSUMER_SECRET_HERE",
    "callbackUrl": "INSERT_TWITTER_CALLBACK_HERE"
  },
  "FACEBOOK": {
    "clientID": config.FACEBOOK.clientID,
    "clientSecret": config.FACEBOOK.clientSecret,
    "callbackURL": config.FACEBOOK.callbackURL
  },
  "GOOGLE": {
    "clientID": config.GOOGLE.clientID,
    "clientSecret": config.GOOGLE.clientSecret,
    "callbackURL": config.GOOGLE.callbackURL
  }
};
