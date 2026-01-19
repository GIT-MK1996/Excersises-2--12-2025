/*1. Player Profile

Goal: Practice constructor & instance properties
Create a Player class that:

Has properties: name, position, number

Uses a constructor to set them

Has a method getInfo() that returns a formatted string:

"Lionel Messi plays as a Forward and wears number 10." */

// data types: 2345 34.33453 true/false  "hello" {...} [], ... new Date();  
// user data types => classes


/*
101010110 // (+): 1s (50s), 1KB (50MB) (-): difficult to maintain (find bugs, change, update, ..., error prone)
24, false, "hello"
let x, y, z 
class Person, Employee, Player, ...
...

*/

class PlayerProfile {
    constructor(name, position, number) {
        this._name = name;
        this.position = position; // calls the setter defined later
        this._number = number;
    }

    set position(position) {       
        const firstUpperCaseLetter = position[0].toUpperCase(); 
        const restLowerCase = position.substring(1).toLowerCase();
        this._position =  firstUpperCaseLetter + restLowerCase;
    }

    getInfo() {
        return  `${this._name} plays as a ${this._position} and wears number ${this._number}.`    
    }

}

const messi = new PlayerProfile("Lionel Messi", "foRwaRd", 10);
console.log(messi.getInfo());

const expectedOutput = "Lionel Messi plays as a Forward and wears number 10.";

if (expectedOutput === messi.getInfo()) {
    console.log("YES!!!");
} else {
    console.log("NO!!!");
}


class Player1 {
    constructor(name1, position, number) {
        this._name = name1;
        this._position = position;
        this._number = number;

    }

    get name() {
        return this._name;
    }
    set name(name2) {
        validateInput(name2);

        this._name = name2;

    }

    sayHi(greetingWord) {
        return greetingWord + ", " + this._name + '!';
    }

    validate(input) {
        // if name ~number => error
    }

    doSomethingSmart() {
        // this._name + this._position...
        /*
        name? // no
        this._name // yes
        */
    }
    
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    sayName() {
        return this._name;
    }
}


const john = new Player1("John", "goalkeeper", "99");
const adam = new Player1("Adam", "forward", "4");
const bob = new Player1("bob", "defense", "55");
console.log(john.sayHi("hello"));
console.log(john.sayHi("hi"));
console.log(adam.sayHi("hi"));
console.log(bob.sayHi("hi"));

const jane = {
    _name: "Jane", 
    _position: "housewife", 
    _number: 0,
    sayHi2: function(grWord) {
        return this._name + ', ' + grWord
    }
}
const alice1 = {
    _name: "Jane", 
    _surname: "doe",
    _position: "housewife", 
    _number: 0,
    sayHi2: function(grWord) {
        return this._name + ', ' + grWord
    }
}
const mary = {
    _name: "Jane", 
    _position: "housewife", 
    _number: 0,
    sayHi2: function(grWord) {
        return this._name + ', ' + grWord
    }
}

console.log(jane._name);
console.log(john._name);

console.log(jane.sayHi('hi'));
console.log(john.sayHi("ahoj"));


let city = "arnhem"
console.log(city.toUpperCase());

console.log(42);  // int
// float
// boolean




/*
// values
42 "hello" true 3.14


43 + 42 - 3.14 = ? 
43 + 42 - 3.14 = ? 
42 + 42 - 3.14 = ? 
43 + 42 - 3.14 = ? 

let x = 43; 

x + x - 3.14 = ?
x + x - 3.14 = ?
x + x - 3.14 = ?
x + x - 3.14 = ?
x + x - 3.14 = ?
x + x - 3.14 = ?


x =10; // 10
function plusOne(x) {
    x = x + 1;
    return x
}


x =  plusOne(x); // x <- 11 (10+1)
// x == 11
plusOne(x); // nothing <- 12 <- (11 + 1)
plusOne(x); // nothing <- 12 <- (11 + 1)
x = plusOne(x); // nothing <- 12 <- (11 + 1)
plusOne(x); // nothing <- 12 <- (11 + 1)
x == 12

// variable
*/




/*
int  42
boolean true false
string "hello", "bye", ...
Player john 
"hello".length
*/
john._name = "99";
john._name = 'bilboa'
john.name = "Bob"
console.log(john.name);
john.getName();
john.setName('Cyril')

console.log(john); 
console.log(john.getName());
console.log(john.setName("David"));
console.log(john); 


let _myVar = 10; 
let myVar = 20; 
function plus(a, b) {
    return a + b;
}
console.log(plus(_myVar, myVar));

/*
2. Team With Roster Count

Goal: Practice getters
Create a Team class that:

Has properties: name, players (array of player names)

Has a getter playerCount that returns how many players are in the team

Example:

team.playerCount // 5 
*/
/*
2. Team With Roster Count

Goal: Practice getters
Create a Team class that:

Has properties: name, players (array of player names)

Has a getter playerCount that returns how many players 
are in the team

Example:

team.playerCount // 5 
*/

class Team {
    constructor(name, players) {
        this._name = name;
        this._players = players;

        /*
        if (players) {
        this.playerCount0 = players.length; 
        }
        */
    }   

    get playerCount() {
        if (!this._players) {
            return 0; 
        }
        return this._players.length;
    }
}


playerNames = [
  'Alice', 
  'Bob', 
  'Cyril', 
  'David'
];
//const fcBarcelona = new Team("FC Barcelona", playerNames)
const fcBarcelona = new Team("FC Barcelona", null)

