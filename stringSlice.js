/*
a string can be sliced by: stringName.slice(startIndex, endIndex)
goal: to cut off characters in a tweet after the first 140
*/

tweet = prompt("enter your tweet: ");
tweetLength = tweet.length;
alert("your tweet is " + (tweetLength) + " characters. Extra after 140 deleted.")
alert(tweet.slice(0, 140));
