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
        s = this.a + this.b;
        console.log(`Sum: ${s}`);
    }

    this.subtraction = function() {
        s = this.a - this.b;
        console.log(`Subtraction: ${s}`);
    }

    this.multiplication = function() {
        s = this.a * this.b;
        console.log(`Multiplication: ${s}`)
    }

    this.division = function() {
        s = this.a / this.b;
        console.log(`Division: ${s}`)
    }
};

const test = new Calculator(10, 2);

console.log(test.sum());
console.log(test.subtraction());
console.log(test.multiplication());
console.log(test.division());