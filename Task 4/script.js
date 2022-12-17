/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

async function start(){
    let carData = await fetch('./' + ENDPOINT)
    .then((response) =>{
       return response.json()
    })
    .then((data) => {
        return data;
    })
    .catch(err => console.log(err));
    showCars(carData);
}

start();
function showCars(carData){
    let ouputEl = document.querySelector("#output");
    carData.forEach((car, idx) => {
        createCardElements(ouputEl, car, idx)
    })
}

function createCardElements(ouputEl, car, idx){
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card';
    let content = `
        <div class="card-header" id="heading-${idx}">
            <h2>${car.brand}</h2>
            <br>
        </div>
        <div class="card-body">
        `;

        car.models.forEach(model => {
            content = content + `<p>${model}</p>`
        });
            
        content = content +`</div>`;

    // Append newyly created card element to the container
    card.innerHTML = content;
    ouputEl.appendChild(card);
}