/* ------------------------------ TASK 7 --------------------------------------------
Kreipiantis i zemiau pateikta resursa gauti siuos duomenis is serverio ir atvaizduoti juos htmle.
T.y. turi buti atvaizduota zinute ir nuotrauka <img>.
Taip pat tinklapyje turi buti atvaizduotas mygtukas, kuri paspaudus butu gaunami nauji duomenys
ir pakeiciami seni.
Taip pat isijungus si tinklapi is naujo turiu matyti ta pati irasa, kuri pries tai buvome gave ir tik paspaudus mygtuka "Refresh"
Turime gauti naujus duomenis.

Hint: naudojamas localstorage, saugoti informacijai;
------------------------------------------------------------------------------------ */
const URL = "https://cors-anywhere.herokuapp.com/https://random-d.uk/api/random";
async function getMessage(){
    const response = await fetch(URL, {
        method: "GET",
    });
    return await response.json();
}
async function buttonClicked(){
    let msg = await getMessage(); 
    showMessage(msg);
    console.log(msg);
}

function showMessage(msg){
    messageEl.innerHTML = msg.message;
    var img = document.createElement('img');
    img.src = msg.url;
    pictureEl.appendChild(img);
    localStorage.setItem("message", msg.message);
    localStorage.setItem("url", msg.url);
}

function checkLocalStorage(){
    if(localStorage.getItem("message") && localStorage.getItem("url")){
        messageEl.innerHTML = localStorage.getItem("message");
        var img = document.createElement('img');
        img.src = localStorage.getItem("url");
        pictureEl.appendChild(img);
    }
}

let button = document.querySelector("#buttonNew");
let messageEl = document.querySelector("#message");
let pictureEl = document.querySelector("#picture");
button.addEventListener("click", buttonClicked);
window.addEventListener('load', function () {
    checkLocalStorage();
  })