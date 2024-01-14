const leapYears = function(year) {
if(Number.isInteger((year)/400) === true ){
    return true 
}else if (Number.isInteger((year)/4) === true && Number.isInteger((year)/100) === false){
    return true
}
else {
    return false
}


};
console.log(leapYears(34992))
// Do not edit below this line
module.exports = leapYears;