//console.log(fcBarcelona.playerCount0)
console.log(fcBarcelona.playerCount)



/*
3. Match Score Tracker

Goal: Practice methods that update state
Create a Match class that:

Stores homeTeam, awayTeam

Stores homeGoals, awayGoals (start at 0)

Has methods:

goalHome()

goalAway()

getScore() → "Barcelona 2 : 1 Madrid"
*/


class Match {
    constructor(homeTeam, awayTeam, homeGoals, awayGoals) {
        this._homeTeam = homeTeam;
        this._awayTeam = awayTeam;
        this._homeGoals = homeGoals;
        this._awayGoals= awayGoals;
    }


    get goalHome() {
        return this._homeGoals;
    }

     get goalAway() {
        return this._awayGoals;
    }

    getScore() {
        return `${this._homeTeam} ${this._homeGoals} : ${this._awayGoals} ${this._awayTeam}`
    }
}

const match1 = new Match("Arnhem", "Nijmegen", 2, 1); 
console.log(match1.goalHome == 2);
console.log(match1.goalAway == 1);
console.log("Arnhem 2 : 1 Nijmegen" === match1.getScore());




/*
4. Player Energy (Getter + Setter)

Goal: Practice setters with validation
Create a Player class with:

Private-like property _energy (0–100)

Getter energy

Setter energy that:

Prevents values below 0 or above 100

Method run() that reduces energy by 10
*/

class Player {
    constructor(basicEnergy) {
        this._energy = 0;
        this.energy = basicEnergy
    }

    get energy() {
        return this._energy
    }

    set energy(value) {
        if (value < 0 || value > 100) {
            return
        }
        
        this._energy = value
    }

    run() {
        this._energy = this._energy - 10;
    }
}

const alice = new Player(80); 
console.log(80 === alice.energy); 
alice.energy = 90;
console.log(90 === alice.energy); 
alice.run(); 
console.log(80 === alice.energy); 
alice.run(); 
console.log(70 === alice.energy); 
alice.run();
console.log(60 === alice.energy); 
alice.run();
console.log(50 === alice.energy); 
alice.energh = -100
console.log(50 === alice.energy); 
alice.energy = 500
console.log(50 === alice.energy); 


/*
5. Stadium Capacity Control

Goal: Practice setters with rules
Create a Stadium class:

Properties: name, _capacity

Setter capacity:

Cannot be set below 1,000

Cannot exceed 100,000

Getter capacity

Method describe() → "Camp Nou has a capacity of 99,354 spectators."

*/

class Stadium {
    constructor(name, capacity) {
        this._name = name;
        this.capacity = capacity; 
    }

    set capacity(value) {
        if (value < 1000 || value > 100000) {
            return;
        }
        this._capacity = value;
    }

    get capacity() {
        return this._capacity;
    }

    describe() {
        return `${this._name} has a capacity of ${this._capacity} spectators.`;
    }
}





/*




6. Soccer Ball Condition

Goal: Practice internal state changes
Create a Ball class:

Property condition ("new", "used", "damaged")

Method kick():

Changes condition from "new" → "used"

Method hitPost():

Changes condition to "damaged"

Getter isUsable → true unless "damaged"

*/

/*

7. Training Session

Goal: Practice multiple methods
Create a TrainingSession class:

Properties: duration (minutes), intensity ("low", "medium", "high")

Method calculateFatigue() that returns a number based on:

Duration

Intensity multiplier

Method summary() describing the session

*/

class TrainingSession {
    constructor(duration, intensity) {
        this.setDuration(duration)
        this.setIntensity(intensity)
    }


    setDuration(duration) {
        this.duration = duration
    }

    setIntensity(intensity) {
        this.intensity = intensity
    }

    calculateFatigue() {

        // d = input duration
        let d = this.duration

   
        // i = translate input intensity into a number 
        // we'll assume that "low" is 1, "medium" is 2 and "high" is 3
        let i = this.intensity
        
        if(i === "low") {
            i = 1
        } else if(i === "medium" ) {
            i = 2
        } else {
            i = 3
        }

        // fatigue = d * i
        let fatigue = d * i

        return fatigue
    }
}



console.log(10 === new TrainingSession(10, "low").calculateFatigue());
console.log(20 === new TrainingSession(20, "low").calculateFatigue());
console.log(20 === new TrainingSession(10, "medium").calculateFatigue());
console.log(40 === new TrainingSession(20, "medium").calculateFatigue());
console.log(30 === new TrainingSession(10, "high").calculateFatigue());
console.log(60 === new TrainingSession(20, "high").calculateFatigue());

/*

8. Referee Card System

Goal: Practice logic inside methods
Create a Referee class:

Property: yellowCards (object: { playerName: count })

Method giveYellow(playerName)

Method giveRed(playerName):

Automatically gives red if player has 2 yellows

Method getCardStatus(playerName)

9. Transfer Value Calculator

Goal: Practice getters that compute values
Create a Player class:

Properties: age, skillLevel (1–100)

Getter marketValue:

Higher skill = higher value

Younger age = higher value

No setter for market value (read-only)

10. Match Clock

Goal: Practice encapsulation and time control
Create a MatchClock class:

Private-like property _minute (starts at 0)

Method tick() → increases minute by 1

Getter minute

Getter half:

"First Half" (0–45)

"Second Half" (46–90)

"Full Time" (90+)

Method reset() */
