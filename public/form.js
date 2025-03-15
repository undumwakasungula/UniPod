import { app } from "./firebaseConfig.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
//import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const auth = getAuth(app);
document.addEventListener("DOMContentLoaded", function() {
    const upform = document.getElementById("signUpform");
    const subform = document.getElementById("signIn-form");
    const button_activity = document.getElementById("sign-up-label");
    const forgot_password = document.getElementById("resetPassword");
    
    if (forgot_password) {
        forgot_password.addEventListener("click", function resetPassword() {

            const email = prompt("Enter your email address:");
            if (email) {
                sendPasswordResetEmail(auth, email)
                    .then(() => {
                        alert("Password reset email sent!");
                    })
                    .catch((error) => {
                        console.error("Error sending password reset email:", error.message);
                        alert("Error: " + error.message);
                    });
            }
        });
    }
    if (button_activity) {
        button_activity.addEventListener("click", function ghost() {
            window.location.href = "/signUp_selector.html";
        });
    }
    if (upform) {
        upform.addEventListener("submit", async (event) =>{
            
            event.preventDefault();

            let email = document.getElementById("signUpEmail").value;
            let password = document.getElementById("signUpPassword").value.trim();
            let confirm_password = document.getElementById("confPassword").value.trim();
            
           if (password !== confirm_password) {

                alert("Passwords are not a match");
                return;
            }

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log("User created:", userCredential.user);
                alert("Account created successfully!");
                window.location.href = "index.html";

            }catch (error) {
                console.error("Error creating account:", error.message);
                alert("Error: " + error.message);
            }

        });
    }

    if (subform) {
        subform.addEventListener("submit", async (event)=>{
            event.preventDefault();

            const email = document.getElementById("signinemail").value;
            const password = document.getElementById("signinpassword").value;
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log("Signed in successfully:", userCredential.user);
                window.location.href = "/main.html";
            }catch (error) {
                console.error("Error signing in:", error.message);
                alert("Error: " + error.message);
            }
        });
    }




});
function gotoStudent() {
    window.location.href = "/StudentSignup.html";
};

function gotoStaff() {
    window.location.href = "/staffSignup.html";
};

function gotoExternal() {
    window.location.href = "/externalsignup.html";
};