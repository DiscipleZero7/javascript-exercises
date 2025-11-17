const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    people.forEach((e) => {
        if (!e.hasOwnProperty("yearOfDeath")) {
            e.yearOfDeath = currentYear;
        }
    })

    people.sort((a, b) => {

        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;

        return aAge < bAge ? 1 : -1;
    })

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
