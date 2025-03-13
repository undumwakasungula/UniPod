import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
document.addEventListener("DOMContentLoaded", function() {
    const upform = document.getElementById("signUpform");
    const subform = document.getElementById("signIn-form");
    const button_activity = document.getElementById("sign-up-label");
    
    if (upform) {
        upform.addEventListener("submit", async (event) => {
            
            event.preventDefault();
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value.trim();
            let confirm_password = document.getElementById("confPassword").value.trim();
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log("User created:", userCredential.user);
                if (password === confirm_password) {
                    alert("Account created successfully!");
                    window.location.href = "index.html";
                } else {
                    alert("Passwords are not a match");
                }
              } catch (error) {
                console.error("Error creating account:", error.message);
                alert("Error: " + error.message);
            }

        });
    }

    if (subform) {
        subform.addEventListener("submit", async (event) => {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password1 = document.getElementById("password").value;
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log("Signed in successfully:", userCredential.user);
                window.location.href = "main.html";
              } catch (error) {
                console.error("Error signing in:", error.message);
                alert("Error: " + error.message);
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