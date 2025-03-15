//Task_2
const readline = require('readline-sync');

// 1. Mengubah Fahrenheit menjadi Celcius
console.log("1. Convert Fahrenheit to Celcius.");
console.log("------------------------------------------------");
let tempt = parseFloat(readline.question("Input the Temperature in Fahrenheit: "));
console.log("================================================");

// 2. Mengubah Sentimeter ke Kilometer
console.log("2. Convert centimeter to kilometer.");
console.log("------------------------------------------------");
let length = parseFloat(readline.question("Input the Length: "));
console.log("================================================");

// 3. Mengidentifikasi Bilangan Ganjil atau Genap
console.log("3. Identification the number is odd or even.");
console.log("------------------------------------------------");
let number = parseInt(readline.question("Input the Number: "));
console.log("================================================");

// 4. Menghilangkan huruf tertentu pada string
console.log("4. Remove the occurence of given 'search string' from string.");
console.log("------------------------------------------------");
let stringname = readline.question("String Name: ");
let stringgone = readline.question("Sub String: ")
console.log("================================================");

// 5. Mengecek apakah string merupakan kata palindrome atau bukan
console.log("5. Check wheter of string is a palindrome or not");
console.log("------------------------------------------------");
let stringname2 = readline.question("String Name: ");
console.log("================================================");

// Operasi No. 1
function convertToCelcius(n) {
    return (n - 32) * 5 / 9;
}

// Operasi No. 2
function convertToKilometer(n){
    return n / 100000
}

// Operasi No. 3
function isOdd(n){
    return n % 2 == 1;
}

// Operasi No. 4
function removeSubString(str, subStr){
    return str.replace(subStr, '');
}

// Operasi No. 5
function checkPalindrome(str){
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log("Result: ");

// Hasil No. 1
console.log("1. " + tempt + " F = " + convertToCelcius(tempt) + " C");

// Hasil No. 2
console.log("2. " + length + " cm = " + convertToKilometer(length) + " km");

// Hasil No. 3
console.log("3. " + number + " isOdd: " + isOdd(number));

// Hasil No. 4
console.log("4. Result after removing '" + stringgone + "' from '" + stringname + "' : " + removeSubString(stringname, stringgone));

// Hasil No. 5
console.log("5. Is '" + stringname2 + "' a palindrome? " + checkPalindrome(stringname2));
