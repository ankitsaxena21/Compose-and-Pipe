const add2 = x => x + 2;
const subtract1 = x => x - 1;
const multiply10 = x => x * 10;
const divide = (a, b) => b/a;

const res = add2(subtract1(multiply10(5)));

// const compose = function(...fns) {
//   return function(val) {
//     return fns.reduceRight((prev, fn) => fn(prev), val)
//   }
// }

const pipe = (...fns) => val => fns.reduce((prev, fn) => fn(prev), val);

function divide2(x) { 
    return divide(2, x)
}

const newRes = _.flow(multiply10, subtract1, add2, divide2)(5);

console.log(res);

console.log(newRes);
