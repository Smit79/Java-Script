let score = "45am";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan
// true => 1; and false => 0
// 1 => true , 0 => false
// "" => false , "somthing " => true

// ******************************************  Operation *************************************** //

let value = 3;
let negvalue = -value;
console.log(negvalue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 2);
// console.log(2 % 2);

// let str1 = "I am ";
// let str2 = "King ";
// console.log(str1 + str2);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"")

let num = 100;
num++;
console.log(num);
++num;
console.log(num);