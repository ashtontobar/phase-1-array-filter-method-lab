// Code your solution here

// *First Function*
//findMatching- This function takes an array of drivers' names and a string as
//arguments, and returns the matching list of drivers.
//The function should be case insensitive.

// const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"]

// *PASSING*

function findMatching(drivers, string) {
    let result = drivers.filter(driver => driver === string || driver === string.toLowerCase())
    return result
}


//Second Attempts - Is returning some of the values in the array, but not only in the
// first test. 
// function findMatching(array) {
//   const names = array.filter((word) => word.length > 0);
//   return names;
// }

//First Attempt - Passes the 3rd test
// function findMatching(drivers) {
//     console.log(drivers.filter(drivers => drivers.name))
//     return drivers.filter(drivers => drivers.name)
// }
// findMatching(drivers)

// *Second Function*
//fuzzyMatch - This function takes an array of drivers' names and a string as
//arguments for querying the array, and returns all drivers whose names begin with
//the provided letters.

function fuzzyMatch(drivers, string) {
    let firstLetter = drivers.filter(driver => driver.startsWith(string))
    return firstLetter;
}

// *Third Function*
//matchName - This function takes an array of driver objects and a string as arguments.
//Each driver object has two properties: name and hometown.
//The function should return each element whose name property matches the provided
//string argument.

function matchName(drivers, string) {
    let nameOfDriver = drivers.filter(driver => driver.name === string)
    return nameOfDriver
}
