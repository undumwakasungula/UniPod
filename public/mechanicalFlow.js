import { db } from "./firebaseConfig.js"
import { doc, collection,deleteDoc,onSnapshot, setDoc,updateDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function() {

    //computer equipment form trigger buttons
    const equip_form = document.getElementById("mech-equipmentForm");
    const  equip_close = document.getElementById("mech-cancel");
    const equip_trig = document.getElementById("mech-add_equip_btn");

    //computer project form trigger buttons
    const project_trigger = document.getElementById("mech-add_project_btn");
    const project_form = document.getElementById("mech-projectForm");
    const project_close = document.getElementById("mech_cancel_project");

    if (project_trigger) {
        project_trigger.addEventListener("click", function () {
        
            if (project_form.style.display === "none") {
                project_form.style.display = "block";
            }
        }
    );
    }
    if (project_close) {
        project_close.addEventListener("click", function () {
            
            if (project_form.style.display === "block") {
                project_form.style.display = "none";
            }
        }
    );
    }

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

            let equipment = document.getElementById("mech-equipment").value;
            let serial = document.getElementById("mech-serial").value;
            let condition = document.getElementById("mech-condition").value;
            let availability = document.getElementById("mech-availability").value;
            
            

            try {
       
                    //storing equipment details in Firestore
                const equipmentDocRef = doc(collection(db, "MechanicalLab"));
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



    const mechspinner = document.querySelector("#mech_equip_spinner");
    mechspinner.style.display = "flex"; // Show spinner when the page loads

    // Fetch equipment data from Firestore
const fetchRealTimeData = () => {
    const equipmentRef = collection(db, "MechanicalLab"); // Using collection to reference the entire collection
    
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
        mechspinner.style.display = "none"; // Hide spinner after data is loaded
    });
  };
  
  fetchRealTimeData();
  
  const showTable = (equipmentData) => {
    const tableBody = document.querySelector("#mech_equip_table tbody");
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
            <button class="edit-btn" data-id="${item.id}"><i class="fa-solid fa-edit" style="margin-right:8px; width:fit-content;"></i>Edit</button>
            <button class="delete-btn" data-id="${item.id}"><i class="fa-solid fa-trash" style="margin-right:8px; width:fit-content;"></i>Delete</button>
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
      
      const itemRef = doc(db, "Mechanical", id);
  
      
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
        
        const itemRef = doc(db, "MechanicalLab", id);
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
    const rows = document.querySelectorAll("#mech_equip_table tbody tr");

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
    const total = document.getElementById("totalMechEquipment");
    const goodElements = document.getElementById("goodMechEquipment");
    const badElements = document.getElementById("badMechEquipment");
    const availableElements = document.getElementById("MechavailableEquipment");
    const notAvailableElements = document.getElementById("MechnotAvailableEquipment");

    if (total) total.textContent = totalEquipment;
    if (goodElements) goodElements.textContent = goodEquipment;
    if (badElements) badElements.textContent = badEquipment;
    if (availableElements) availableElements.textContent = availableEquipment;
    if (notAvailableElements) notAvailableElements.textContent = notAvailableEquipment;
}

updateAnalytics();

if (project_form) {
    project_form.addEventListener("submit", async (event) => {
        event.preventDefault();
        let project = document.getElementById("mech_project").value;
        let client = document.getElementById("mech_client").value;
        let registered_client = document.getElementById("clientmechdown").value;
        let duration = document.getElementById("mech_duration").value;
        let projectID = generateProjectID();
        let currentTime = new Date();
        let timestamp = currentTime.toISOString();
        let authorization = "Pending"; // Default value for authorization
        try {
            // Storing projects details in Firestore
            const projectsDocRef = doc(collection(db, "MechanicalLabProjects"));
            await setDoc(projectsDocRef, {
                Project: project,
                Client: registered_client||client,
                Project_ID: projectID,
                Duration: duration,
                Create_Date: timestamp,
                Authorization: authorization

            });
            showProjectSuccessMessage();
            project_form.style.display = "none";
        } catch (error) {
            console.error("Error creating project:", error.message);
            showProjectfailMessage();
        }
    });

    function generateProjectID() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let projectID = "";
        for (let i = 0; i < 7; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            projectID += chars[randomIndex];
        }
        return projectID;
    }
}

  const mechprospinner = document.querySelector("#mech_project_spinner");
  mechprospinner.style.display = "flex"; // Show spinner when the page loads
