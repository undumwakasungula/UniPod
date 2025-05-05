import { app, db } from "/firebaseConfig.js"
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { collection, query, where, onSnapshot, getDocs } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
const auth = getAuth(app);
const projectCollections = [
    "AudioVisualLabProjects",
    "ElectronicsLabProjects",
    "MechanicalLabProjects",
    "CNCLabProjects",
    "WoodLabProjects"
];

document.addEventListener("DOMContentLoaded", function() {
    const down = document.getElementById("staff-form");


    if(down){
        down.addEventListener("submit", async(event)=>{
            event.preventDefault();
            const firstname = document.getElementById("fName").value;
            const surname = document.getElementById("sName").value;
            const Phonenam = document.getElementById("staff_phone").value;
            const email = document.getElementById("staffmail").value;
            const password = document.getElementById("Password3").value;
            const confirm_password = document.getElementById("Password4").value;
            const role = "staff";
            const fullName = `${firstname} ${surname}`;
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
                role: role,
                name:fullName,
                Phonenumber:Phonenam
               });
            alert("Account created successfully!");
            window.location.href = "/index.html";

            }catch (error) {
                console.error("Error creating account:", error.message);
                alert("Error: " + error.message);
            }
        });
    }

        // Fetch Approved Members
    const fetchApprovedmembers = () => {
        const approvedmemberRef = collection(db, "Membership");
        const approvedmemberQuery = query(approvedmemberRef, where("Status", "==", "Approved"));

        onSnapshot(approvedmemberQuery, (snapshot) => {
            console.log("Approved members snapshot triggered!");

            const approvedmembersData = [];
            snapshot.forEach((doc) => {
                approvedmembersData.push({ id: doc.id, ...doc.data() });
            });

            showapprovedCards(approvedmembersData);
        });
    };

    // Display Approved Members
    const showapprovedCards = (approvedmembersData) => {
        const Bodylist = document.querySelector("#Registered_memberList");
        Bodylist.innerHTML = "";

        approvedmembersData.forEach((side) => {
            const card = `
                <div class="payment-card">
                    <div class="card-header">
                        <strong>${side.Name}</strong>
                    </div>
                    <div class="card-body">
                        <small>${side.Status}</small>
                        <p><span>${side.Email}</span></p>
                    </div>
                    <div class="card-footer">
                        <button class="btn-revoke" dat-id="${side.id}">
                            <i class="fa-solid fa-circle-xmark"></i> Revoke
                        </button>
                        <button class="delete-btn" dat-id="${side.id}">
                            <i class="fa-solid fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            `;
            Bodylist.innerHTML += card;
        });
    };
    
    onAuthStateChanged(auth, async (user) => {
      if (user) {
          const clientID = user.uid;
          console.log("onAuthStateChanged fired, user:", clientID);

  
          const projectPromises = projectCollections.map(async (col) => {
              const q = query(collection(db, col), where("Client", "==", clientID));
              const snapshot = await getDocs(q);
              return snapshot.docs.map(doc => ({
                  ...doc.data(),
                  collectionName: col
              }));
          });
  
          const allResults = await Promise.all(projectPromises);
          const allClientProjects = allResults.flat(); 
  
          console.log("Fetched projects:", allClientProjects); 
          displayClientProjects(allClientProjects);
      } else {
          console.log("No client is logged in");
      }
  });
  

  function displayClientProjects(projects) {
    const projectList = document.getElementById("ClientProjectdiv");
    console.log("projectList DOM element:", projectList);
    projectList.innerHTML = projects.length === 0 ? "<p>No projects found.</p>" : "";

    projects.forEach(proj => {
        
        const normalDate = proj.Create_Date;
        const formattedDate = normalDate ? new Date(normalDate).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'long', year: 'numeric'
        }) : "Unknown";

        projectList.innerHTML += `
            <div class="payment-card">
                <div >
                    <h3>${proj.Project || "Unnamed Project"}</h3>
                    <strong>${proj.collectionName}</strong>
                </div>
                <br>
                
                <div >
                    <p>Project ID: <span>${proj.Project_ID || "N/A"}</span></p>
                    <p>Duration(wks): <span>${proj.Duration || "N/A"}</span></p>
                    <p>Start Date: <span>${formattedDate}</span></p>
                </div>
            </div>`;
    });
}

});
