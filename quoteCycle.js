
// Array of testimonials or quotes //quotes taken from https://www.ecomena.org/inspirational-quotes-environment/
//initialising the quotes
var quote = [
    "We won\’t have a society if we destroy the environment. - Margaret Mead",
    "TWe don\’t have to sacrifice a strong economy for a healthy environment. – Dennis Weaver",
    "Earth provides enough to satisfy every man\’s needs, but not every man\’s greed. ― Mahatma Gandhi",
    "The only way forward, if we are going to improve the quality of the environment, is to get everybody involved. – Richard Rogers",
    "What is the use of a house if you haven\’t got a tolerable planet to put it on? ― Henry David Thoreau"
  ];
  

//function to generate a random number that chooses which quote from the array to be displayed on the web page
function newQuote(){
    var randomNumber = Math.floor(Math.random()*quote.length);
    document.getElementById('quoteDisplay').innerHTML=quote[randomNumber];
}



  