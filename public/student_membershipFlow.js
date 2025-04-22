import { db } from "./firebaseConfig.js"
import { doc, collection,deleteDoc,onSnapshot, setDoc,updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded",function(){

    const membership_form = document.getElementById("studentMemberForm");


    if(membership_form){
        membership_form.addEventListener("submit", async (event) =>{
            
            event.preventDefault();

            let Surname = document.getElementById("membersName").value;
            let FirstName = document.getElementById("memberfName").value;
            let PhoneNumber = document.getElementById("memberphone").value;
            let Email = document.getElementById("membermail").value;
            let Status = "Pending";
            
            

            try {
       
                    //storing member details in Firestore
                const membersDocRef = doc(collection(db, "Membership"));
                await setDoc(membersDocRef, {
                Surname: Surname,
                FirstName: FirstName, 
                Email: Email,
                PhoneNumber: PhoneNumber,
                Status:Status
            });
              alert("membership application successful");
                
                

            }catch (error) {
                console.error("Error adding equipment:", error.message);
                alert("membership application was not successful, try again later");
                
            }


        });
    }

    // Fetch project data from Firestore
    const fetchDataProjects = () => {
        const projectRef = collection(db, "ElectronicsLabProjects");
        // Listen for real-time updates
        onSnapshot(projectRef, (snapshot) => {
            console.log("Snapshot triggered!");
            const projectsData = [];
            snapshot.forEach((doc) => {
                projectsData.push({ id: doc.id, ...doc.data() }); // Collect data from each document
            });

        showCards(projectsData);

        });
    };
    fetchDataProjects();
    
    // Function to display payments in cards (instead of a table)
    const showCards = (projectsData) => {
        const listBody = document.querySelector("#ClientProject");
        listBody.innerHTML = ""; // Clear existing entries

        projectsData.forEach((item) => {
            const card = `
                <div class="payment-card">
                    <div class="card-header">
                        <strong>${item.Client}</strong>
                        <small>${item.Project}</small>
                    </div>
                    <div class="card-body">
                        <p>Project ID: <span>${item.Project_ID}</span></p>
                        <p>Date: <span>${item.Create_Date}</span></p>
                    </div>

            `;
            listBody.innerHTML += card;
        });
    }

});
