
 function leapyear(year) {

    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyear(2016)); // Expected output: true
console.log(leapyear(2000)); // Expected output: true
console.log(leapyear(1700)); // Expected output: false
console.log(leapyear(1800)); // Expected output: false
console.log(leapyear(100));  // Expected output: false
