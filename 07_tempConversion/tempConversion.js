const convertToCelsius = function(tempInF) {
  let tempInFar = tempInF
  console.log(typeof tempInFar)
  let result =  (tempInFar - 32) * 5/9;
  console.log(typeof result)
  result = Number(result.toFixed(1))
  // if (result == 0){
  //   return 0 
  // }
  console.log(typeof result)
  return result
};

const convertToFahrenheit = function(tempInC) {

  //let tempInCel = tempInC
  //console.log(typeof result)
  //let result 
  let result =  (tempInC* 9/5) + 32 ;
  result = Number(result.toFixed(1))
  console.log(typeof result)
  return result

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

console.log(convertToCelsius(32))
console.log(convertToFahrenheit(0))
console.log(7)