// Fetching project data from Firestore
const fetchTronicsRealTimeDataProjects = () => {
    const projectRef = collection(db, "MechanicalLabProjects");
    // Listening for real-time updates
    onSnapshot(projectRef, (snapshot) => {
        console.log("Snapshot triggered!");
        const projectsData = [];
        snapshot.forEach((doc) => {
            projectsData.push({ id: doc.id, ...doc.data() }); // Collecting data from each document
        });
        // Render the updated data in the table
        showProjectTable(projectsData);
        updateProjectsAnalytics();
        mechprospinner.style.display = "none";
    });
};
fetchTronicsRealTimeDataProjects();

const showProjectTable = (projectsData) => {
    const tableBody = document.querySelector("#mech_project_table tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    projectsData.forEach((item) => {
        const createdAt = new Date(item.Create_Date);
        const durationWeeks = item.Duration; // Assuming duration is in weeks
        // Calculate the project's end date
        const endDate = new Date(createdAt);
        endDate.setDate(createdAt.getDate() + (durationWeeks * 7)); // Add duration (in weeks converted to days)
        // Determine the project status
        const currentDate = new Date(); // Get the current date
        const Status = currentDate > endDate ? "Completed" : "In Progress";
        const row = `
            <tr>
                <td>${item.Project}</td>
                <td>${item.Client}</td>
                <td>${item.Project_ID}</td>
                <td>${Status}</td>
                <td>${item.Authorization}</td>
                <td>${item.Duration}</td>
                <td>${item.Create_Date}</td>
                <td>
                    <div class="action-buttons">
            <button class="edit-btn" data-id="${item.id}"><i class="fa-solid fa-edit" style="margin-right:8px; width:fit-content;"></i>Edit</button>
            <button class="delete-btn" data-id="${item.id}"><i class="fa-solid fa-trash" style="margin-right:8px; width:fit-content;"></i>Delete</button>
                    </div>
                </td>
            <tr>
        `;
        tableBody.innerHTML += row;
    });

    // Event listeners for edit and delete buttons
    document.querySelectorAll(".edit-btn").forEach((button) => {
        button.addEventListener("click", (e) => Edithandler(e.target.dataset.id));
    });
    document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", (e) => handler_Delete(e.target.dataset.id));
    });
};

// Edit functionality
const Edithandler = (id) => {
    console.log(`Editing item with ID: ${id}`);
    // Prompt the user for updates
    const project = prompt("Enter project name (leave empty to keep existing):");
    const client = prompt("Enter client (leave empty to keep existing):");
    const duration = prompt("Enter duration (leave empty to keep existing):");
    try {
        const itemRef = doc(db, "MechanicalLabProjects", id);
        const updates = {};
        if (project) updates.Project = project;
        if (client) updates.Client = client;
        if (duration) updates.Duration = duration;
        // If there are updates, proceed with Firestore's updateDoc()
        if (Object.keys(updates).length > 0) {
            updateDoc(itemRef, updates)
                .then(() => {
                    showProjectupdateMessage();
                })
                .catch((error) => {
                    console.error("Error updating item:", error);
                    showProjectupdatefailMessage();
                });
        } else {
            console.log("No updates provided.");
        }
        updateProjectsAnalytics();
    } catch (error) {
        console.error("Error handling edit operation:", error);
    }
};

