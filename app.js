// ///Chapter 9:
// \\\\\\\\\ Question 1.\\\\\\\\\\
let city = prompt("Enter your city?");
if(city == "karachi" || city == "Karachi"){
    document.write("Welcome to the city of lights <br>")
}

// \\\\\\\\\\ Question 2.\\\\\\\\\
let gender = prompt("Enter your gender?");
if(gender == "male"){
    document.write("Good Morning Sir")
}
else if (gender == "female") {
document.write("Good Morning Mam <br>")    
} 

// \\\\\\\\\\\ Question 3.\\\\\\\\\\
let lights = prompt("Enter traffic lights color?");
if(lights == "red"){
    document.write("Must Stop")
}
else if(lights == "yellow"){
    document.write("Ready to move")
}
else if(lights == "green"){
    document.write("Move now")
}

//  \\\\\\\\\\\\ Question 4. \\\\\\\\\\
let fuel = prompt("Enter your current fuel?");
if(fuel > 0.25){
 document.write("<br> your fuel is okay!!")
}
else{
    document.write("Please refill the fuel in your car <br>")
}

// \\\\\\\\\\\\\ Question 5. \\\\\\\\\\\
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }
    

// \\\\\\\\\\ Question 6. \\\\\\\\\\\\
document.write("MARK SHEET <br>")
document.write("TOTAL MARKS: 300 <br>")
let marks1 = (parseInt(prompt("Enter your 1st subject marks??")));
let marks2 = (parseInt(prompt("Enter your 2nd subject marks??")));
let marks3 = (parseInt(prompt("Enter your 3rd subject marks??")));
document.write("<br>   OBTAINED MARKS:  " ,  marks1 + marks2 + marks3);
let percentage = prompt("Enter your percentage?")
if (percentage >= 90) {
    document.write('<p>Grade: A+</p>');
    document.write('<p>Remarks: Excellent</p>');
  
} else if (percentage >= 80) {
    document.write('<p>Grade: A</p>');
    document.write('<p>Remarks: Very Good</p>');
  
} else if (percentage >= 70) {
    document.write('<p>Grade: B</p>');
    document.write('<p>Remarks: Good</p>');
    
} else if (percentage >= 60) {
    document.write('<p>Grade: C</p>');
    document.write('<p>Remarks: Satisfactory</p>');
   
} else if (percentage >= 50) {
    document.write('<p>Grade: D</p>');
    document.write('<p>Remarks: Pass</p>');
   
} else {
    document.write('<p>Grade: F</p>');
    document.write('<p>Remarks: Fail</p>');
   
}
document.write("PERCENTAGE: ",percentage ,"<br>");

//  \\\\\\\\\ Question 7.\\\\\\\\\\
let num = 6;
let sum = prompt("Guess the number");
if (sum == 6){
    document.write("Bingo! Correct answer");
}
else if (sum== ++num){
    document.write("you are too close");
}
else if (sum == 7){
    document.write("you are too close");
}

// \\\\\\\\\\\ Question 8.\\\\\\\\\\
let number = prompt("Enter a number:");
if (number % 3 === 0) {
   document.write("The number is divisible by 3. <br>");
} else {
   document.write("The number is not divisible by 3. <br>");
}

// \\\\\\\ Question 9. \\\\\\\\\\\\\\\\
let evodd = prompt("Enter a number:");
if (evodd % 2 === 0) {
   document.write("The number is even. <br>");
} 
else {
   document.write("The number is odd. <br>");
}

// \\\\\\\\\\\ Question 10. \\\\\\\\\\\
let temperature = prompt("Enter the temperature:");
if (temperature > 40) {
    document.write("It is too hot outside.");
}
 else if (temperature > 30) {
    document.write("The Weather today is Normal.");
} 
else if (temperature > 20) {
    document.write("Today’s Weather is cool.");
}
 else if (temperature > 10) {
    document.write("OMG! Today’s weather is so Cool.");
}

// \\\\\\\\ Question 11.\\\\\\\\\\\\
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operation = prompt("Enter the operation (+, -, *, /, %):");
if (operation === "+") {
    document.write("Result: " + (num1 + num2));
} 
else if (operation === "-") {
    document.write("Result: " + (num1 - num2));
} 
else if (operation === "*") {
    document.write("Result: " + (num1 * num2));
}
 else if (operation === "/") {
        document.write("Result: " + (num1 / num2));
}
else if (operation === "%") {
        document.write("Result: " + (num1 % num2));
}
else {
    document.write("Error: Invalid operation.");
}
