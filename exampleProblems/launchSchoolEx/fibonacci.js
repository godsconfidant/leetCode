#  Practice daily till it clicks
function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  return (fibonacci(num - 1) + fibonacci(num - 2))
}


console.log(fibonacci(0)); // =>  0
console.log(fibonacci(1)); // =>  1
console.log(fibonacci(2)); // =>  1
console.log(fibonacci(3)); // =>  2
console.log(fibonacci(4)); // =>  3
console.log(fibonacci(8)); // =>  21
