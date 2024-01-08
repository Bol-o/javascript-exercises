

const reverseString = function(text) {
    let newerText = ''; // moved this from outside the function and then last 4 tests worked
    for (let i = text.length-1; i > -1; i--){
        //newText.push(text[i]) 
        
        newerText += text[i]
         
    }
return newerText
};
//console.log(reverseString('123! abc!'))

// Do not edit below this line
module.exports = reverseString;
