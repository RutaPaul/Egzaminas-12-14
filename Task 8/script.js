/* ------------------------------ TASK 8 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const buttonElement = document.querySelector("#btn__element");
const buttonState = document.querySelector("#btn__state");

let state = 0;

buttonElement.addEventListener("click", function(){
    state += 1;
    buttonState.innerText = `${state}`;
});