/*
you can pass values inside a function from outside and use it there!

here, we calculate how many chocolates you can buy given an amount of money
cost of 1 chocolate = 10 rupees

We have used a built in function Math.floor here to avoid the decimal part
refer MDN here to learn more about Math.floor(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
*/

function buyChocolates(money){
    alert("you can buy " + Math.floor(money/10) + " chocolates" );
}

buyChocolates(203);
