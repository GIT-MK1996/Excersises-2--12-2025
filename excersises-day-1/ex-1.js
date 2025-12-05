function convertTemp(value, unit) {
    if (unit === "C") {
        newValue = (value * 9/5) + 32
        return newValue + "F"
    }
}

console.log(convertTemp(20, 'C')) 




function passwordChecker(string) {
  const rules = [
    {test: str => str.length < 6, message: "weak"},
    {test: str => str.length > 6, message: "strong"}
  ];

  
}

console.log(passwordChecker("hello12331"))

function findNumbers(arr) {

   let smallest = Math.min(...arr)
   let largest = Math.max(...arr)

   return {min: smallest, max: largest}

}

console.log(findNumbers([3, 5, 1, 8, -3, 7]))




 function findVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const foundVowels = string  // split maakt string een array met letters 
    .split("")
    .filter(char => vowels.includes(char)) // filter chars en kijk of er een vowel zit 

    const countVowels = foundVowels.length; // tel hoeveel er zijn gevonden 

    return {countVowels, foundVowels}

  
 }
    console.log(findVowels("developer")) 





 function calculateTotal(arr) {
    const total = arr.reduce((acc, curr) => acc += curr);

    return total
 }

 console.log(calculateTotal([15, 33, 10]))





 function atmSim(balance, transactions) {
    return transactions.map(amount => {
        if (amount > balance) {
            return "no funds"
        } else {
            balance -= amount
            return "remaining balance: " + balance 
        }
    })
 }

 console.log(atmSim(100, [20, -10, 50, -30]))   



 function multiplicationTable(num) {
    const multi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return multi.map(i => i * num);

    
 }

 console.log(multiplicationTable(5))


function countValue(arr, value) {
    return arr.filter(x => x === value).length
}


console.log(countValue([1, 4, 5, 3, 7, 3], 4)); 


function parkingfeeCalc(hours) {
    let fee = 0;

    for (let i = 1; i <= hours; i++) {
        if (i === 1) {
            fee += 4
        } else {
            fee += 2 
        }

        if (fee >= 20) {
            fee = 20;
        }
    }

     return fee

}

console.log(parkingfeeCalc(5))


function reverseString(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return reverse
}




