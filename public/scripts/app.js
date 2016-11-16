/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {



// Test / driver code (temporary). Eventually will get this from the server.
var tweetData =
{
  "user": {
           "name": "Newton",
            "avatars": {
                           "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
                           "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
                           "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
                        },
           "handle": "@SirIsaac"
            },
  "content": {
             "text": "If I have seen further it is by standing on the shoulders of giants"
             },
  "created_at": 1461116232227
}

function createTweetElement () {
  var avatars = tweetData.user.avatars.regular; //$('<p>').addClass('name').text(tweetData.user.avatars.regulra //
  var name = tweetData.user.name;
  var handle = tweetData.user.handle;
  var content = tweetData.content.text;
  var epoch = tweetData.created_at;

//// Need to subtract present day with epoch date provided.
  var presentDate = $.now();
  var newDate = new Date(epoch);


  $(".avatar").attr("src", avatars);
  $(".name").append(name);
  $(".sig").append(handle);
  $(".content").append(content);
  $(".date").append(newDate);

  // console.log("date:", newDate);
  // console.log("content:", content);
  // console.log("handle:", handle);
  // console.log("name:", name);
  // console.log("avatars:",avatars);


  // var img =


  // //Need to establish tweet to fill the article
  // // construct header , body, and footer - chain together and return tweet
  // var $tweet = $('<article>')

  // var $header = $('<header>').append([img, name, sig]);
  // var $body = $('<p>').append(content);
  // var $footer = $('<footer>').append(date)




}


// var data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];

// function renderTweets(tweets) {
//   var containter = $('#tweet-container').html('');

//   tweets.forEach(function(tweets) {
//     var tweetInfo = createTweetElement(tweet);
//     containter.append(tweetInfo);
//   })
// }

// // function createTweetElement(tweet) {
// //   var $tweet = $('<article>').addClass('tweet');
// //   // ...
// //   return $tweet;
// // }

// // renderTweets(data);

// console.log(tweetData);
var $tweet = createTweetElement(tweetData);




// // $(".sig").append("handle");
// // Test / driver code (temporary)
// // console.log($tweet); // to see what it looks like
// // $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// // Once implemented correctly, the exact same tweet component should be rendered into the tweets

// }

});