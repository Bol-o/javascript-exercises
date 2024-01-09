const text = '123 count'

const reverseString = function(text) {
    let newerText = ''; // moved this from outside the function and then last 4 tests worked    
    for (let i = text.length-1; i > -1; i--){
        //newText.push(text[i]) 

        newerText += text[i]
         
    }
    text = newerText
return text
};
console.log(reverseString(text))

// Do not edit below this line
module.exports = reverseString;
