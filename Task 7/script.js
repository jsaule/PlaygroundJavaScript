/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

/* Nelabai supratau, ar reikia grąžinti tik pačius 'values' iš keys, ar grupes (ir 'key' ir 'value'). Jei taip, tai pakeisčiau 'Object.values' į 'Object.entries') */

function showObjectKeys(audi) {
  const result = Object.values(audi);
  return result;
};

console.log(showObjectKeys(audi));