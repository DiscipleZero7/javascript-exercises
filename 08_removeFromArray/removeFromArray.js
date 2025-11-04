const removeFromArray = function(array, ...elementsToRemove) {
    return array.filter( (element) => {
        for (elementToRemove of elementsToRemove) {
            if (element === elementToRemove) {
                return false;
            }
        }
        return true;
    })
};

// Do not edit below this line
module.exports = removeFromArray;
