// Define a function named concatenate with parameters str1 and str2
function concatenate(str1, str2) {
    // Modify str1 to exclude the first character
    str1 = str1.substring(1, str1.length);
    // Modify str2 to exclude the first character
    str2 = str2.substring(1, str2.length);
    // Return the concatenation of modified str1 and str2
    return str1 + str2;
}

 
// Call the function with sample arguments and log the results to the console
console.log(concatenate("PHP", "JS"));
console.log(concatenate("A", "B"));
console.log(concatenate("AA", "BB"));
