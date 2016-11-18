"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
const sortNewestFirst = (a, b) => a.created_at - b.created_at;

module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        // db.tweets.push(newTweet);
        db.collection("tweets").insertOne(newTweet, function(err, tweet) {
          callback(null, tweet);
        })
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      simulateDelay(() => {
        db.collection("tweets").find().toArray((err, tweets) => {
          if (err) {
            return callback(err);
          }
          callback(null, tweets.sort(sortNewestFirst));
        });
      });
    }

  };
}




