import { db } from "./firebaseConfig.js"
import { doc, collection,deleteDoc,onSnapshot,updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function(){
        
        const fetchMembershipApplications = () => {
            const memberRef = collection(db, "Membership"); // Reference the membership collection
            const pendingmemberQuery = query(memberRef, where("Status", "==", "Pending")); 
            
    s
            
            
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
            const Body_list = document.querySelector("#Applications_memberList");
            Body_list.innerHTML = ""; 
    
            membersData.forEach((item) => {
                const card = `
                    <div class="payment-card">
                        <div class="card-header">
                            <strong>${item.Surname} </strong>
                            <strong>${item.FirstName}</strong>
                        </div>
                        <div class="card-body">
                            <small>${item.Status}</small>
                            <p><span>${item.Email}</span></p>
                            <p><span>${item.PhoneNumber}</span></p>
                        </div>
                        <div class="card-footer">
                            <button class="approve-btn" id="approve_btn data-id="${item.id}" >
                                <i class="fa-solid fa-check-circle"></i> Approve
                            </button>
                            <button class="delete-btn" id="delete_btn" data-id="${item.id}">
                                <i class="fa-solid fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>
                `;
                Body_list.innerHTML += card;
            });
        }

                // Handle approval functionality
                document.querySelectorAll("#approve_btn").forEach((button) => {
                    button.addEventListener("click", function () {
                        const memberId = this.getAttribute("data-id");
                        
                        const confirmApprove = window.confirm("Are you sure you want to approve this member?");
        
                        if (confirmApprove){
                            updateDoc(doc(db, "Membership", memberId), { Status: "Approved" }).then(() => {
        
                                
                                console.log(`Payment ${memberId} aprroved`);
                            });
                           
        
                            
        
                            
                        }
                        else{
                            console.log(`Payment ${memberId} not approved!`);
                        }
                    });
                });
        
                document.querySelectorAll("#delete_btn").forEach((button) => {
                    button.addEventListener("click", function () {
                        const memberId = this.getAttribute("data-id");
                
                        // Show confirmation dialog
                        const confirmDelete = window.confirm("Are you sure you want to delete this member?");
                        
                        if (confirmDelete) {
                            deleteDoc(doc(db, "Membership", memberId)).then(() => {
                                console.log(`Payment ${memberId} deleted!`);
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
        
s
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
    
            approvedmembersData.forEach((item) => {
                const card = `
                    <div class="payment-card">
                        <div class="card-header">
                            <strong>${item.Surname}</strong>
                            <small>${item.FirstName}</small>
                        </div>
                        <div class="card-body">
                            <small>${item.Status}</small>
                            <p><span>${item.Email}</span></p>
                            <p><span>${item.PhoneNumber}</span></p>
                        </div>
                        <div class="card-footer">
                            <button class="revoke-btn" data-id="${item.id}" >
                                <i class="fa-solid fa-circle-xmark"></i> Revoke
                            </button>
                            <button class="delete-btn" data-id="${item.id}">
                                <i class="fa-solid fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>
                `;
                Bodylist.innerHTML += card;
            });
            
    
            // Handle revoke functionality
            document.querySelectorAll(".revoke-btn").forEach((button) => {
                button.addEventListener("click", function () {
                    const memberId = this.getAttribute("data-id");
                    

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
                    const memberId = this.getAttribute("data-id");
            
                    // Show confirmation dialog
                    const confirmDelete = window.confirm("Are you sure you want to delete this payment?");
                    
                    if (confirmDelete) {
                        deleteDoc(doc(db, "Membership", memberId)).then(() => {
                            console.log(`Member ${memberId} deleted!`);
                        }).catch((error) => {
                            console.error("Error deleting payment:", error);
                        });
                    }
                });
            });
            
        };








});