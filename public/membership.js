import { db } from "./firebaseConfig.js";
import { doc,  collection,  query,  where,  deleteDoc,  onSnapshot,  updateDoc,} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
  const fetchMembershipApplications = () => {
    const memberRef = collection(db, "Membership");
    const pendingmemberQuery = query(memberRef, where("Status", "==", "Pending"));

    onSnapshot(pendingmemberQuery, (snapshot) => {
      console.log("Snapshot for members triggered!");
      const membersData = [];
      snapshot.forEach((doc) => {
        membersData.push({ id: doc.id, ...doc.data() });
      });

      showlist(membersData);
    });
  };

  const showlist = (membersData) => {
    const Bodylist = document.querySelector("#Applications_memberList");
    Bodylist.innerHTML = "";

    membersData.forEach((part) => {
      const card = `
        <div class="payment-card">
          <div class="card-header">
            <strong>${part.Surname}</strong>
            <strong>${part.FirstName}</strong>
          </div>
          <div class="card-body">
            <small>${part.Status}</small>
            <p><span>${part.Email}</span></p>
            <p><span>${part.PhoneNumber}</span></p>
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

  const showapprovedCards = (approvedmembersData) => {
    const Bodylist = document.querySelector("#Registered_memberList");
    Bodylist.innerHTML = "";

    approvedmembersData.forEach((side) => {
      const card = `
        <div class="payment-card">
          <div class="card-header">
            <strong>${side.Surname}</strong>
            <small>${side.FirstName}</small>
          </div>
          <div class="card-body">
            <small>${side.Status}</small>
            <p><span>${side.Email}</span></p>
            <p><span>${side.PhoneNumber}</span></p>
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

  // Event delegation for approved members
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

  fetchMembershipApplications();
  fetchApprovedmembers();
});
