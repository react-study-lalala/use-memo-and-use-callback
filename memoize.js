// const factorial = function(number) {
//   if (number > 0) {
//     return number * factorial(number - 1);
//   } else {
//     return 1;
//   }
// };

const factorial = (function() {
  const save = {};
  const fact = function(number) {
    if (number > 0) {
      const saved = save[number - 1] || fact(number - 1);
      const result = number * saved;
      save[number] = result;
      return result;
    } else {
      return 1;
    }
  };
  return fact;
})();

console.time();
console.log(factorial(10));
console.timeEnd();
