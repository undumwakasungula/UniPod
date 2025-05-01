import { db } from "./firebaseConfig.js"
import { doc,getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
document.addEventListener("DOMContentLoaded", async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        const username = localStorage.getItem("username");
        const role = localStorage.getItem("role");
       
        if (username) {
            document.getElementById("account-name").textContent = username;
        } else {
            document.getElementById("account-name").textContent = "Unknown Name";
        }
    
        if (role) {
            document.getElementById("account-type").textContent = role;
        } else {
            document.getElementById("account-type").textContent = "Unknown Role";
        }
    
    
        if (!user) {
            return;
        }
    
        
        const userRef = doc(db, "users", user.uid);
        const userSnapsh = await getDoc(userRef);
    
        if (!userSnapsh.exists()) {
            console.error("User document not found");
            alert("User data not found. Please contact support.");
            return;
        }
    
        
        const membershipId = userSnapsh.data().membershipId;
    
        const statusIndicator = document.getElementById("statusIndicator");
    
        if (!membershipId) {
            console.log("User is not a member.");
            statusIndicator.textContent = "Inactive";
            return;
        }
    
        
        const membershipRef = doc(db, "Membership", membershipId);
        const membershipSnap = await getDoc(membershipRef);
    
        if (!membershipSnap.exists()) {
            console.error("Membership document not found");
            statusIndicator.textContent = "Inactive";
            return;
        }
    
        const memberStatus = membershipSnap.data().Status;
        console.log("Membership Status:", memberStatus);
    
        
        statusIndicator.textContent = memberStatus === "Approved" ? "Active" : "Inactive";
    
    });
    

