const sumAll = function(num1,num2) {
    let totalSum=0;
    
    //IF ARGUMENTS NEGATIVE NUMBERS RETURN ERROR
    if ((num1<0) || (num2<0)){
        return "ERROR";
    }

    //IF ARGUMENTS NOT INTEGERS RETURN ERROR
    if ((Number.isInteger(num1)==false) || (Number.isInteger(num2)==false)){
        return "ERROR";
    }

    //COMPARES WHICH NUMBER IS LOWER
    min=Math.min(num1,num2);
    max=Math.max(num1,num2);

    for (let i=min;i<=max;i++){
        totalSum+=i;
    }
    return totalSum;
}

module.exports = sumAll
