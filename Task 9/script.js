/* ------------------------------ TASK 9 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
3. Isrykiuoti pagal varda mazejimo tvarka

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const showUsers = document.querySelector("#btn");
const outputWindow = document.querySelector("#output");
const placeholderMessage  = document.querySelector("#message");


showUsers.addEventListener("click", buttonClicked);

async function buttonClicked(){
    let users = await getUsers(); 
    users.sort(sortFunction("login"))
    fillOutputWindowWithUsers(users);
}

function fillOutputWindowWithUsers(users){
    if(users.length > 0){
        users.forEach(user => {
            var infoEl = document.createElement("p");
            infoEl.innerHTML = user.login + " " + user.avatar_url;
            outputWindow.appendChild(infoEl);
        });
        placeholderMessage.style.display = "none";
    }
}

async function getUsers(){
    const response = await fetch(ENDPOINT, {
        method: "GET",
    });
    return await response.json();
}

function sortFunction(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property].toUpperCase() < b[property].toUpperCase()) ? -1 : (a[property].toUpperCase() > b[property].toUpperCase()) ? 1 : 0;
        return result * sortOrder;
    }
}