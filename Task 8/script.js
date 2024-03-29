/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
    this.a = a;
    this.b = b;

    this.sum = function() {
        return (`Sum: ${this.a + this.b}`);
    }

    this.subtraction = function() {
        return (`Subtraction: ${this.a - this.b}`);
    }

    this.multiplication = function() {
        return (`Multiplication: ${this.a * this.b}`)
    }

    this.division = function() {
        return (`Division: ${this.a / this.b}`)
    }
};

const test = new Calculator(10, 2);
console.log(test);
console.log(test.sum());
console.log(test.subtraction());
console.log(test.multiplication());
console.log(test.division());