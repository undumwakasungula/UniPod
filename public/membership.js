import { db } from "./firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { doc, collection, query, where, deleteDoc, onSnapshot, updateDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

const auth = getAuth();
const projectCollections = [
    "AudioVisualLabProjects",
    "ElectronicsLabProjects",
    "MechanicalLabProjects",
    "CNCLabProjects",
    "WoodLabProjects"
];

document.addEventListener("DOMContentLoaded", function () {
    // Fetch Membership Applications
    const fetchMembershipApplications = () => {
        const memberRef = collection(db, "Membership");
        const pendingmemberQuery = query(memberRef, where("Status", "==", "Pending"));

        onSnapshot(pendingmemberQuery, (snapshot) => {
            console.log("Snapshot for pending members triggered!");
            const membersData = [];
            snapshot.forEach((doc) => {
                membersData.push({ id: doc.id, ...doc.data() });
            });

            showlist(membersData);
        });
    };

    // Display Membership Applications
    const showlist = (membersData) => {
        const Bodylist = document.querySelector("#Applications_memberList");
        Bodylist.innerHTML = "";

        membersData.forEach((part) => {
            const card = `
                <div class="payment-card">
                    <div class="card-header">
                        <strong>${part.Name}</strong>
                    </div>
                    <div class="card-body">
                        <small>${part.Status}</small>
                        <p><span>${part.Email}</span></p>
                    </div>
                    <div class="card-footer">
                        <button class="approved-btn" btn-id="${part.id}">
                            <i class="fa-solid fa-check-circle"></i> Approve
                        </button>
                        <button class="delete-btn" btn-id="${part.id}">
                            <i class="fa-solid fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            `;
            Bodylist.innerHTML += card;
        });
    };

    document.querySelector("#Applications_memberList").addEventListener("click", function (e) {
        const target = e.target.closest("button");
        if (!target) return;

        const memberId = target.getAttribute("btn-id");

        if (target.classList.contains("approved-btn")) {
            const confirmApprove = window.confirm("Are you sure you want to approve this member?");
            if (confirmApprove) {
                updateDoc(doc(db, "Membership", memberId), { Status: "Approved" }).then(() => {
                    console.log(`Member ${memberId} approved`);
                });
            }
        }

        if (target.classList.contains("delete-btn")) {
            const confirmDelete = window.confirm("Are you sure you want to delete this member?");
            if (confirmDelete) {
                deleteDoc(doc(db, "Membership", memberId))
                    .then(() => {
                        console.log(`Member ${memberId} deleted!`);
                    })
                    .catch((error) => {
                        console.error("Error deleting member:", error);
                    });
            }
        }
    });

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

    document.querySelector("#Registered_memberList").addEventListener("click", function (e) {
        const target = e.target.closest("button");
        if (!target) return;

        const memberId = target.getAttribute("dat-id");

        if (target.classList.contains("btn-revoke")) {
            const confirmRevoke = window.confirm("Are you sure you want to revoke this member?");
            if (confirmRevoke) {
                updateDoc(doc(db, "Membership", memberId), { Status: "Pending" }).then(() => {
                    console.log(`Membership ${memberId} revoked!`);
                });
            }
        }

        if (target.classList.contains("delete-btn")) {
            const confirmDelete = window.confirm("Are you sure you want to delete this member?");
            if (confirmDelete) {
                deleteDoc(doc(db, "Membership", memberId))
                    .then(() => {
                        console.log(`Member ${memberId} deleted!`);
                    })
                    .catch((error) => {
                        console.error("Error deleting member:", error);
                    });
            }
        }
    });

  
    onAuthStateChanged(auth, async (user) => {
      if (user) {
          const clientID = user.uid;
  
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
  

    // Display Filtered Client Projects
    function displayClientProjects(projects) {
        const projectList = document.getElementById("ClientProject");
        projectList.innerHTML = projects.length === 0 ? "<p>No projects found.</p>" : "";

        projects.forEach(proj => {
            projectList.innerHTML += `
                <div class="payment-card">
                    <div class="card-header">
                        <h3>${proj.Project || "Unnamed Project"}</h3>
                        <strong>${proj.collectionName}</strong>
                    </div>
                    <div class="card-body">
                        <p>Project ID: <span>${proj.Project_ID || "N/A"}</span></p>
                        <p>Date: <span>${proj.Create_Date || "Unknown"}</span></p>
                    </div>
                </div>`;
        });
    }

    fetchMembershipApplications();
    fetchApprovedmembers();
});