// Delete functionality
const handler_Delete = async (id) => {
    console.log(`Deleting item with ID: ${id}`);
    const Confirm_message = confirm("Are you sure you want to delete this item?");
    if (Confirm_message) {
        try {
            // Use Firestore's deleteDoc() to delete the specific document
            const itemRef = doc(db, "MechanicalLabProjects", id);
            await deleteDoc(itemRef);
            showProjectdeleteMessage();
        } catch (error) {
            console.error("Error deleting item:", error);
            showProjectdeletefailMessage();
        }
    }
    updateProjectsAnalytics();
};

function updateProjectsAnalytics() {
    const rows = document.querySelectorAll("#mech_project_table tbody tr"); 
    let totalProjects = rows.length/2; 
    let ActiveProjects = 0;
    let CompleteProjects = 0;

    rows.forEach(row => {
        if (row.cells.length >= 4) { 
            const status = row.cells[3].textContent.trim();
            if (status === "In Progress") {
                ActiveProjects++;
            } else if (status === "Completed") {
                CompleteProjects++;
            }
        }
    });

    // Update analytics display
    const totalP = document.getElementById("totalMechProjects");
    const ActiveP = document.getElementById("MechActiveProjects");
    const CompleteP = document.getElementById("MechCompleteProjects");

    if (totalP) totalP.textContent = totalProjects;
    if (ActiveP) ActiveP.textContent = ActiveProjects;
    if (CompleteP) CompleteP.textContent = CompleteProjects;
}

// Initial update
updateProjectsAnalytics();



//functions for equip messages
function showEquipSuccessMessage(){
    const message = document.getElementById("mech-equip_success_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showEquipfailMessage(){
    const message = document.getElementById("mech-equip_fail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showEquipdeleteMessage(){
    const message = document.getElementById("mech-equip_delete_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showEquipdeletefailMessage(){
    const message = document.getElementById("mech-equip_deleteFail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  function showEquipupdateMessage(){
    const message = document.getElementById("mech-equip_update_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
 function showEquipupdatefailMessage(){
    const message = document.getElementById("mech-equip_updateFail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  

function showEquipdeleteMessage(){
    const message = document.getElementById("mech-equip_delete_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
//functions for project messages
function showProjectSuccessMessage(){
    const message = document.getElementById("mech-project_success_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showProjectfailMessage(){
    const message = document.getElementById("mech-project_fail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);





}  
function showProjectdeleteMessage(){
    const message = document.getElementById("mech-project_delete_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showProjectdeletefailMessage(){
    const message = document.getElementById("mech-project_deleteFail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  function showProjectupdateMessage(){
    const message = document.getElementById("mech-project_update_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
 function showProjectupdatefailMessage(){
    const message = document.getElementById("mech-project_updateFail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  

function showProjectdeleteMessage(){
    const message = document.getElementById("mech-project_delete_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  

populateClientDropdown();



});
function populateClientDropdown() {
    const clientDropdown = document.getElementById("clientmechdown");
    const usersRef = collection( db,"users"); 

    onSnapshot(usersRef,(snapshot) => {
        snapshot.forEach(doc => {
            let userData = doc.data();
            let option = document.createElement("option");
            option.value = doc.id;
            option.textContent = userData.name;  
            clientDropdown.appendChild(option);
        });
    }).catch(error => {
        console.error("Error fetching clients:", error);
    });
}


document.getElementById("mech_search_project").addEventListener('input', debounce(function () {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#mech_project_table_div tbody tr');

    rows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (searchValue === "" || rowText.includes(searchValue)) {
            row.style.display = ""; // Show matching rows
        } else {
            row.style.display = "none"; // Hide non-matching rows
        }
    });
}, 200)); 

document.getElementById("mech-search_equip").addEventListener('input', debounce(function () {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#mech_equip_table_div tbody tr');

    rows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (searchValue === "" || rowText.includes(searchValue)) {
            row.style.display = ""; // Show matching rows
            
        } else {
            row.style.display = "none"; // Hide non-matching rows
        }
    });
}, 200)); 

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}
