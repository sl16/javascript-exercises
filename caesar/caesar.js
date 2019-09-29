const caesar = function(msg, shiftBy) {
    let arr = Array.from(msg);
    // IF SHIFT IS NEGATIVE CONVERT INTO POSITIVE
    if (shiftBy<0){
        shiftBy = 26 + (shiftBy % 26);
    }
    for (let i = 0; i < arr.length; i++){
        // IF ARAY ITEM IS A LETTER SHIFT IT
        if (arr[i].toUpperCase() != arr[i].toLowerCase()){
            // LOWER CASE LETTERS ONLY LOOP IN LOWER CASE
            if (arr[i] == arr[i].toLowerCase()){
                arr[i] = (((arr[i].charCodeAt(0) - 97 + shiftBy) %26 ) + 97);
            // UPPER CASE LETTERS ONLY LOOP IN UPPER CASE
            } else if (arr[i] == arr[i].toUpperCase()){
                arr[i] = (((arr[i].charCodeAt(0) - 65 + shiftBy) %26 ) + 65);
            }
            // TRANSFORM BACK INTO LETTER
            arr[i] = String.fromCharCode(arr[i]);
        // IF ARRAY ITEM NOT LETTER CONTINUE
        } else continue;
    }
    // RETURN JOINED STRING
    return arr.join("");
}

module.exports = caesar
