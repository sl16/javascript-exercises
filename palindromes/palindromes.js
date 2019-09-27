const palindromes = function(str) {
    let normalStr = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    let arr = normalStr.split("");
    let reverseArr  = arr.slice().reverse();
    let reverseStr = reverseArr.join("");
    if (reverseStr==normalStr){
        return true;
    } else{
        return false;
    }
}

module.exports = palindromes
