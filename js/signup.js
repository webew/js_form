// les éléments du DOM
const lastNameInput = document.querySelector("#lastName");
const firstNameInput = document.querySelector("#firstName");
const email = document.querySelector("#email");
const submitButton = document.querySelector("#submitBtn");
const form = document.querySelector("form");

// les expression régulières (Regex)
const regEmail =
	/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
const nameRegex = /^[A-Za-zÀ-ÿ- ]+[- ]?[A-Za-zÀ-ÿ]+$/;

// gestion du clic sur le bouton submit
submitButton.addEventListener("click", function (event) {
	event.preventDefault(); // annule le comportement par défaut du bouton submit
	if (
		regEmail.test(email.value) &&
		nameRegex.test(lastNameInput.value) &&
		nameRegex.test(firstNameInput.value)
	) {
		console.log("ok");
		form.submit();
	} else {
		alert();
	}
});
