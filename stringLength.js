/*
string length obtained by stringName.length
goal: to alert the user of maximum characters a message can have
*/

var total = 150;
var message = prompt("enter you message:");
var len = message.length;
var remaining = total - len;
alert("Your message is " + len + " characters long. You have " + (total - len) + " characters left.");
