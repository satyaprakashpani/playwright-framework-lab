/* Divisible by 4 AND not divisible by 100 → Leap year
OR divisible by 400 → Leap year
Else → Not a leap year */

let year = 2010;

if (year % 4 === 0 & year % 100 !== 0 | year % 400 === 0)
    console.log(year + " : Leap Year");
else
    console.log(year + " : Not Leap year");