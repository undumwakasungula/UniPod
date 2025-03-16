const addReceptionist = document.getElementById("reception_id");
const addWorkshop = document.getElementById("workshop_id");
const reception = document.getElementById("reception");
const workshop = document.getElementById("workshop");
const left_main = document.getElementById("left-main");

reception.addEventListener("click", function getreception(){
    if(left_main.style.visibility === "hidden"){
        
    left_main.style.visibility = "visible";
    }
  
    if(addReceptionist.style.display==="none"){
        addReceptionist.style.display= "block";
    }
    if(addReceptionist.style.display==="block"){
        addWorkshop.style.display= "none";
    }
  } );

workshop.addEventListener("click", function getworkshop(){
    if(left_main.style.visibility === "hidden"){
        left_main.style.visibility = "visible";
    }
    if(addWorkshop.style.display==="none"){
        addWorkshop.style.display= "block";
    }
    if(addWorkshop.style.display==="block"){
        addReceptionist.style.display= "none";
    }
  });


const paragraphs = document.querySelectorAll(".paragraph_select");

paragraphs.forEach(paragraph => {
  paragraph.addEventListener('click', () => {
    // Remove 'active' class from all paragraphs
    paragraphs.forEach(p => p.classList.remove('active'));
    // Add 'active' class to the clicked paragraph
    paragraph.classList.add('active');
  });
});
