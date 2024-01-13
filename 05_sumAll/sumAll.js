


const sumAll = function(theFirst, theLast) {
    let numbzo = 1
    let numbzoType = typeof numbzo //couldn't compare with 'number', as js doesn't have number as an 'object', so this way worked
    let first
    let last 
    if (theFirst > theLast){
        first = theLast
        last = theFirst
    }else if(theFirst < theLast){
        first = theFirst
        last = theLast
    }
    

    if (typeof first !== numbzoType || typeof last !== numbzoType || first < 0 || last < 0){
        return 'ERROR'
    }
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
console.log(sumAll(5, 1))
// Do not edit below this line
module.exports = sumAll;
