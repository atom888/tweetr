/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

$(".new-tweet").hide();

$('#compose').click(function() {
  $('.new-tweet').slideToggle( "slow", function() {
  });
   $("#content_txt").focus();
})



function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function renderTweets(tweets) { // need to redirect to lib / tweets.json
  var container = $('#tweet-container').html(''); //Jquery dom element - html('') wipes out all html with an empty string

  tweets.forEach(function(tweet) {
    var tweetInfo = createTweetElement(tweet);
    container.prepend(tweetInfo);
  });
};


function createTweetElement (tweet) {
  var avatars = tweet.user.avatars.regular;
  var name = tweet.user.name;
  var handle = tweet.user.handle;
  var content = tweet.content.text;
  var epoch = tweet.created_at;

//// Need to subtract present day with epoch date provided.
//// epoch provides a value in miliseconds

  var presentDate = $.now();
  var newDate = new Date(epoch);
  // var relativeTime = moment().format('LL');
  // console.log(relativeTime);

  tweet =
  $(`<article>
          <header>
            <img src=${avatars} class="avatar">
            <p class="name">${name}</p>
            <div class="sig">${handle}</div>
          </header>
          <p class="content">${escape(content)}</p>
          <footer>
            <p class="date">${newDate}
              <i class="fa fa-flag" aria-hidden="true"></i>
              <i class="fa fa-retweet" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </p>
          </footer>
      </article>`);

  return tweet;

  }

$('form[action="/tweets/"]').on('submit', function (event) { //event listener - takes in an event
  event.preventDefault();
  var tweetInput = $(this);
  var tweetLength = tweetInput.find("#content_txt").val().length;
  var maxTweetLength = 140;

  console.log("tweetLength", tweetLength);

  if (tweetLength === 0) {
    alert("Please enter a tweet before submitting.");
    return false;
  }
  if (tweetLength >= maxTweetLength) {
    alert("Tweet is too long!");
    // event.preventDefault();
    return false;
  }

  $.ajax({
    method: 'post',
    url: tweetInput.attr('action'), // specifics the URL to send the request to --- not necessary -- set as '/tweets' or '/'
    data: tweetInput.find('textarea').serialize(), // query string // data being sent over to the server
  }).done(function() { // server has nothing to send bakc - blank page
      loadTweets(); // promises
  });


  $("#configForm").trigger('reset');
  $(".counter").text(140);



});


  function loadTweets () {

    $.ajax({
      method: 'get',
      url: "/tweets/",
      dataType: 'json',
      success: function(tweetData) { // sent back as ajax data type
        renderTweets(tweetData);
      }
    });
  }

loadTweets();


// renderTweets();
});

