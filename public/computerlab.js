import { db } from "./firebaseConfig.js"
import { doc, collection,deleteDoc,onSnapshot, setDoc,updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function() {

    //computer equipment form trigger buttons
    const equip_form = document.getElementById("compu-equipmentForm");
    const  equip_close = document.getElementById("compu-cancel");
    const equip_trig = document.getElementById("add_compu_equip_btn");



    if (equip_trig) {
        equip_trig.addEventListener("click", function () {
            
            if (equip_form.style.display === "none") {
                equip_form.style.display = "block";
            }
        }
    );
    }
    if (equip_close) {
        equip_close.addEventListener("click", function () {
            if (equip_form.style.display === "block") {
                equip_form.style.display = "none";
            }
        }
    );
    }
    if (equip_form) {
        equip_form.addEventListener("submit", async (event) =>{
            
            event.preventDefault();

            let equipment = document.getElementById("compu-equipment").value;
            let serial = document.getElementById("compu-serial").value;
            let condition = document.getElementById("compu-condition").value;
            let availability = document.getElementById("compu-availability").value;
            
            

            try {
       
                    //storing equipment details in Firestore
                const equipmentDocRef = doc(collection(db, "ComputerLabEquip"));
                await setDoc(equipmentDocRef, {
                Equipment: equipment,
                Serial: serial, 
                Condition: condition,
                Availability: availability
            });
                equip_form.style.display = "none"; 
                showEquipSuccessMessage();
                

            }catch (error) {
                console.error("Error adding equipment:", error.message);
                showEquipfailMessage()
            }


        });
    }




    // Fetch equipment data from Firestore
const fetchRealTimeData = () => {
    const equipmentRef = collection(db, "ComputerLabEquip"); // Using collection to reference the entire collection
    
    // Listening for real-time updates
    onSnapshot(equipmentRef, (snapshot) => {
        console.log("Snapshot triggered!");
      const equipmentData = [];
      snapshot.forEach((doc) => {
        equipmentData.push({ id: doc.id, ...doc.data() }); // Collecting data from each document
      });
  
      // Render the updated data in the table
      showTable(equipmentData);
      updateAnalytics();
    });
  };
  
  fetchRealTimeData();
  
  const showTable = (equipmentData) => {
    const tableBody = document.querySelector("#compu_equip_table tbody");
    tableBody.innerHTML = ""; // Clear existing rows
    
    equipmentData.forEach((item) => {
      const row = `
        <tr>
          <td>${item.Equipment}</td>
          <td>${item.Serial}</td>
          <td>${item.Condition}</td>
          <td>${item.Availability}</td>
          <td>
          <div class="action-buttons">
            <button class="edit-btn" data-id="${item.id}">Edit</button>
            <button class="delete-btn" data-id="${item.id}">Delete</button>
          </div>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  
    //event listeners for edit and delete buttons
    document.querySelectorAll(".edit-btn").forEach((button) => {
      button.addEventListener("click", (e) => handleEdit(e.target.dataset.id));
    });
  
    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", (e) => handleDelete(e.target.dataset.id));
    });
  };
  
  // Edit functionality
  const handleEdit = (id) => {
    console.log(`Editing item with ID: ${id}`);
  
    // Prompt the user for updates 
    const equipment = prompt("Enter new equipment name (leave empty to keep existing):");
    const serial = prompt("Enter new serial number (leave empty to keep existing):");
    const condition = prompt("Enter new condition (leave empty to keep existing):");
    const availability = prompt("Enter new availability (leave empty to keep existing):");
  
    try {
      
      const itemRef = doc(db, "ComputerLabEquip", id);
  
      
      const updates = {};
  
      
      if (equipment) updates.Equipment = equipment;
      if (serial) updates.Serial = serial;
      if (condition) updates.Condition = condition;
      if (availability) updates.Availability = availability;
  
      // If there are updates, proceed with Firestore's updateDoc()
      if (Object.keys(updates).length > 0) {
        updateDoc(itemRef, updates)
          .then(() => {
            showEquipupdateMessage();
          })
          .catch((error) => {
            console.error("Error updating item:", error);
            showEquipupdatefailMessage();
          });
      } else {
        console.log("No updates provided.");
      }
      
      updateAnalytics();
    } catch (error) {
      console.error("Error handling edit operation:", error);
    }
  };
  
  
  const handleDelete = async (id, event) => {
    if(event) event.preventDefault();
    console.log(`Deleting item with ID: ${id}`);
  
    window.alert = () => {};
  
    
    const confirmMessage = confirm("Are you sure you want to delete this item?");
    if (confirmMessage) {
      try {
        
        const itemRef = doc(db, "ComputerLabEquip", id);
        await deleteDoc(itemRef);
  
       
        showEquipdeleteMessage();
      } catch (error) {
        console.error("Error deleting item:", error);
        showEquipdeletefailMessage();
      }
    } else {
      console.log("Delete operation was canceled.");
    }
  
    // Ensure analytics are updated after deletion attempt
    updateAnalytics();
  };
  
  function updateAnalytics() {
    const rows = document.querySelectorAll("#compu_equip_table tbody tr");

    let totalEquipment = 0;
    let goodEquipment = 0;
    let badEquipment = 0;
    let availableEquipment = 0;
    let notAvailableEquipment = 0;

    rows.forEach(row => {
        console.log(row.cells[2]?.textContent.trim(), row.cells[3]?.textContent.trim());
        totalEquipment++;
        if (row.cells.length >= 4) {
            const condition = row.cells[2].textContent.trim();
            const availability = row.cells[3].textContent.trim();
            

            if (condition === "Good") {
                goodEquipment++;
            } else {
                badEquipment++;
            }
    
            if (availability === "Available") {
                availableEquipment++;
            } else {
                notAvailableEquipment++;
            }
        }
        

    });

    // calculated values
    const total = document.getElementById("totalCompuEquipment");
    const goodElements = document.getElementById("goodCompuEquipment");
    const badElements = document.getElementById("badCompuEquipment");
    const availableElements = document.getElementById("CompuavailableEquipment");
    const notAvailableElements = document.getElementById("CompunotAvailableEquipment");

    if (total) total.textContent = totalEquipment;
    if (goodElements) goodElements.textContent = goodEquipment;
    if (badElements) badElements.textContent = badEquipment;
    if (availableElements) availableElements.textContent = availableEquipment;
    if (notAvailableElements) notAvailableElements.textContent = notAvailableEquipment;
}

updateAnalytics();


//functions for equip messages
function showEquipSuccessMessage(){
    const message = document.getElementById("compu-equip_success_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showEquipfailMessage(){
    const message = document.getElementById("compu-equip_fail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showEquipdeleteMessage(){
    const message = document.getElementById("compu-equip_delete_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showEquipdeletefailMessage(){
    const message = document.getElementById("compu-equip_deleteFail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  function showEquipupdateMessage(){
    const message = document.getElementById("compu-equip_update_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
 function showEquipupdatefailMessage(){
    const message = document.getElementById("compu-equip_updateFail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  

function showEquipdeleteMessage(){
    const message = document.getElementById("compu-equip_delete_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  

});
