const inputEmail = document.querySelector("#inputEmail");
const inputName = document.querySelector("#inputName");
const inputPass = document.querySelector("#inputpassword");
const validForm = document.querySelector("#form-card");

const checkName = () => {
    let valid = false;
    const min =3;
    const max = 25;
    const nameValue = inputName.value.trim();
    if (isEmpty(nameValue)) {
        showError(inputName, "* El nombre es obligatorio.");
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
        showError (inputEmail, "El mail es obligatorio");
    } else if (!isEmailValid(emailValue)) {
        showError (inputEmail,"El mail no es valido")
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
        showError (inputPass,"La constraseña es obligatoria")
    } else if (!isPassSecure(passValue)) {
        showError(inputPass,"La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo")
    }else{
        showSuccess(inputPass);
        valid = true;
    }
    return valid
}


// utils.js
const isEmpty = (value) => !value.length;
const isEmailValid = (value) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	return re.test(inputEmail);
};

const isPassSecure = (value) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return re.test(value);
}

validForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isNameValid = checkName();
    let isEmailValid = checkMail();
    let isPassValid = checkPass();
    let isFormValid = isNameValid && isEmailValid && isPassValid;
    if (isFormValid){
        validForm.submit();

        return alert ("Mañana por la mañana sale su producto, gracias");
    }
});