/**
 * A+B
 * https://www.acmicpc.net/problem/1000
 */

let fs = require('fs');
let input = fs.readFileSync('1000.txt').toString().split(' ');

console.log(parseInt(input[0]) + parseInt(input[1]));