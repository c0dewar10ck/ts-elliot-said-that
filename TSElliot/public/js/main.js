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

  var structure1 = noun() + " is the " + adjective() + " " + noun() + " of " + noun() + ".";
  var structure2 = "";
  
  return structure1.charAt(0).toUpperCase() + structure1.slice(1);
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

//Secondary Functions:

function noun() {
  return nouns[Math.floor(Math.random() * nouns.length)];
}

function adjective() {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}

function verb() {
  return verbs[Math.floor(Math.random() * verbs.length)];
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

//Quote Dictionaries:

var adjectives = [
  
  //100 words to make you sound smart (https://www.vocabulary.com/lists/258109)
  "avante-garde",
  "bona fide",
  "baroque",
  "bourgeois",
  "brusque",
  "Byzantine",
  "capricious",
  "carte blanche",
  "caustic",
  "cloying",
  "disheveled",
  "elan",
  "esoteric",
  "fastidious",
  "glib",
  "gregarious",
  "idiosyncratic",
  "idyllic",
  "indelicate",
  "infinitesimal",
  "insidious",
  "lurid",
  "Machiavellian",
  "maudlin",
  "ostentatious",
  "peevish",
  "perfunctory",
  "precocious",
  "quintessential",
  "scintillating",
  "spartan",
  "stoic",
  "suave",
  "ubiquitous",
  "unrequited",
  "untenable",
  "vicarious",
  "vile",
  "zealous"
  
  ];
  
var nouns = [
  
  //100 words to make you sound smart (https://www.vocabulary.com/lists/25810)
  "accolade",
  "acrimony",
  "angst",
  "anomaly",
  "antidote",
  "baroque",
  "boondoggle",
  "borgeois",
  "bravado",
  "brogue",
  "Byzantine",
  "cacophony",
  "camaraderie",
  "carte blanche",
  "charisma",
  "deja vu",
  "dichotomy",
  "dilettante",
  "ennui",
  "epitome",
  "equanimity",
  "euphemism",
  "fait accompli",
  "faux pas",
  "fiasco",
  "Freudian slip",
  "harbinger",
  "hedonist",
  "heresy",
  "junket",
  "kitsch",
  "litany",
  "malaise",
  "mantra",
  "mercenary",
  "minimalist",
  "misnomer",
  "narcissist",
  "nirvana",
  "non sequitur",
  "nouveau-riche",
  "oblivion",
  "panacea",
  "paradox",
  "philistine",
  "propriety",
  "quid pro quo",
  "red herring",
  "rhetoric",
  "stigma",
  "stoic",
  "Svengali",
  "sycophant",
  "teetotaler",
  "tete-a-tete",
  "tirade",
  "tryst",
  "waft",
  "white elephant"

  ];
  
var verbs = [
  
  //100 words to make you sound smart (https://www.vocabulary.com/lists/25810)
  "equivocate",
  "finagle",
  "malinger",
  "ogle",
  "ostracize",
  "revel"
  
  ];

