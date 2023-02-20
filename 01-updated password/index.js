let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

let newPassword = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
};

let confirmPassword = function() {
    if (newPasswordEl.value !== confirmPasswordEl.value) {
        confirmPasswordErrMsgEl.textContent = "Passwords must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
};

newPasswordEl.addEventListener("blur", newPassword);
confirmPasswordEl.addEventListener("blur", confirmPassword);

updatePasswordFormEl.addEventListener("submit", function(event) {
     event.preventDefault();
    newPassword();
    confirmPassword();
   
});