/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  let sum = 0;
  let fibArr = [];
  let filteredArr = [];
  let a = 0;
  let b = 1;
  let f = 1;
  for (let i = 2; i <= maxFibValue; i++) {
    f = a + b;
    a = b;
    b = f;
    fibArr.push(f)
  }
  for (let z = 0; z <= maxFibValue; z++) {
    if (fibArr[z] <= maxFibValue) {
      filteredArr.push(fibArr[z]);
    }
  }
  for (let t = 0; t < filteredArr.length; t++) {
    if (filteredArr[t] % 2 === 0) {
      sum += filteredArr[t]
    }
  } return sum
}
// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};


function fib(maxFibValue){
  var a = 0;
  var b = 1;
  var f = 1;
   while (i <= maxFibValue) {
    f = a + b;
    a = b;
    b = f;
  }



}
