const removeFromArray = function(array, ...args) {

console.log(array)
console.log(array.length)


    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < args.length; j++){
        
        if (array[i] === args[j] ){        
        array.splice(i, 1) 
        i--  
    }
}
 
    }
    return array
};
console.log(removeFromArray([1,2,1,3,1,4], 1, 2))

module.exports = removeFromArray;
