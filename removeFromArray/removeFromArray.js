const removeFromArray = function() {
    // FIRST ARGUMENT IS ARRAY
    let myArray=arguments[0];
    // LOOP THROUGH EVERY ARGUMENT BESIDES THE FIRST ONE
    for (let i=1;i<=((arguments.length)-1);i++){
            // SEARCH FOR ARRAY INDEX OF ARGUMENT
            let index = myArray.indexOf(arguments[i])
                // IF ARGUMENT IS IN ARRAY, DELETE IT
                // OTHERWISE SKIP AND CONTINUE
                if (index!=(-1)){
                    myArray.splice(index,1);
                } else continue;            
    }
    return myArray;
}

module.exports = removeFromArray
