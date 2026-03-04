class Sportsman {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    workout() {
        console.log("workout")
    }

    toString() {
        return `Sportsman{name=${this.name}, year=${this.year}}`
    }
}

const sportsman1 = new Sportsman("jakub", 1990);

sportsman1.workout();

class Runner extends Sportsman {
    constructor(name, year, speed) {
        super(name, year)
        this.speed = speed;
    }

    workout() {
        //console.log(this.toString())
        console.log(`${this.name} is running at ${this.speed} km/h ` )
    }
}




const runner1 = new Runner("Femke Bol", 2002, 15);
runner1.workout()

const runner2 = new Runner("Wim Hof", 1970, 10);
runner2.workout()


class Swimmer extends Sportsman {
    constructor(name, year, length) {
        super(name, year);
        this.length = length;
    }

    workout() {
        console.log(`${this.name} swam for ${this.length} meters`)
    }
}

const swimmer1 = new Swimmer("michael phelps", 1990, 400);
swimmer1.workout();

const swimmer2 = new Swimmer("john brooks", 2001, 350);
swimmer2.workout();

const athletes = [
    sportsman1, 
    runner1, 
    runner2, 
    swimmer1, 
    swimmer2
]


function callWorkoutOn(athletes) {
    console.log("Athletes...")
  for (let index = 0; index < athletes.length; index++) {
    athletes[index].workout()
  }
}

callWorkoutOn(athletes)

const athletesFiltered = 
athletes.filter(a=> a.year<2000)

callWorkoutOn(athletesFiltered)

console.log("Mapped...")
const athletesMap = 
athletes.map(a => a.year > 2000 ? a.workout() : undefined)


let matrix = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]

console.log(matrix[2][1])


let updated = []

for (let row = 0; row < matrix.length; row++) {

    updated[row] = [];

    for (let column = 0; column < matrix[row].length; column++) {

        let originalValue = matrix[row][column];

        if (originalValue % 2 == 0) {
            updated[row][column] = originalValue * 2;
        } else {
            updated[row][column] = originalValue;
        }
        console.log(`[${row}, ${column}] = ${updated[row][column]}`)
        // originalValue = ? 
        // is it even ? 
        // double it if so, otherwise store the original
    }
}

let expected = [
    [1, 4, 3], 
    [8, 5, 12], 
    [7, 16, 9]
]

console.log(updated == expected)






class Cyclist extends Sportsman {
    constructor(name, year, candace) {
        super(name, year)
        this.candace = candace;
    }

    workout() {
        console.log(`${this.name} is cycling with candace ${this.candace}`)
    }

    getPerformanceScore() {
        const score = this.candace * 2;
        return score
    }
}

const cyclist1 = new Cyclist("name", 1995, 11);

cyclist1.workout()
console.log(cyclist1.getPerformanceScore()) 


class Coach {
    constructor(name) {
        this.name = name;
        this.team = []
    }

    addAthlete(athlete) {
        this.team.push(athlete);
    }

    removeAthlete(name) {
       this.team = this.team.filter(athlete => athlete.name !== name);
    }

   trainTeam() {
    this.team.forEach(athlete => {
        athlete.workout();
    });
}
}

const coach1 = new Coach("John Doe");

coach1.addAthlete(runner1);
coach1.addAthlete(swimmer1);
coach1.addAthlete(cyclist1);

coach1.trainTeam()

console.log(coach1)




/* Sportsman class 4-3-2026 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}`
    }

}


class Player extends Person {
    constructor(name, age, position, number) {
        super(name, age)
        this.position = position;
        this.number = number; 
    }

    play() {
        return `${this.name} is playing as a ${this.position}`;
    }

    getAllInfo() {
        return `${super.getInfo()}, Position: ${this.position}, Number: ${this.number}`;
    }


    train() {
        return `${this.name} is training hard`;
    }
}


class Goalkeeper extends Player {
    constructor(name, age, position, number, cleanSheets) {
        super(name, age, position, number)
        this.cleanSheets = cleanSheets;
    }

    play() {
        return `${this.name} is guarding the goal!`
    }
}


const person1 = new Person("messi", 37);
const player1 = new Player("r9", 42, "striker", 9);
const goalkeeper1 = new Goalkeeper("buffon", 40, "goalkeeper", 1, 130);

console.log(player1.train());
console.log(player1.getAllInfo());
console.log(person1.getInfo());
console.log(goalkeeper1.play());