import { db } from "./firebaseConfig.js"
import { doc, collection,deleteDoc,onSnapshot, setDoc,updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded",function(){

    const membership_form = document.getElementById("studentMemberForm");


    if(membership_form){
        membership_form.addEventListener("submit", async (event) =>{
            
            event.preventDefault();

            let Surname = document.getElementById("membersName").value;
            let FirstName = document.getElementById("memberfName").value;
            let PhoneNumber = document.getElementById("memberphone").value;
            let Email = document.getElementById("membermail").value;
            let Status = "Pending";
            
            

            try {
       
                    //storing member details in Firestore
                const membersDocRef = doc(collection(db, "Membership"));
                await setDoc(membersDocRef, {
                Surname: Surname,
                FirstName: FirstName, 
                Email: Email,
                PhoneNumber: PhoneNumber,
                Status:Status
            });
              alert("membership application successful");
                
                

            }catch (error) {
                console.error("Error adding equipment:", error.message);
                alert("membership application was not successful, try again later");
                
            }


        });
    }

} );