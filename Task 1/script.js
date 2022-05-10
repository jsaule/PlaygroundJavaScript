/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
console.log('start');

const button = document.querySelector('#submit-btn');
button.addEventListener('click', function() {
    const input = document.querySelector('#search');
    const kg = input.value;
    const lb = Math.round((kg * 2.2046)*100)/100 + ' ' + 'lb';
    const g = Math.round((kg / 0.0010000)*100)/100 + ' ' + 'g';
    const oz = Math.round((kg * 35.274)*100)/100 + ' ' + 'oz';
    const output = document.querySelector('#output');
    output.innerHTML = lb + g + oz;
    console.log(lb, g, oz);
});