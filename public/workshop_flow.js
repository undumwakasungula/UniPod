import { db } from "./firebaseConfig.js"
import { doc, collection,deleteDoc,onSnapshot, setDoc,updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
document.addEventListener("DOMContentLoaded", function () {
    const compu_equip_window = document.getElementById("compu-equip-window");
    const audio_equip_window = document.getElementById("audio-equip-window");  
    const tronics_equip_window = document.getElementById("tronics-equip-window");
    const mech_equip_window = document.getElementById("mech-equip-window");
    const wood_equip_window = document.getElementById("wood-equip-window");
    const cnc_equip_window = document.getElementById("cnc-equip-window");
    const audio_projects_window = document.getElementById("audio-project-window");
    const tronics_projects_window = document.getElementById("tronics-project-window");
    const mech_projects_window = document.getElementById("mech-project-window");
    const wood_projects_window = document.getElementById("wood-project-window");
    const cnc_projects_window = document.getElementById("cnc-project-window"); 
   //kinda button in here
    const compu_equip = document.getElementById("compu-equip");
    const audio_equip = document.getElementById("audio-equip");
    const tronics_equip = document.getElementById("tronics-equip");
    const mecha_equip = document.getElementById("mech-equip");
    const wood_equip = document.getElementById("wood-equip");
    const cnc_equip = document.getElementById("cnc-equip");
    const audio_projects = document.getElementById("audio-projects");
    const tronics_projects = document.getElementById("tronics-projects");
    const mecha_projects = document.getElementById("mech-projects");
    const wood_projects = document.getElementById("wood-projects");
    const cnc_projects = document.getElementById("cnc-projects");

    //add equipment form trigger btn
    const equip_trigger = document.getElementById("add_equip_btn");
    const equip_form = document.getElementById("equipmentForm");
    const  equip_close = document.getElementById("cancel");


    if (compu_equip) {
        compu_equip.addEventListener("click", function compuEquip() {
            if (compu_equip_window.style.display === "none") {
                compu_equip_window.style.display = "block";
            }
        });
    }
    if (audio_equip) {
        audio_equip.addEventListener("click", function audioEquip() {
            if (audio_equip_window.style.display === "none") {
                audio_equip_window.style.display = "block";
            }
            if (audio_equip_window.style.display === "block") {
                audio_projects_window.style.display = "none";
            }
        });
    }
    if (tronics_equip) {
        tronics_equip.addEventListener("click", function tronicsEquip() {
            if (tronics_equip_window.style.display === "none") {
                tronics_equip_window.style.display = "block";
            }
            if (tronics_equip_window.style.display === "block") {
                tronics_projects_window.style.display = "none";
            }
        });
    }
    if (mecha_equip) {
        mecha_equip.addEventListener("click", function mechaEquip() {
            if (mech_equip_window.style.display === "none") {
                mech_equip_window.style.display = "block";
            }
            if (mech_equip_window.style.display === "block") {
                mech_projects_window.style.display = "none";
            }
        });
    }
    if (wood_equip) {
        wood_equip.addEventListener("click", function woodEquip() {
            if (wood_equip_window.style.display === "none") {
                wood_equip_window.style.display = "block";
            }
            if (wood_equip_window.style.display === "block") {
                wood_projects_window.style.display = "none";
            }
        });
    }
    if (cnc_equip) {
        cnc_equip.addEventListener("click", function cncEquip() {
            if (cnc_equip_window.style.display === "none") {
                cnc_equip_window.style.display = "block";
            }
            if (cnc_equip_window.style.display === "block") {
                cnc_projects_window.style.display = "none";
            }
        });
    }
    if (audio_projects) {
        audio_projects.addEventListener("click", function audioProjects() {
            if (audio_projects_window.style.display === "none") {
                audio_projects_window.style.display = "block";
            }
            if (audio_projects_window.style.display === "block") {
                audio_equip_window.style.display = "none";
            }
        });
    }
    if (tronics_projects) {
        tronics_projects.addEventListener("click", function tronicsProjects() {
            if (tronics_projects_window.style.display === "none") {
                tronics_projects_window.style.display = "block";
            }
            if (tronics_projects_window.style.display === "block") {
                tronics_equip_window.style.display = "none";
            }
        });
    }
    if (mecha_projects) {
        mecha_projects.addEventListener("click", function mechaProjects() {
            if (mech_projects_window.style.display === "none") {
                mech_projects_window.style.display = "block";
            }
            if (mech_projects_window.style.display === "block") {
                mech_equip_window.style.display = "none";
            }
        });
    }
    if (wood_projects) {
        wood_projects.addEventListener("click", function woodProjects() {
            if (wood_projects_window.style.display === "none") {
                wood_projects_window.style.display = "block";
            }
            if (wood_projects_window.style.display === "block") {
                wood_equip_window.style.display = "none";
            }
        });
    }
    if (cnc_projects) {
        cnc_projects.addEventListener("click", function cncProjects() {
            if (cnc_projects_window.style.display === "none") {
                cnc_projects_window.style.display = "block";
            }
            if (cnc_projects_window.style.display === "block") {
                cnc_equip_window.style.display = "none";
            }
        });
    }
    if (equip_trigger) {
        equip_trigger.addEventListener("click", function () {
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

            let equipment = document.getElementById("equipment").value;
            let serial = document.getElementById("serial").value;
            let condition = document.getElementById("condition").value;
            let availability = document.getElementById("availability").value;
            
            

            try {
       
                    //storing equipment details in Firestore
                const equipmentDocRef = doc(collection(db, "ElectronicsLab"));
                await setDoc(equipmentDocRef, {
                Equipment: equipment,
                Serial: serial, 
                Condition: condition,
                Availability: availability
            });
                alert("Equipment added successfully!");
                equip_form.style.display = "none"; 

            }catch (error) {
                console.error("Error adding equipment:", error.message);
                alert("Error: " + error.message);
            }


        });
    }

// Fetch equipment data from Firestore
const fetchRealTimeData = () => {
    const equipmentRef = collection(db, "ElectronicsLab"); // Use collection to reference the entire collection
    
    // Listen for real-time updates
    onSnapshot(equipmentRef, (snapshot) => {
        console.log("Snapshot triggered!");
      const equipmentData = [];
      snapshot.forEach((doc) => {
        equipmentData.push({ id: doc.id, ...doc.data() }); // Collect data from each document
      });
  
      // Render the updated data in the table
      showTable(equipmentData);
      updateAnalytics();
    });
  };
  
  fetchRealTimeData();
  
  const showTable = (equipmentData) => {
    const tableBody = document.querySelector("#equip_table tbody");
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
    const equipment = prompt("Enter new equipment name:");
    const serial = prompt("Enter new serial number:");
    const condition = prompt("Enter new condition:");
    const availability = prompt("Enter new availability:");

    if (equipment || serial || condition || availability) {
      try {
        // Use Firestore's updateDoc() to update the specific document
        const itemRef = doc(db, "ElectronicsLab", id);
        updateDoc(itemRef, {
          Equipment: equipment,
          Serial: serial,
          Condition: condition,
          Availability: availability
        });
        alert("Item updated successfully!");
      } catch (error) {
        console.error("Error updating item:", error);
        alert("Error: " + error.message);
      }
    }
    updateAnalytics();
  };
  
  // Delete functionality
  const handleDelete = async (id) => {
    console.log(`Deleting item with ID: ${id}`);
    const Confirm_message = confirm("Are you sure you want to delete this item?");
    if (Confirm_message){
        try {
            // Use Firestore's deleteDoc() to delete the specific document
            const itemRef = doc(db, "ElectronicsLab", id);
            await deleteDoc(itemRef);
            alert("Item deleted successfully!");
          } catch (error) {
            console.error("Error deleting item:", error);
            alert("Error: " + error.message);
          }
    }
    updateAnalytics();

  };
  function updateAnalytics() {
    const rows = document.querySelectorAll("table tbody tr");

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
    const totalElement = document.getElementById("totalEquipment");
    const goodElement = document.getElementById("goodEquipment");
    const badElement = document.getElementById("badEquipment");
    const availableElement = document.getElementById("availableEquipment");
    const notAvailableElement = document.getElementById("notAvailableEquipment");

    if (totalElement) totalElement.textContent = totalEquipment;
    if (goodElement) goodElement.textContent = goodEquipment;
    if (badElement) badElement.textContent = badEquipment;
    if (availableElement) availableElement.textContent = availableEquipment;
    if (notAvailableElement) notAvailableElement.textContent = notAvailableEquipment;
}

updateAnalytics();

function toggleMenu(){
    const menu_button = document.getElementById("menu_btn");
    const nav_list = document.querySelector("ul");
    const left_main = document.querySelector(".left-main");
    menu_button.addEventListener("click", function(){
        if(nav_list.style.display === "none"){
            nav_list.style.display = "block";
        }else{
            nav_list.style.display = "none";
        }
        if(left_main.style.display === "none"){
            left_main.style.display = "block";
        }
        else{
            left_main.style.display = "none";
        }
    });
}
toggleMenu();


});

  
    