import { app, db } from "/firebaseConfig.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
const auth = getAuth(app);


document.addEventListener("DOMContentLoaded", function() {
    const down = document.getElementById("external-form");


    if(down){
        down.addEventListener("submit", async(event)=>{
            event.preventDefault();
            const email = document.getElementById("externalmail").value;
            const password = document.getElementById("Password1").value;
            const confirm_password = document.getElementById("Password2").value;
            const role="external";

            if (password !== confirm_password) {

                alert("Passwords are not a match");
                return;
            }
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log("User created:", userCredential.user);
                const userDocRef = doc(db, "users", userCredential.user.uid);
                await setDoc(userDocRef, {
                email: email,
                role: role
               });
            alert("Account created successfully!");
            window.location.href = "/index.html";

            }catch (error) {
                console.error("Error creating account:", error.message);
                alert("Error: " + error.message);
            }
        });
    }


 
});
