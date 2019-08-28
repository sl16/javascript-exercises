const reverseString = function(str) {
    let splitStr=str.split("");
    let reverseSplitStr=splitStr.reverse();
    let reverseStr=reverseSplitStr.join("");
    return reverseStr;
}

module.exports = reverseString
