/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const dataPlace = document.getElementById('output');

const fetchData = () => {
    fetch (ENDPOINT)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((maker) => {

            const brandElement = document.createElement('h2');
            brandElement.innerText = maker.brand;
            brandElement.classList.add('h2');
            dataPlace.appendChild(brandElement);

            const modelsElement = document.createElement('p');
            modelsElement.innerText = maker.models.join(", ");
            modelsElement.classList.add('p');
            dataPlace.appendChild(modelsElement);
            document.getElementById('output').style.fontSize = '0.75rem';
        });
    });
}

fetchData();