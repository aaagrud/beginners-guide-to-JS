/* 
Returning functions can return a value!
We will demonstrate with a BMI calculator
If my weight is 65Kg and my height is 1.8m, I should be able to call the function like:
var bmi = bmiCalculator(65, 1.8); 
*/

function bmiCalculator(weight, height){
    return weight / (height * height);
}
