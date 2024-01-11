const removeFromArray = function(array, ...args) {
//add a loop here that takes the arguments entered above and pushes them into an array, and then run the below loops
//to compare items in the arrays, as the splice() works not as expected,some the args are actually treated as
//indexes in the splice() i think-update: nah, added the i--
console.log(array)
console.log(array.length)

//let aRRay = ''
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < args.length; j++){
        
        if (array[i] === args[j] ){        
        array.splice(i, 1) 
        i--  //added it cause the i++ was taking it one index ahead, and I needed...
        //...the loop to start at index 0 each time, cause the splice was getting rid of...
        //...the first index if it was in args it was cut off and i-- would reset it...
        //...to index zero for further reassess, if it wasn't matching then the second...
        //...loop would stop and first loop's i++ would then kick in to go to the next...
        //...index to compare again
        //console.log(array)    
        }
    }
}
 
console.log('array after:' + '['+array 
+ ']')
return ''
};
console.log(removeFromArray([2,1,1,1,1,1,1,1,1,1],1))
//console.log(args)
//console.log(array)
// Do not edit below this line
module.exports = removeFromArray;
