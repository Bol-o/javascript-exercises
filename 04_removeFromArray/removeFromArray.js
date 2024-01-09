const removeFromArray = function(array, ...arguments) {
//add a loop here that takes the arguments entered above and pushes them into an array, and then run the below loops
//to compare items in the arrays, as the splice() works not as expected,some the args are actually treated as
//indexes in the splice() i think
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < arguments.length; j++){
        if (array[i] === arguments[j] ){
            array.splice(i)
        }
    }
    }
    return array
};
console.log(removeFromArray([1,2,3], 2))
// Do not edit below this line
module.exports = removeFromArray;
