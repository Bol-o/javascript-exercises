


const sumAll = function(first, last) {
    let array = []
    let theSum = 0
    if (first < last){
       array.push(first)
       
      }  
         for (let i = 0; i < array.length; i++){
            if (array[i] == last){
            
                
            }
            if (array[i] < last)
                
                array.push(array[i]+1)
                 
            
             }
    
             for (let i = 0; i < array.length; i++){
                theSum = theSum + array[i]
                
             }
             
        
             return theSum
             return array

};
console.log(sumAll(1,6))
// Do not edit below this line
module.exports = sumAll;
