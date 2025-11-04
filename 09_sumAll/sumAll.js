const sumAll = function(startNum, endNum) {
    if (startNum < 0 || startNum % 1 !== 0 || typeof endNum !== "number") {
        return "ERROR";
    }

    let total = 0;
    if (startNum < endNum) {
        for (let i = startNum; i <= endNum; i++) {
            total += i;
        }
    } else {
        for (let i = startNum; i >= endNum; i--) {
            total += i;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
