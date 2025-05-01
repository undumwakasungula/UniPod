import { db } from "./firebaseConfig.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
        if (!user) {
            console.error("No user logged in.");
            return;
        }

        const username = localStorage.getItem("username") || "Unknown Name";
        const role = localStorage.getItem("role") || "Unknown Role";

        const profilename = document.getElementById("account-name");
        const accounttype = document.getElementById("account-type");
        const statusIndicator = document.getElementById("statusIndicator");

        if (profilename) profilename.textContent = username;
        if (accounttype) accountTypeElement.textContent = role;
        if (!statusIndicator) {
            console.error("statusIndicator element not found!");
            return;
        }

        try {
            const userReference = doc(db, "users", user.uid);
            const usershot = await getDoc(userReference);

            if (!usershot.exists()) {
                console.error("User document not found");
                alert("User data not found. Please contact support.");
                return;
            }

            const membershipId = usershot.data().membershipId;

            if (!membershipId) {
                console.log("User is not a member.");
                statusIndicator.textContent = "Inactive";
                return;
            }

            const membershipRef = doc(db, "Membership", membershipId);
            const membershipSnap = await getDoc(membershipRef);

            if (!membershipSnap.exists()) {
                console.error("Membership document not found");
                statusIndicator.textContent = "Inactive";
                return;
            }

            const memberStatus = membershipSnap.data().Status;
            console.log("Membership Status:", memberStatus);

            statusIndicator.textContent = memberStatus === "Approved" ? "Active" : "Inactive";
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    });
});
