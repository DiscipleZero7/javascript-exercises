const palindromes = function (str) {

    const filterStr = str
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();

    const strReverse = filterStr
        .split("")
        .reverse()
        .join("");

    console.log(filterStr)
    console.log(strReverse)
    
    if (filterStr === strReverse) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
