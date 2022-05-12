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

    sum = a + b;
    substraction = a - b;
    multiplication = a * b;
    division = a/b;
    
    return {
        'sum': sum,
        'substraction': substraction,
        'multiplication': multiplication,
        'division': division
    };
};

const test = new Calculator(10, 2);
console.log(test);