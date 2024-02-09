/*
x++ means x = x + 1
x-- means x = x - 1

similarily, 
x += y means x = x + y
x /= y means x = x / y
x *= y means x = x * y
x -= y means x = x - y
and so on

increment and decrement may be post/pre increment and decrement
in pre increment, value is changed before assignment
in post increment, value is changed after assignment

*/

var number = prompt("enter a number: ");
number++;
alert("your number is now: " + number);
number--;
alert("your number is now back to: " + number);
