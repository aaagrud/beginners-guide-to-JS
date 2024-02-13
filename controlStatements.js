/*
you can use control statements to control the flow of code.

here, we will use simple if-else control statement to display hi only if your name is statement
*/

function hiSam(name){
    if(name === "Sam"){
        alert("hello sam!");
    }
    else{
        alert("you are not Sam.");
    }
}

function main(){
    name = prompt("enter your name: ");
    hiSam(name);
}

main();
