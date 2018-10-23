var quote = 'error generating quote';
var author = '- TS Elliot';

//Primary Functions:

function pickColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function generateQuote() {

  $("#text").load("metaphorpsum.com/sentences/<3>", completeFunction);
  
  function completeFunction(responseText, textStatus, request) {
    if(textStatus == 'error') {
      // show a relevant message
      return 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
    }
  }
  
  return sentence;
}

function newQuote() {
  var color = pickColor();
  var quote = generateQuote();
  $(".colored").css("background-color", color);
  $("#text").animate({"opacity": 0}, 750, function () {
    $(this).html('<div id="text"><h1 class="coloredText" id="quoteText"><i class="fa fa-quote-left" aria-hidden="true"></i> <span id="quote">' + quote + '</span> <i class="fa fa-quote-right" aria-hidden="true"></i></h1><p class="coloredText" id="credit">' + author +'</p>');
    $(this).css("color", color);
  }).animate({"opacity": 1}, 750);  
}

//JQuery Page Load (set up listeners):

$(document).ready(function() {
  newQuote();
	$("#tweet").on("click", function() {
    $("#tweet").attr('href', 'https://twitter.com/intent/tweet?text="' + quote + '." ' + author);
  });
 	$("#newQuote").on("click", function() {
    newQuote();
  });
});