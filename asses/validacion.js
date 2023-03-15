const inputEmail = document.querySelector("#inputEmail");
const inputPass = document.querySelector("#inputpassword");
const validForm = document.querySelector("#form-card");

const checkName = () => {
    let valid = false;
    const min =3;
    const max = 25;
    const nameValue = inputName.value.trim();
    if (isEmpty(nameValue)) {
        showError(inputName, "* El nombre es obligatorio.*");
    } else if (!isBetween(nameValue.length, min, max)) {
		showError(inputName,`*El nombre debe tener entre ${min} y ${max} caracteres.*`);
	} else {
        showSuccess(inputName);
        valid = true;
    }
    return valid;
};

const checkMail = () => {
    let valid = false;

    const emailValue = inputEmail.value.trim();
    
    if(isEmpty(emailValue)) {
        showError (inputEmail, "*El mail es obligatorio.*");
    } else if (!isEmailValid(emailValue)) {
        showError (inputEmail,"*El mail no es valido.*")
    } else {
        showSuccess(inputEmail);
        valid=true;
    }
    return valid;
}
const checkPass = () => {
    let valid = false;
    const passValue = inputPass.value.trim();
    
    if (isEmpty(passValue)){
        showError (inputPass,"*La constraseña es obligatoria.*")
    } else if (!isPassSecure(passValue)) {
        showError(inputPass,"*La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un símbolo.*")
    }else{
        showSuccess(inputPass);
        valid = true;
    }
    return valid
}

// validacion tarjeta
formCard.inputNumber.addEventListener('keyup', (e) =>{
    let valueInput = e.target.value;
    inputNumber.value = valueInput
    .replace (/\s/g, '')
    .replace (/\D/g, '')
    .replace (/([0-9]{4})/g, '$1 ')
    .trim();
    numberCard.textContent= valueInput;
    if (valueInput == ''){
        numberCard.textContent = 'XXXX XXXX XXXX XXXX';
        imgBrandCard.innerHTML = '';
        showError(valueInput, "*La tarjeta es obligatoria.*")
    }
    if(valueInput[0] == 4){
        imgBrandCard.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'asses/img/brandCard/visa.png';
        imgBrandCard.appendChild(imagen);
        
    } else if(valueInput[0] == 5){
		imgBrandCard.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'asses/img/brandCard/mastercard.png';
		imgBrandCard.appendChild(imagen);
	}
    showFront();
});
inputName.addEventListener('keyup', (e) => {
    let valueInput = e.target.value;

    inputName.value = valueInput.replace (/[0-9]/g,'');
    nameCard.textContent = valueInput;
    sing.textContent= valueInput;

    if(valueInput == ''){
        nameCard.textContent = 'Natalia Natalia';
    }
    if (valueInput[0] == nameCard){
    }
    showFront();
});
inputCCV.addEventListener('keyup' , (e) => {
    if(!storeCard.classList.contains('active')){
        storeCard.classList.toggle('active');
    }
    inputCCV.value = inputCCV.value
    .replace (/\s/g, '')
    .replace (/\D/g, '');
    ccv.textContent = inputCCV.value;
});