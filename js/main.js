const connexionForm = document.querySelector("#connexionForm");
const inputNom = connexionForm.querySelector("#inputNom");
const inputPrenom = connexionForm.querySelector("#inputPrenom");
console.log(inputPrenom);

connexionForm.addEventListener("submit", function (e) {
	e.preventDefault();
	if (validateForm()) {
		this.submit();
	}
});

function validateForm() {
	const validateNom = validateInput(inputNom);
	const validatePrenom = validateInput(inputPrenom);
	return validateNom && validatePrenom;
}

function validateInput(input) {
	const value = input.value;
	console.log(value);
	const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	console.log(regex.test(value));
	if (!regex.test(value)) {
		input.style.border = "2px solid red";
	} else {
		input.style.border = "2px solid green";
	}
	return regex.test(value);
}
