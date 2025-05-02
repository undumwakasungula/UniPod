import { db } from "./firebaseConfig.js"
import { doc, collection,onSnapshot, addDoc,updateDoc,getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
document.addEventListener("DOMContentLoaded",function(){
    const application_btton = document.getElementById("applyButton");

    if (application_btton) {
        application_btton.addEventListener("click", async () => {
            console.log("Apply button clicked!"); // Debugging
    
            const auth = getAuth();
            const user = auth.currentUser;
            const confirmApplication = window.confirm("Do you really want to apply?");
            
            if (confirmApplication) {
                if (!user) {
                    alert("You must be signed in to apply for membership.");
                    console.error("user not detected in Firebase Auth!");
                    return;
                }

                const userRef = doc(db, "users", user.uid);
                const UserDoc = await getDoc(userRef);
    
                if (!UserDoc.exists()) {
                    console.log("No such user exists.");
                    return;
                }
    
                const userData = UserDoc.data();
                const userName = userData.name || "Unknown Name";
    
                // Check if user already has a membershipId
                const membershipId = userData.membershipId;
    
                if (membershipId) {
                    console.log("User already has a membership. Checking status...");
                    
                    const membershipRef = doc(db, "Membership", membershipId);
                    const membershipSnap = await getDoc(membershipRef);
    
                    if (membershipSnap.exists()) {
                        const memberStatus = membershipSnap.data().Status;
                        console.log("Membership Status:", memberStatus);
    
                       
                        if (memberStatus === "Pending") {
                            alert("You have already applied for membership. Please wait for approval.");
                            return;
                        }
                        if (memberStatus === "Approved") {
                            alert("You are already a member.");
                            return;
                        }
                    }
                }
    
                try {
                    console.log("Submitting membership application...");
    
                    const membersDocRef = await addDoc(collection(db, "Membership"), {
                        userId: user.uid,
                        Email: user.email,
                        Name: userName,
                        Status: "Pending",
                        appliedAt: new Date()
                    });
    
                    const newMembershipId = membersDocRef.id;
                    console.log("Membership Document Created with ID:", newMembershipId);
    
                  
                    await updateDoc(userRef, { membershipId: newMembershipId });
    
                    alert("Membership application successful!");
                } catch (error) {
                    console.error("Error applying for membership:", error.message);
                    alert("Membership application was not successful, try again later.");
                }
            } else {
                console.log("User cancelled the application.");
            }
        });
    }
    
   // Fetch data from Firestore and listen for updates
const fetchDataProjects = () => {
    const projectRef = collection(db, "ElectronicsLabProjects");

    onSnapshot(projectRef, (snapshot) => {
        console.log("Snapshot student triggered!");
        const projectsData = [];

        snapshot.forEach((doc) => {
            console.log("Doc data:", doc.data());
            projectsData.push({ id: doc.id, ...doc.data() });
        });

        if (projectsData.length === 0) {
            console.log("No projects found.");
        }

        showpayCards(projectsData);
    }, (error) => {
        console.error("Error in onSnapshot:", error);
    });
};

// Render project data as cards in the DOM
const showpayCards = (projectsData) => {
    const listbodyd = document.querySelector("#ClientProject");
    if (!listbodyd) {
        console.error("Element #ClientProject not found in DOM!");
        return;
    }

    listbodyd.innerHTML = ""; // Clear any existing content

    projectsData.forEach((parcel) => {
        const para = `
            <div class="payment-card">
                <div class="card-header">
                    <h3>${parcel.Project || "Unnamed Project"}</h3>
                    <strong>${parcel.Client || "No Client"}</strong>
                </div>
                <div class="card-body">
                    <p>Project ID: <span>${parcel.Project_ID || "N/A"}</span></p>
                    <p>Date: <span>${parcel.Create_Date || "Unknown"}</span></p>
                </div>
            </div>`;
        listbodyd.innerHTML += para;
    });
};
   
    fetchDataProjects();

});
