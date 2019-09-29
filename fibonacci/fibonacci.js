const fibonacci = function(specMember) {
    if (specMember<0){
        return "OOPS";
    }
    let sequence = [1,1];
    for (let i = 2;i < specMember; i++){
        sequence.push(sequence[sequence.length-2]+sequence[sequence.length-1]);
    }
    return sequence[specMember-1];
}

module.exports = fibonacci
