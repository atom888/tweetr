//JQuery waits for docuemnt to be ready before running JS functions
$(document).ready(function() {
  console.log("ready!");

  const maxValue = 140;
  $('.counter').text(maxValue);

//Looking for any key (typing) activity that takes place within the content_txt id - or textarea
  $("#content_txt").on("input", function(element) {
    var lengthValue = $(this).val().length;

    var countReduce = maxValue - lengthValue;

//Calling upon the counter class by traversing the DOM to find the class node
    var counterElement = $(this).parent().find(".counter");

    counterElement.text(countReduce);
    counterElement.css('color', countReduce < 0 ? 'red' : '');

    });
});


