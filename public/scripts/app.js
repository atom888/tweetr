/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {


// Have new tweet container hidden when user enters the page
//- directs the user to push the compose button in the top corner
  $(".new-tweet").hide();


//When compose button is clicked, user will be presented with new tweet container with an auto select text
  $('#compose').click(function() {
    $('.new-tweet').slideToggle("slow", function() {
    });
    $("#content_txt").focus();
  });

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }


  function createTweetElement (tweet) {
    var avatars = tweet.user.avatars.regular;
    var name = tweet.user.name;
    var handle = tweet.user.handle;
    var content = tweet.content.text;
    var epoch = tweet.created_at;

    var newDate = new Date(epoch);
    var relativeTime = moment(newDate).fromNow();

    tweet = $(`<article>
            <header>
              <img src=${avatars} class="avatar">
              <p class="name">${name}</p>
              <div class="sig">${handle}</div>
            </header>
            <p class="content">${escape(content)}</p>
            <footer>
              <p class="date">${relativeTime}
                <i class="fa fa-flag" aria-hidden="true"></i>
                <i class="fa fa-retweet" aria-hidden="true"></i>
                <i class="fa fa-heart" aria-hidden="true"></i>
              </p>
            </footer>
        </article>`);

    return tweet;

  }

  function renderTweets(tweets) {
    var container = $('#tweet-container').html('');
    tweets.forEach(function(tweet) {
      var tweetInfo = createTweetElement(tweet);
      container.prepend(tweetInfo);
    });
  }

  function loadTweets () {

    $.ajax({
      method: 'get',
      url: "/tweets/",
      dataType: 'json',
      success: function(tweetData) {
        renderTweets(tweetData);
      }
    });
  }

  $('form[action="/tweets/"]').on('submit', function (event) {
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
      return false;
    }

    $.ajax({
      method: 'post',
      url: tweetInput.attr('action'),
      data: tweetInput.find('textarea').serialize()
    }).done(function() {
      loadTweets();
    });

    $("#configForm").trigger('reset');
    $(".counter").text(140);

  });

  loadTweets();

});

