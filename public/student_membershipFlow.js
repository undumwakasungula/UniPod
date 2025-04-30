import { db } from "./firebaseConfig.js"
import { doc, collection,onSnapshot, addDoc,updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
document.addEventListener("DOMContentLoaded",function(){
    const application_btton = document.getElementById("applyButton");
if(application_btton){
    application_btton.addEventListener("click", async () => {
        console.log("Button has been clicked");
    
        const auth = getAuth();
        const user = auth.currentUser;
    
        if (!user) {
            alert("You must be signed in to apply for membership.");
            return;
        }
    
        let Status = "Pending";
        
        try {
            console.log("User is signed in");
    
            
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);
    
            let profName = "Unknown Name";
            if (userDocSnap.exists()) {
                profName = userDocSnap.data().name || "Unknown Name";  
            }
    
            const displayName = profName
            const membersDocRef = await addDoc(collection(db, "Membership"), {
                userId: user.uid,
                Email: user.email,
                Name: profName,  
                displayName: profName, 
                Status: Status,
                appliedAt: new Date()
            });
    
            const membershipId = membersDocRef.id;
    
            // Update user's document with membership ID
            await updateDoc(userDocRef, { membershipId: membershipId });
    
            alert("Membership application successful!");
    
        } catch (error) {
            console.error("Error applying for membership:", error.message);
            alert("Membership application was not successful, try again later.");
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
