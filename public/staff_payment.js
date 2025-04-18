import { db } from "./firebaseConfig.js";
import { doc, collection, deleteDoc, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

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
                        <p>Project ID: <span>${item.ProjectID}</span></p>
                        <p>Method: <span>${item.Method}</span></p>
                    </div>
                    <div class="card-footer">
                        <button class="approve-btn" data-id="${item.id}">Approve</button>
                        <button class="delete-btn" data-id="${item.id}">Delete</button>
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
                    console.log(`Payment ${paymentId} approved!`);
                });
            });
        });

        // Handle deletion functionality
        document.querySelectorAll(".delete-btn").forEach((button) => {
            button.addEventListener("click", function () {
                const paymentId = this.getAttribute("data-id");
                deleteDoc(doc(db, "ProjectPayments", paymentId)).then(() => {
                    console.log(`Payment ${paymentId} deleted!`);
                });
            });
        });
    };
});
