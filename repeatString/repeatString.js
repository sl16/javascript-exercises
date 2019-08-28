const repeatString = function(str,num) {
    let together="";
    if (num<0){
        together="ERROR";
    }
    for (let i=0;i<num;i++){
        together+=str;
    }
    return together;
}

module.exports = repeatString
