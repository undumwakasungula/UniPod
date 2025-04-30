import { db } from "./firebaseConfig.js"
import { doc, collection,onSnapshot, addDoc,updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
document.addEventListener("DOMContentLoaded",function(){
    const application_btton = document.getElementById("applyButton");
if(application_btton){
    application_btton.addEventListener("click", async () => {
        console.log("Apply button clicked!"); // Debugging

        const auth = getAuth();
        const user = auth.currentUser;
        const confirmApplication = window.confirm("Do you really want to apply?")
        if(confirmApplication){
            if (!user) {
                alert("You must be signed in to apply for membership.");
                console.error("No user detected in Firebase Auth!");
                return;
            }
    
            console.log("User Detected:", user.uid, user.email); // Debugging
    
            let Status = "Pending";
    
            try {
                console.log("Submitting membership application...");
    
                const membersDocRef = await addDoc(collection(db, "Membership"), {
                    userId: user.uid,
                    Email: user.email,
                    Name: user.displayName || "Unknown Name",
                    Status: Status,
                    appliedAt: new Date()
                });
    
                const membershipId = membersDocRef.id;
                console.log("Membership Document Created with ID:", membershipId);
    
                // Update user's document with membership ID
                const userRef = doc(db, "users", user.uid);
                await updateDoc(userRef, { membershipId: membershipId });
    
                alert("Membership application successful!");
            } catch (error) {
                console.error("Error applying for membership:", error.message);
                alert("Membership application was not successful, try again later.");
            }

        }
        else{
            console.log("user cancelled the application")
        }

    });
}
    
    // Fetch project data from Firestore
    const fetchDataProjects = () => {
        const projectRef = collection(db, "ElectronicsLabProjects");
        // Listen for real-time updates
        onSnapshot(projectRef, (snapshot) => {
            console.log("Snapshot student triggered!");
            const projectsData = [];
            snapshot.forEach((doc) => {
                projectsData.push({ id: doc.id, ...doc.data() }); // Collect data from each document
            });

        showpayCards(projectsData);

        });
    };
    fetchDataProjects();
    
    // Function to display payments in cards (instead of a table)
    const showpayCards = (projectsData) => {
        const listbodyd = document.querySelector("#ClientProject");
        listbodyd.innerHTML = ""; // Clear existing entries

        projectsData.forEach((item) => {
            const card = `
                <div class="payment-card">
                    <div class="card-header">
                        <h3>Data be here</h3>
                        <strong>${item.Client}</strong>
                        <small>${item.Project}</small>
                    </div>
                    <div class="card-body">
                        <p>Project ID: <span>${item.Project_ID}</span></p>
                        <p>Date: <span>${item.Create_Date}</span></p>
                    </div>

            `;
            listbodyd.innerHTML += card;
        });
    };

});
