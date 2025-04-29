import { db } from "./firebaseConfig.js"
import { doc, collection,query,where,deleteDoc,onSnapshot,updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function(){
        
        const fetchMembershipApplications = () => {
            const memberRef = collection(db, "Membership"); // Reference the membership collection
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
    
        fetchMembershipApplications();
    
        
        const showlist = (membersData) => {
            const Bodylist = document.querySelector("#Applications_memberList");
            Bodylist.innerHTML = ""; 
    
            membersData.forEach((part) => {
                const card = `
                    <div class="payment-card">
                        <div class="card-header">
                            <strong>${part.Surname} </strong>
                            <strong>${part.FirstName}</strong>
                        </div>
                        <div class="card-body">
                            <small>${part.Status}</small>
                            <p><span>${part.Email}</span></p>
                            <p><span>${part.PhoneNumber}</span></p>
                        </div>
                        <div class="card-footer">
                            <button class="approved-btn"  btn-id="${part.id}" >
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
        }

                // Handle approval functionality
                document.querySelectorAll(".approved-btn").forEach((button) => {
                    button.addEventListener("click", function () {
                        const amembersId = this.getAttribute("btn-id");
                        
                        const confirmApprove = window.confirm("Are you sure you want to approve this member?");
        
                        if (confirmApprove){
                            updateDoc(doc(db, "Membership", amembersId), { Status: "Approved" }).then(() => {
        
                                
                                console.log(`Payment ${amembersId} aprroved`);
                            });
                           
        
                            
        
                            
                        }
                        else{
                            console.log(`Payment ${amembersId} not approved!`);
                        }
                    });
                });
        
                document.querySelectorAll(".delete-btn").forEach((button) => {
                    button.addEventListener("click", function () {
                        const amemberId = this.getAttribute("btn-id");
                
                        // Show confirmation dialog
                        const confirmDelete = window.confirm("Are you sure you want to delete this member?");
                        
                        if (confirmDelete) {
                            deleteDoc(doc(db, "Membership", amemberId)).then(() => {
                                console.log(`Payment ${amemberId} deleted!`);
                            }).catch((error) => {
                                console.error("Error deleting payment:", error);
                            });
                        }
                    });
                });


                    //fetch approved members
    const fetchApprovedmembers = () => {
        const approvedmemberRef = collection(db, "Membership"); // Reference the membership collection
        const approvedmemberQuery = query(approvedmemberRef, where("Status", "==", "Approved")); 
        
        onSnapshot(approvedmemberQuery, (snapshot) => {
            console.log("Approved approved members snapshot triggered!");

            const approvedmembersData = [];
            snapshot.forEach((doc) => {
                approvedmembersData.push({ id: doc.id, ...doc.data() }); 
            });

            
            showapprovedCards(approvedmembersData);
        });
    };
    fetchApprovedmembers();

        
        const showapprovedCards = (approvedmembersData) => {
            const Bodylist = document.querySelector("#Registered_memberList");
            Bodylist.innerHTML = ""; // Clear existing entries
    
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
                            <button class="btn-revoke"  dat-id="${side.id}" >
                                <i class="fa-solid fa-circle-xmark"></i> Revoke
                            </button>
                            <button class="delete-btn"  dat-id="${side.id}">
                                <i class="fa-solid fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>
                `;
                Bodylist.innerHTML += card;
            });
            
    
            // Handle revoke functionality
            document.querySelectorAll(".btn-revoke").forEach((button) => {
                button.addEventListener("click", function () {
                    const memberId = this.getAttribute("dat-id");
                    

                    const confirmrevoke = window.confirm("Are you sure you want to revoke this member?");

                    if (confirmrevoke){
                        updateDoc(doc(db, "Membership", memberId), { Status: "Pending" }).then(() => {
                            
                            console.log(`Membership ${memberId} revoked!`);
                        });
                    
                        
                    }
                    else{
                        console.log(`Membership ${memberId} not revoked!`);
                    }

                });
            });


                                    
            document.querySelectorAll(".delete-btn").forEach((button) => {
                button.addEventListener("click", function () {
                    const membersId = this.getAttribute("dat-id");
            
                    // Show confirmation dialog
                    const confirmDelete = window.confirm("Are you sure you want to delete this member?");
                    
                    if (confirmDelete) {
                        deleteDoc(doc(db, "Membership", membersId)).then(() => {
                            console.log(`Member ${membersId} deleted!`);
                        }).catch((error) => {
                            console.error("Error deleting payment:", error);
                        });
                    }
                });
            });
            
        };








});
