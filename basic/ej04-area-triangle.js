// Define the lengths of the three sides of a triangle
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 

// Calculate the semi-perimeter of the triangle
var s = (side1 + side2 + side3) / 2;

// Use Heron's formula to calculate the area of the triangle
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

// Log the calculated area to the console
console.log(area);