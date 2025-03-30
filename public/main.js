const resizeHandle = document.getElementById('resize-handle');
const leftDiv = document.getElementById('sidebar');

let isResizing = false;

resizeHandle.addEventListener('mousedown', (e) => {
  isResizing = true;
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
});

function resize(e) {
  if (isResizing) {
    // Calculate new width for the left div
    const newWidth = e.clientX - leftDiv.getBoundingClientRect().left;
    leftDiv.style.width = `${newWidth}px`;
  }
};

function stopResize() {
  isResizing = false;
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
};

const statusparagraph = document.getElementById("stat");
const statushide = document.getElementById("statushidden");
const addparagraph = document.getElementById("add");
const addhide = document.getElementById("addhidden");


statusparagraph.addEventListener("click", function statusEquipment(){
  
  if(statushide.style.display==="none"){
    statushide.style.display= "block";
  }
  if(statushide.style.display==="block"){
    addhide.style.display= "none";
  }
} );


addparagraph.addEventListener("click", function addEquipmentt(){
  if(addhide.style.display==="none"){
    addhide.style.display= "block";
  }
  if(addhide.style.display==="block"){
    statushide.style.display= "none";
  }
} );




function gotoExternal() {
  window.location.href = "/externalsignup.html";
}

function gotoStaff() {
  window.location.href = "/staffSignup.html";
}

function gotoStudent() {
  window.location.href = "/StudentSignup.html";
}