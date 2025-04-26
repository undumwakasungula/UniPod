import { db } from "./firebaseConfig.js";
import { doc, collection, deleteDoc,query,where, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
    // Fetch payment data from Firestore
    const fetchRealTimeData = () => {
        const paymentRef = collection(db, "ProjectPayments"); // Reference the payment collection
        
        // Listen for real-time updates
        onSnapshot(paymentRef, (snapshot) => {
            console.log("Snapshot triggered!");
            const paymentData = [];
            snapshot.forEach((doc) => {
                paymentData.push({ id: doc.id, ...doc.data() }); // Collect data from each document
            });

            // Render the updated data in cards
            showCards(paymentData);
        });
    };

    fetchRealTimeData();

    // Function to display payments in cards (instead of a table)
    const showCards = (paymentData) => {
        const listBody = document.querySelector("#RecentTrans_list");
        listBody.innerHTML = ""; // Clear existing entries

        paymentData.forEach((item) => {
            const card = `
                <div class="payment-card">
                    <div class="card-header">
                        <strong>${item.Client}</strong>
                        <small>${item.Email}</small>
                    </div>
                    <div class="card-body">
                        <small>${item.status}</small>
                        <p>Project ID: <span>${item.ProjectID}</span></p>
                        <p>Method: <span>${item.Method}</span></p>
                    </div>
                    <div class="card-footer">
                        <button class="approve-btn" data-id="${item.id}">
                            <i class="fa-solid fa-check-circle"></i> Approve
                        </button>
                        <button class="delete-btn" data-id="${item.id}">
                            <i class="fa-solid fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            `;
            listBody.innerHTML += card;
        });
        

        // Handle approval functionality
        document.querySelectorAll(".approve-btn").forEach((button) => {
            button.addEventListener("click", function () {
                const paymentId = this.getAttribute("data-id");
                updateDoc(doc(db, "ProjectPayments", paymentId), { status: "approved" }).then(() => {
                    document.querySelector(`.approve-btn[data-id="${paymentId}"]`).disabled = true; // Disable the button after approval
                    console.log(`Payment ${paymentId} approved!`);
                });
            });
        });

        document.querySelectorAll(".delete-btn").forEach((button) => {
            button.addEventListener("click", function () {
                const paymentId = this.getAttribute("data-id");
        
                // Show confirmation dialog
                const confirmDelete = window.confirm("Are you sure you want to delete this payment?");
                
                if (confirmDelete) {
                    deleteDoc(doc(db, "ProjectPayments", paymentId)).then(() => {
                        console.log(`Payment ${paymentId} deleted!`);
                    }).catch((error) => {
                        console.error("Error deleting payment:", error);
                    });
                }
            });
        });
        
    };

    //fetch approved payments
    const fetchApprovedPayments = () => {
        const paymentRef = collection(db, "ProjectPayments"); // Reference the payment collection
        const approvedQuery = query(paymentRef, where("status", "==", "approved")); // Query for approved payments
        
        // Listen for real-time updates
        onSnapshot(approvedQuery, (snapshot) => {
            console.log("Approved payments snapshot triggered!");
            if (snapshot.empty) {
                console.log("No approved payments found.");
                return;
            }
            const approvedPaymentsData = [];
            snapshot.forEach((doc) => {
                approvedPaymentsData.push({ id: doc.id, ...doc.data() }); // Collect data from each document
            });

            // Render the updated data in cards
            showapprovedCards(approvedPaymentsData);
        });
    };
    fetchApprovedPayments();

        // Function to display payments in cards (instead of a table)
        const showapprovedCards = (approvedPaymentsData) => {
            const Bodylist = document.querySelector("#ApprovedTrans_list");
            Bodylist.innerHTML = ""; // Clear existing entries
    
            approvedPaymentsData.forEach((item) => {
                const card = `
                    <div class="payment-card">
                        <div class="card-header">
                            <strong>${item.Client}</strong>
                            <small>${item.Email}</small>
                        </div>
                        <div class="card-body">
                            <small>${item.status}</small>
                            <p>Project ID: <span>${item.ProjectID}</span></p>
                            <p>Method: <span>${item.Method}</span></p>
                        </div>
                        <div class="card-footer">
                            <button class="approve-btn" data-id="${item.id}">
                                <i class="fa-solid fa-check-circle"></i> Approve
                            </button>
                            <button class="delete-btn" data-id="${item.id}">
                                <i class="fa-solid fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>
                `;
                Bodylist.innerHTML += card;
            });
            
    
            // Handle approval functionality
            document.querySelectorAll(".approve-btn").forEach((button) => {
                button.addEventListener("click", function () {
                    const paymentId = this.getAttribute("data-id");

                    const confirmApprove = window.confirm("Are you sure you want to approve this payment?");

                    if (confirmApprove){
                        updateDoc(doc(db, "ProjectPayments", paymentId), { status: "approved" }).then(() => {
                            document.querySelector(`.approve-btn[data-id="${paymentId}"]`).disabled = true; // Disable the button after approval
                            console.log(`Payment ${paymentId} approved!`);
                        });
                        
                    }
                    else{
                        console.log(`Payment ${paymentId} not approved!`);
                    }

                });
            });
    
            document.querySelectorAll(".delete-btn").forEach((button) => {
                button.addEventListener("click", function () {
                    const paymentId = this.getAttribute("data-id");
            
                    // Show confirmation dialog
                    const confirmDelete = window.confirm("Are you sure you want to delete this payment?");
                    
                    if (confirmDelete) {
                        deleteDoc(doc(db, "ProjectPayments", paymentId)).then(() => {
                            console.log(`Payment ${paymentId} deleted!`);
                        }).catch((error) => {
                            console.error("Error deleting payment:", error);
                        });
                    }
                });
            });
            
        };
});
