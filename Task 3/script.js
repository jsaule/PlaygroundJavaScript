/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector('#btn').addEventListener('click', () => {
    const hideMessage = () => {
        const message = document.getElementById('message');
        message.style.display = 'none';
        };
        
    hideMessage();

    const dataPlace = document.getElementById('output');

    const fetchData = () => {
    fetch (ENDPOINT)
        .then((res) => res.json())
        .then((data) => {
            data.forEach((user) => {

            const loginElement = document.createElement('h3');
            loginElement.innerText = user.login;
            loginElement.classList.add('h3');
            console.log(loginElement);
            dataPlace.appendChild(loginElement);

            const avatarElement = document.createElement('p');
            avatarElement.innerText = user.avatar_url;
            avatarElement.classList.add('p');
            console.log(avatarElement);
            dataPlace.appendChild(avatarElement);
        });
    });
}

fetchData();

});
