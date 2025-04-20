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
  //same just small difference

  const compu_equipdd = document.getElementById("compu-equipd");
  const audio_equipdd = document.getElementById("audio-equipd");
  const tronics_equipdd = document.getElementById("tronics-equipd");
  const mecha_equipdd = document.getElementById("mech-equipd");
  const wood_equipdd = document.getElementById("wood-equipd");
  const cnc_equipdd = document.getElementById("cnc-equipd");
  const audio_projectsdd = document.getElementById("audio-projectsd");
  const tronics_projectsdd = document.getElementById("tronics-projectsd");
  const mecha_projectsdd = document.getElementById("mech-projectsd");
  const wood_projectsdd = document.getElementById("wood-projectsd"); 
  const cnc_projectsdd= document.getElementById("cnc-projectsd");
    //add equipment form trigger btn
    const equip_trigger = document.getElementById("add_equip_btn");
    const equip_form = document.getElementById("equipmentForm");
    const  equip_close = document.getElementById("equip-cancel");
    //add project form trigger btn
    const project_trigger = document.getElementById("add_project_btn");
    const project_form = document.getElementById("projectForm");
    const project_close = document.getElementById("tronics_cancel_project");



    if (compu_equip) {
        compu_equip.addEventListener("click", function compuEquip() {
            if (compu_equip_window.style.display === "none") {
                
                compu_equip_window.style.display = "block";
            }
        });
    }
    if (compu_equipdd) {
        
        compu_equipdd.addEventListener("click", function compuEquip() {
            if (compu_equip_window.style.display === "none") {
                
                compu_equip_window.style.display = "block";
            }
        });
    }
    if (audio_equip ) {
        
        audio_equip.addEventListener("click", function audioEquip() {
        
            if (audio_equip_window.style.display === "none") {
                audio_equip_window.style.display = "block";
            }
            if (audio_equip_window.style.display === "block") {
                audio_projects_window.style.display = "none";
            }
        });
    }

    if (audio_equipdd) {
        
        audio_equipdd.addEventListener("click", function audioEquip() {
            
            if (audio_equip_window.style.display === "none") {
                audio_equip_window.style.display = "block";
            }
            if (audio_equip_window.style.display === "block") {
                audio_projects_window.style.display = "none";
            }
        });
    }
    if (tronics_equip || tronics_equipdd) {
        const targetEle = tronics_equip || tronics_equipdd;
        targetEle.addEventListener("click", function tronicsEquip() {
            if (tronics_equip_window.style.display === "none") {
                tronics_equip_window.style.display = "block";
            }
            if (tronics_equip_window.style.display === "block") {
                tronics_projects_window.style.display = "none";
            }
        });
    }

    if (tronics_equipdd) {
        
       tronics_equipdd.addEventListener("click", function tronicsEquip() {
            if (tronics_equip_window.style.display === "none") {
                tronics_equip_window.style.display = "block";
            }
            if (tronics_equip_window.style.display === "block") {
                tronics_projects_window.style.display = "none";
            }
        });
    }
    if (mecha_equip || mecha_equipdd) {
        const targetEle = mecha_equip || mecha_equipdd;
        targetEle.addEventListener("click", function mechaEquip() {
            if (mech_equip_window.style.display === "none") {
                mech_equip_window.style.display = "block";
            }
            if (mech_equip_window.style.display === "block") {
                mech_projects_window.style.display = "none";
            }
        });
    }

    if (mecha_equipdd) {
        
        mecha_equipdd.addEventListener("click", function mechaEquip() {
            if (mech_equip_window.style.display === "none") {
                mech_equip_window.style.display = "block";
            }
            if (mech_equip_window.style.display === "block") {
                mech_projects_window.style.display = "none";
            }
        });
    }
    if (wood_equip ) {
        
        wood_equip.addEventListener("click", function woodEquip() {
            if (wood_equip_window.style.display === "none") {
                wood_equip_window.style.display = "block";
            }
            if (wood_equip_window.style.display === "block") {
                wood_projects_window.style.display = "none";
            }
        });
    }

    if (wood_equipdd) {
        
        wood_equipdd.addEventListener("click", function woodEquip() {
            if (wood_equip_window.style.display === "none") {
                wood_equip_window.style.display = "block";
            }
            if (wood_equip_window.style.display === "block") {
                wood_projects_window.style.display = "none";
            }
        });
    }
    if (cnc_equip ) {
        
        cnc_equip.addEventListener("click", function cncEquip() {
            
            if (cnc_equip_window.style.display === "none") {
                cnc_equip_window.style.display = "block";
            }
            if (cnc_equip_window.style.display === "block") {
                cnc_projects_window.style.display = "none";
            }
        });
    }


    if (cnc_equipdd ) {
        
        cnc_equipdd.addEventListener("click", function cncEquip() {
            
            if (cnc_equip_window.style.display === "none") {
                cnc_equip_window.style.display = "block";
            }
            if (cnc_equip_window.style.display === "block") {
                cnc_projects_window.style.display = "none";
            }
        });
    }
    
    if (audio_projects ) {
        
        audio_projects.addEventListener("click", function audioProjects() {
            alert("dhhdff");
            if (audio_projects_window.style.display === "none") {
                audio_projects_window.style.display = "block";
            }
            if (audio_projects_window.style.display === "block") {
                audio_equip_window.style.display = "none";
            }
        });
    }

    if (audio_projectsdd ) {
        
        audio_projectsdd.addEventListener("click", function audioProjects() {
            if (audio_projects_window.style.display === "none") {
                audio_projects_window.style.display = "block";
            }
            if (audio_projects_window.style.display === "block") {
                audio_equip_window.style.display = "none";
            }
        });
    }
    if (tronics_projects ) {
        
        tronics_projects.addEventListener("click", function tronicsProjects() {
            
            if (tronics_projects_window.style.display === "none") {
                tronics_projects_window.style.display = "block";
            }
            if (tronics_projects_window.style.display === "block") {
                tronics_equip_window.style.display = "none";
            }
        });
    }
    if (tronics_projectsdd ) {
        
        tronics_projectsdd.addEventListener("click", function tronicsProjects() {
            
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


    if (mecha_projectsdd) {
        
        mecha_projectsdd.addEventListener("click", function mechaProjects() {
            if (mech_projects_window.style.display === "none") {
                mech_projects_window.style.display = "block";
            }
            if (mech_projects_window.style.display === "block") {
                mech_equip_window.style.display = "none";
            }
        });
    }

    if (wood_projects ) {
        
        wood_projects.addEventListener("click", function woodProjects() {
            if (wood_projects_window.style.display === "none") {
                wood_projects_window.style.display = "block";
            }
            if (wood_projects_window.style.display === "block") {
                wood_equip_window.style.display = "none";
            }
        });
    }

    if (wood_projectsdd ) {
        
        wood_projectsdd.addEventListener("click", function woodProjects() {
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

    if (cnc_projectsdd) {
        
        cnc_projectsdd.addEventListener("click", function cncProjects() {
            if (cnc_projects_window.style.display === "none") {
                cnc_projects_window.style.display = "block";
            }
            if (cnc_projects_window.style.display === "block") {
                cnc_equip_window.style.display = "none";
            }
        });
    }

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
      
      const itemRef = doc(db, "ElectronicsLab", id);
  
      
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
        
        const itemRef = doc(db, "ElectronicsLab", id);
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
    const total = document.getElementById("totalEquipment");
    const goodElements = document.getElementById("goodEquipment");
    const badElements = document.getElementById("badEquipment");
    const availableElements = document.getElementById("availableEquipment");
    const notAvailableElements = document.getElementById("notAvailableEquipment");

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
        let project = document.getElementById("tronics_project").value;
        let client = document.getElementById("tronics_client").value;
        let duration = document.getElementById("tronics_duration").value;
        let projectID = generateProjectID();
        let currentTime = new Date();
        let timestamp = currentTime.toISOString();
        try {
            // Storing projects details in Firestore
            const projectsDocRef = doc(collection(db, "ElectronicsLabProjects"));
            await setDoc(projectsDocRef, {
                Project: project,
                Client: client,
                Project_ID: projectID,
                Duration: duration,
                Create_Date: timestamp
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

// Fetch project data from Firestore
const fetchTronicsRealTimeDataProjects = () => {
    const projectRef = collection(db, "ElectronicsLabProjects");
    // Listen for real-time updates
    onSnapshot(projectRef, (snapshot) => {
        console.log("Snapshot triggered!");
        const projectsData = [];
        snapshot.forEach((doc) => {
            projectsData.push({ id: doc.id, ...doc.data() }); // Collect data from each document
        });
        // Render the updated data in the table
        showProjectTable(projectsData);
        updateProjectsAnalytics();
    });
};
fetchTronicsRealTimeDataProjects();

const showProjectTable = (projectsData) => {
    const tableBody = document.querySelector("#tronics_project_table tbody");
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
                        <button class="edit-btn" data-id="${item.id}">Edit</button>
                        <button class="delete-btn" data-id="${item.id}">Delete</button>
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
        const itemRef = doc(db, "ElectronicsLabProjects", id);
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
            const itemRef = doc(db, "ElectronicsLabProjects", id);
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
    const rows = document.querySelectorAll("#tronics_project_table tbody tr"); 
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
    const totalP = document.getElementById("totalProjects");
    const ActiveP = document.getElementById("ActiveProjects");
    const CompleteP = document.getElementById("CompleteProjects");

    if (totalP) totalP.textContent = totalProjects;
    if (ActiveP) ActiveP.textContent = ActiveProjects;
    if (CompleteP) CompleteP.textContent = CompleteProjects;
}

// Initial update
updateProjectsAnalytics();

function toggleMenu(){
    const menu_button = document.getElementById("menu_btn");
    const menu_bar = document.getElementById("menu_bar");
    menu_button.addEventListener("click", (event)=>{

        menu_bar.style.display = "block";
        menu_bar.classList.toggle("open");
        event.stopPropagation();

    });
    document.addEventListener("click", (event) => {
        if (!menu_bar.contains(event.target) && !menu_btn.contains(event.target)) {
            menu_bar.classList.remove("open");
        }
    });
}
toggleMenu();


document.getElementById("search_project").addEventListener('input', debounce(function () {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#project_table_div tbody tr');

    rows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (searchValue === "" || rowText.includes(searchValue)) {
            row.style.display = ""; // Show matching rows
        } else {
            row.style.display = "none"; // Hide non-matching rows
        }
    });
}, 300)); 

document.getElementById("search_equip").addEventListener('input', debounce(function () {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#equip_table_div tbody tr');

    rows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (searchValue === "" || rowText.includes(searchValue)) {
            row.style.display = ""; // Show matching rows
            
        } else {
            row.style.display = "none"; // Hide non-matching rows
        }
    });
}, 300)); 

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

//functions for equip messages
function showEquipSuccessMessage(){
    const message = document.getElementById("equip_success_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showEquipfailMessage(){
    const message = document.getElementById("equip_fail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showEquipdeleteMessage(){
    const message = document.getElementById("equip_delete_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showEquipdeletefailMessage(){
    const message = document.getElementById("equip_deleteFail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  function showEquipupdateMessage(){
    const message = document.getElementById("equip_update_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
 function showEquipupdatefailMessage(){
    const message = document.getElementById("equip_updateFail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  

function showEquipdeleteMessage(){
    const message = document.getElementById("equip_delete_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
//functions for projects message

function showProjectSuccessMessage(){
    const message = document.getElementById("project_success_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showProjectfailMessage(){
    const message = document.getElementById("project_fail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showProjectdeleteMessage(){
    const message = document.getElementById("project_delete_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
function showProjectdeletefailMessage(){
    const message = document.getElementById("project_deleteFail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  function showProjectupdateMessage(){
    const message = document.getElementById("project_update_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  
 function showProjectupdatefailMessage(){
    const message = document.getElementById("project_updateFail_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  

function showProjectdeleteMessage(){
    const message = document.getElementById("project_delete_message");
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
      }, 3000);




}  

});

  
    