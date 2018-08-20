// Random Quote Generator


// Array of quotes as objects
var quotes = [
	{
		quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
		source: "John Keats"
	},
	{
		quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
		source: "Ernest Hemingway"
	},
	{
		quote: "When you reach the end of your rope, tie a knot in it and hang on.",
		source: "Franklin D. Roosevelt"
	},
	{
		quote: "There is nothing permanent except change.",
		source: "Heraclitus"
	},
	{
		quote: "You cannot shake hands with a clenched fist.",
		source: "Indira Gandhi"
	},
	{
		quote: "Let us sacrifice our today so that our children can have a better tomorrow.",
		source: "A. P. J. Abdul Kalam"
	},
	{
		quote: "It is better to be feared than loved, if you cannot be both.",
		source: "Niccolo Machiavelli"
	},
	{
		quote: "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
		source: "Amelia Earhart"
	},
	{
		quote: "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
		source: "Henry James"
	},
	{
		quote: "Learning never exhausts the mind.",
		source: "Leonardo da Vinci"
	},
	{
		quote: "There is no charm equal to tenderness of heart.",
		source: "Jane Austen"
	},
	{
		quote: "All that we see or seem is but a dream within a dream.",
		source: "Edgar Allan Poe"
	},
	{
		quote: "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.",
		source: "Francis of Assisi"
	},
	{
		quote: "The only journey is the one within.",
		source: "Rainer Maria Rilke"
	},
	{
		quote: "Good judgment comes from experience, and a lot of that comes from bad judgment.",
		source: "Will Rogers"
	},
	{
		quote: "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.",
		source: "William Blake"
	},
	{
		quote: "Life without love is like a tree without blossoms or fruit.",
		source: "Khalil Gibran"
	},
	{
		quote: "No act of kindness, no matter how small, is ever wasted.",
		source: "Aesop"
	},
	{
		quote: "Love cures people - both the ones who give it and the ones who receive it.",
		source: "Karl A. Menninger"
	},
	{
		quote: "Work like you don't need the money. Love like you've never been hurt. Dance like nobody's watching.",
		source: "Satchel Paige"
	},
	{
		quote: "It is far better to be alone, than to be in bad company.",
		source: "George Washington"
	},
	{
		quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
		source: "Patrick McKenzie",
		citation: "Twitter",
		year: "2016"
	}
];

// The getRandomQuuote function accepts array, gets random number, and returns array item with random number
function getRandomQuote(array) {
	var num = Math.round(Math.random() * array.length );
	var selectedQuote = array[num];
	return selectedQuote;
}


// The getRandomColor function gets random numbers to create random rgb colors, and returns rgb colors
function getRandomColor() {
	var red = Math.floor((Math.random() * 255) + 1 );
	var green = Math.floor((Math.random() * 255) + 1 );
	var blue = Math.floor((Math.random() * 255) + 1 );
	var red2 = Math.floor((Math.random() * 255) + 1 );
	var green2 = Math.floor((Math.random() * 255) + 1 );
	var blue2 = Math.floor((Math.random() * 255) + 1 );
	var rgb1 = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
	var rgb2 = 'rgb(' + red2 + ', ' + green2 + ', ' + blue2 + ')';
	var gradient = 'linear-gradient(to bottom right, ' + rgb1 + ', ' + rgb2 + ')';
	return gradient;
}


// The backgroundGradient funtion loads new background color
function backgroundGradient() {
	var backgroundColor = getRandomColor();

	document.getElementById('container').style.backgroundImage = backgroundColor;
	
}


// The printQuote funtion loads new quote-box
function printQuote() {
	var randomQuote = getRandomQuote(quotes);
	var stringOfQuoteProperties = "";
	stringOfQuoteProperties += '<p class="quote">' + randomQuote.quote + '</p><p class="source">' + randomQuote.source

	if (randomQuote.citation != null) {
  		stringOfQuoteProperties += '<span class="citation">' + randomQuote.citation + '</span>'
  	}
	if (randomQuote.year != null) {
  		stringOfQuoteProperties += '<span class="year">' + randomQuote.year + '</span>'
  	}

	stringOfQuoteProperties += '</p>'

	backgroundGradient();
	document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
	
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);







