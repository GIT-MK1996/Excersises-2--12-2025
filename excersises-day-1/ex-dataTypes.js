function dataTypeChecker(value) {
    if (value === null) {
        return "value is null"
    }

    if (Array.isArray(value)) {
        return "arr"
    }

   return typeof(value)


}
console.log(dataTypeChecker(8))
console.log(dataTypeChecker(8.5))
console.log(dataTypeChecker("helllo"))
console.log(dataTypeChecker(false))
console.log(dataTypeChecker(null))
console.log(dataTypeChecker(undefined))
console.log(dataTypeChecker([]))
console.log(dataTypeChecker(new Date()))
console.log(dataTypeChecker(function() {}))



/*number

string

boolean

null

undefined

array

object

function
*/


function stringManipulator(str) {
    let noSpace = str.trim();

    let words = noSpace.split(" ")

    let newWords = [];

    for (let i = 0; i < words.length; i++) {
       const word = words[i]
       if (word === "") {
        continue
       }
       console.log(word)
       const newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
       newWords.push(newWord);
    }

    return newWords;


}

console.log(stringManipulator("john doe"))
console.log(stringManipulator("JOhn dOe"))
console.log(stringManipulator("joHn  doE"))
console.log(stringManipulator("johE     doE"))
console.log(stringManipulator("jOhn dOe "))


// xaxbxc.split("x") = [a,b,c]

// xxaxxbxxc.split("x") = ['',a,'',b',',c]



/*Write a function that takes an array of numbers and returns the sum, ignoring any non-number values.
Example:
sum([1, "2", 3, null, 4]) → 8
Hint:
Use typeof === "number" inside a loop or reduce.*/

function sumArr(arr) {
    arr.reduce((acc, curr) => acc += curr)
}


function dataTypeChecker(value) {
    if (value === null) {
        return null;
    }

    if (Array.isArray(value)) {
        return 'array';
    }

    return typeof value;
}

console.log(dataTypeChecker([]))


function stringManipulator(str) {
    str = str.trim(); // trim spaties weg 
    
    let words = str.split(" "); // split woorden 

    let newWords = []; // maak lege arr voor nieuwe woorden

    for (let i = 0; i < words.length; i ++) { 
        let word = words[i]; 

        let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

        newWords.push(newWord);

    }

    return newWords.join(" ")
}

console.log(stringManipulator("john doe"))



/*Write a function that takes an array of numbers and returns the sum, ignoring any non-number values.
Example:
sum([1, "2", 3, null, 4]) → 8
Hint:
Use typeof === "number" inside a loop or reduce.*/

function sumArr(arr) {
   return arr.reduce((acc, curr) => acc += curr, 0)
}

console.log(sumArr([1,3,4,5]))


/* 4. Arrays: Unique Values

Task:
Write a function that returns a new array containing only unique values from the original.
Example:
unique([1,2,2,3,1]) → [1,2,3]
Hint:
You can use either a loop or new Set().
*/

function uniqueArr(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (newArr.includes(num)) {
            continue
        } else {
            newArr.push(num)
        }
    }

    return newArr;
}


console.log(uniqueArr([]))
console.log(uniqueArr([1,1,3,4,3]))
console.log(uniqueArr([1,2,3]))
console.log(uniqueArr([1,5,6,6,5,1]))
console.log(uniqueArr([]))
console.log(uniqueArr([]))



function uniqueArr(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        // check: zit arr[i] NIET in newArr?
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]); // zo ja → voeg toe
        }
    }

    return newArr;
}

console.log(uniqueArr([1, 2, 2, 3, 1]));


console.log(uniqueArr([1, 3, 3, 1, 2, 5]))


/* 5. Arrays: Custom Filter

Task:
Implement your own filter function named myFilter(array, callback) that behaves like Array.prototype.filter.
Hint:
Loop through items and push the item when callback(item) is true.
*/

function myFilter(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i ++) {
        
    }
}


/* 6. Date: Calculate Age

Task:
Write a function calculateAge(birthDateString) that returns the person's age in years.
Example input: "1998-04-10"
Hint:
Use new Date(), subtract timestamps, convert to years.

*/

function calculateAge(bdString) {
    const birthDate = new Date(bdString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear;

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    today.getDate()

    if (monthDiff < 0 || monthDiff === 0 && dayDiff < 0) {
        age--;
    }

    return age
}


/* 7. Date: Add Days

Task:
Create a function addDays(date, days) that returns a new Date shifted by a given number of days.
Hint:
Dates can be shifted using milliseconds: days * 24 * 60 * 60 * 1000.
*/


function addDays(date, days) {
    const originalDate = new Date(date);

    let dayMillie = 24 * 60 * 60 * 1000;

    const newTime = originalDate.getTime() + (days * dayMillie)

    return new Date(newTime);

    
}

/*8. Map: Count Word Occurrences

Task:
Given a string, count how many times each word appears. Return a Map where:

key = word

value = count

Example:
"one two two three two" → Map { one → 1, two → 3, three → 1 }
Hint:
Split on spaces, iterate, increment.

 */

function countWords(str) {
    const words = str.split(" ");
    const counts = new Map();


    words.map(word => {
        let current = counts.get(word) || 0;

        counts.set(word, current + 1 );
    })

    return counts;
}


/*9. Set: Intersection of Two Arrays

Task:
Write a function that returns the intersection between two arrays.
Example:
intersection([1,2,3], [2,3,4]) → [2,3]
Hint:
Convert one array to a Set, then filter the other.*/


function intersection(arr1, arr2) {
    const set2 = new Set(arr2);   

    return arr1.filter(item => set2.has(item));
}

console.log(intersection([1, 2, 3], [2, 3, 4])); 


/*Collections: Group Objects by Key

Task:
Given an array of objects, group them by a given key using a Map.
Example:
Input:
[ {type: "fruit", name: "apple"}, {type: "vegetable", name: "carrot"}, {type: "fruit", name: "banana"} ] 
Output:
Map { "fruit" → [ {…}, {…} ], "vegetable" → [ {…} ] } 
Hint:
Check if key exists in the Map; if not, create a new array.
If you'd like, I can also provide solutions, unit tests, or more advanced exercises (async, classes, DOM, algorithms, etc).

*/


function groupBy(arr, key) {
    const groups = new Map();


    arr.forEach(item => {
        if (groups.has(item[key])) {
            groups.get(item[key]).push(item)
        } else {
            groups.set(item[key], [item]);
        }
    })

    return groups
}
