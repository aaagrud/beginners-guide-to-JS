/*
case of a string can be changed using: stringName.toUpperCase() or stringName.toLowerCase()
goal: to capitalize just the first letter of a name entered by user
*/

var name = prompt("enter name: ");
alert("Hello " + name.slice(0, 1).toUpperCase() + name.slice(1, name.length));
