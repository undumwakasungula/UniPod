import { db } from "./firebaseConfig.js"
import { doc,getAuth, collection,onSnapshot, addDoc,updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
const auth = getAuth();
document.addEventListener("DOMContentLoaded",function(){

    const membership_form = document.getElementById("studentMemberForm");


    if(membership_form){
        membership_form.addEventListener("submit", async (event) => {
            event.preventDefault();
        
            
            const user = auth.currentUser; 
        
            if (!user) {
                alert("You must be signed in to apply for membership.");
                return;
            }
        
            let Surname = document.getElementById("membersName").value;
            let FirstName = document.getElementById("memberfName").value;
            let PhoneNumber = document.getElementById("memberphone").value;
            let Email = document.getElementById("membermail").value;
            let Status = "Pending";
        
            try {
                // Store member details in Firestore & Get auto-generated ID
                const membersDocRef = await addDoc(collection(db, "Membership"), {
                    userId: user.uid,  // Link this membership to the current user
                    Surname: Surname,
                    FirstName: FirstName,
                    Email: Email,
                    PhoneNumber: PhoneNumber,
                    Status: Status
                });
        
                const membershipId = membersDocRef.id; // Get newly created document ID
                console.log("Membership Document ID:", membershipId);
        
                // Link membership ID to user in Firestore
                const userRef = doc(db, "users", user.uid);
                await updateDoc(userRef, { membershipId: membershipId });
        
                alert("Membership application successful!");
        
            } catch (error) {
                console.error("Error adding membership:", error.message);
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
