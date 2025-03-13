document.addEventListener("DOMContentLoaded", function() {
    const upform = document.getElementById("signUpform");
    const subform = document.getElementById("signIn-form");
    const button_activity = document.getElementById("sign-up-label");

    if (upform) {
        upform.addEventListener("submit", function passwordchecker(event) {
            event.preventDefault();

            let password = document.getElementById("password").value.trim();
            let confirm_password = document.getElementById("confPassword").value.trim();

            if (password === confirm_password) {
                window.location.href = "studentLogin.html";
            } else {
                alert("Passwords are not a match");
            }
        });
    }

    if (subform) {
        subform.addEventListener("submit", function master(event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password1 = document.getElementById("password").value;

            if (email && password1) {
                window.location.href = "main.html";
            }
        });
    }

    if (button_activity) {
        button_activity.addEventListener("click", function ghost() {
            window.location.href = "signUp_selector.html";
        });
    }


});
function gotoStudent() {
    window.location.href = "StudentSignup.html";
};

function gotoStaff() {
    window.location.href = "staffSignup.html";
};

function gotoExternal() {
    window.location.href = "externalsignup.html";
};