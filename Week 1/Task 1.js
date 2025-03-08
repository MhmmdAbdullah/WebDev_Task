const readline = require('readline-sync');

// 1. Menghitung luas persegi panjang
console.log("1. Find Area of Rectangle.");
console.log("==========================");
let length = parseInt(readline.question("Length: "));
let width = parseInt(readline.question("Width: "));
console.log("==========================");

// 2. Menghitung diameter, keliling, dan luas lingkaran
console.log("2. Find Diameter, Circumference and Area of a Circle.");
console.log("==========================");
let radius = parseFloat(readline.question("Radius: "));
console.log("==========================");

// 3. Menghitung sudut ketiga segitiga
console.log("3. Find Angles of Triangle if Two Angles are Given.");
console.log("==========================");
let angle1 = parseInt(readline.question("Angle 1: "));
let angle2 = parseInt(readline.question("Angle 2: "));
console.log("==========================");

// 4. Menghitung selisih hari antara dua tanggal
console.log("4. Find Difference Between Dates in Days.");
console.log("==========================");
let date1 = readline.question("Date 1 (YYYY-MM-DD): ");
let date2 = readline.question("Date 2 (YYYY-MM-DD): ");
console.log("==========================");

// 5. Mengambil inisial nama
console.log("5. Print Your Name Initial in Uppercase.");
console.log("==========================");
let fullName = readline.question("Full Name: ");
console.log("==========================");

// Menampilkan hasil
console.log("Result:");

// 1. Area of Rectangle
let areaOfRectangle = length * width;
console.log("1. Area of Rectangle: " + areaOfRectangle);

// 2. Diameter, Circumference, and Area of Circle
let diameter = 2 * radius;
let circumference = Math.PI * diameter;
let areaOfCircle = Math.PI * radius * radius;

console.log("2. a. Diameter: " + diameter);
console.log("   b. Circumference: " + circumference);
console.log("   c. Area of Circle: " + areaOfCircle);

// 3. Third Angle of Triangle
let angle3 = 180 - angle1 - angle2;
console.log("3. Angle 3: " + angle3);

// 4. Difference in Days
let dateObj1 = new Date(date1);
let dateObj2 = new Date(date2);
let timeDiff = Math.abs(dateObj2 - dateObj1);
let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
console.log("4. Difference in Days: " + dayDiff);

// 5. Name Initials
let initials = fullName
    .split(" ")
    .filter(word => word.length > 0)
    .map(word => word[0].toUpperCase())
    .join("");

console.log("5. Name Initials: " + initials);
