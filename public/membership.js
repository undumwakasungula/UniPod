import { db } from "./firebaseConfig.js"
import { doc, collection,deleteDoc,onSnapshot, setDoc,updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function(){
        
        const fetchMembershipApplications = () => {
            const memberRef = collection(db, "Membership"); 
            
            
            onSnapshot(memberRef, (snapshot) => {
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
            const Body_list = document.querySelector("#Application_memberList");
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
                            <p>Project ID: <span>${item.Email}</span></p>
                            <p>Method: <span>${item.PhoneNumber}</span></p>
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





});