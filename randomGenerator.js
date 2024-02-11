/*
you can generate random numbers in js using Math.random()
it generates random numbers between 0(inclusive) and 1(exclusive)
we can change its range to get results we requre
learn more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function loveCalculator(){
    var you = prompt("enter your name: ");
    var crush = prompt("enter your crushes name: ");
    var love = Math.floor((Math.random() * 100) + 1);
    alert(you + " and " + crush+" has a match of " + love + " percentage!");
}

loveCalculator();

