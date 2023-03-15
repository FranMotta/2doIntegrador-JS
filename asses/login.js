const storeCard = document.querySelector("#store-card");
const formCard = document.querySelector("#form-card");
const inputNumber = document.querySelector("#inputNumber");
const numberCard = document.querySelector("#number-id");
const imgBrandCard = document.querySelector("#brand-card");
const inputName = document.querySelector("#inputName");
const nameCard = document.querySelector("#name-card");
const sing = document.querySelector("#sing .sing p");
const expirationMonth =  document.querySelector("#expiration .month");
const expirationYear =  document.querySelector("#expiration .year");
const ccv =  document.querySelector("#ccv .ccv");

const showFront = () => {
    if (storeCard.classList.contains('active')){
        storeCard.classList.remove ('active');
    }
}
storeCard.addEventListener('click',() => {
    storeCard.classList.toggle('active');
    });

for(let i = 1; i <= 12; i++){
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    formCard.selectMonth.appendChild(option);
    };

const currentYear = new Date().getFullYear();
for(let i = currentYear; i <= currentYear + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formCard.selectYear.appendChild(opcion);
};

selectMonth.addEventListener('change', (e) => {
    expirationMonth.textContent = e.target.value;
    showFront();
});
selectYear.addEventListener('change', (e) => {
    expirationYear.textContent = e.target.value.slice(2);
    showFront();
});