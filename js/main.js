
var quotePlace = document.getElementById("quote");
var authorPlace = document.getElementById("quoteAuthor");


var quoteArr = [
  {
    qoute : "“Be yourself; everyone else is already taken.”",
    author : "― Oscar Wilde",
  },
  {
    qoute : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author : "― Albert Einstein",
  },
  {
    qoute : "“So many books, so little time.”",
    author : "― Frank Zappa",
  },
  {
    qoute : "“A room without books is like a body without a soul.”",
    author : "― Marcus Tullius Cicero",
  },
  {
    qoute : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author : "― Dr. Seuss",
  },
  {
    qoute : "“You only live once, but if you do it right, once is enough.”",
    author : "― Mae West",
  },
  {
    qoute : "“Be the change that you wish to see in the world.”",
    author : "― Mahatma Gandhi",
  },
  {
    qoute : "“In three words I can sum up everything I've learned about life: it goes on.”",
    author : "― Robert Frost",
  },
  {
    qoute : "“If you tell the truth, you don't have to remember anything.”",
    author : "― Mark Twain",
  }
];

var indexOfQuoteArr = [];

function getQouteRandomly () {
  
  var indexOfTokenQuote = Math.floor(Math.random() * quoteArr.length);

  if ( !indexOfQuoteArr.includes(indexOfTokenQuote) ) {

    // console.log("yes");

    quotePlace.innerHTML = quoteArr[indexOfTokenQuote].qoute;

    authorPlace.style.display = "block";
    quotePlace.style.color = "black";

    authorPlace.innerHTML = quoteArr[indexOfTokenQuote].author;

    indexOfQuoteArr.push(indexOfTokenQuote);
    

  } else {

    // console.log("no");

    if (indexOfQuoteArr.length !== quoteArr.length) {
      quotePlace.innerHTML = "Please -CLICK AGAIN- To Show New Quote";
      quotePlace.style.color = "red";
      authorPlace.style.display = "none";

    } else {

      quotePlace.innerHTML = "You Read -ALL SAVED QUOTE- Please -RELOAD- Your Page";
      quotePlace.style.color = "red";
      authorPlace.style.display = "none"

    };
  };
};