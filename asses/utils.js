const form = document.getElementById("form-card")
const isEmpty = (value) => !value.length;
const isEmailValid = (value) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	return re.test(inputEmail);
};

const isPassSecure = (value) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return re.test(value);
}
const showError = (input, message) => {
	const dataForm = input.parentElement;
	dataForm.classList.remove("success");
	dataForm.classList.add("error");
	const error = dataForm.querySelector("small");
	error.textContent = message;
};
const showSuccess = (input) => {
	const dataForm = input.parentElement;
	dataForm.classList.remove("error");
	dataForm.classList.add("success");
	const error = dataForm.querySelector("small");
	error.textContent = "";
};
const isBetween = (length, min, max) => {
	return length < min || length > max ? false : true;
};
const debounce = (fn, delay = 500) => {
	let timeoutId;

	return (...args) => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn.apply(null, args);
		}, delay);
	};
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isNameValid = checkName();
    let isEmailValid = checkMail();
    let isPassValid = checkPass();
    let isFormValid = isNameValid && isEmailValid && isPassValid;
    if (isFormValid){
        form.submit();

        return alert ("Mañana por la mañana sale su producto, gracias");
    }
});
form.addEventListener(
	"input",
	debounce((e) => {
		switch (e.target.id) {
			case "inputName":
				checkName();
				break;
			case "inputEmail":
				checkMail();
				break;
			case "inputpassword":
				checkPass();
				break;
		}
	})
);