
document.addEventListener("DOMContentLoaded", function() {

    const left_main = document.getElementById("left-main");
    const reception = document.getElementById("reception");
    const workshop = document.getElementById("workshop");
    const sub_workshop = document.getElementById("workshop_subsection");
    const addReceptionist = document.getElementById("reception_id");
    const addWorkshop = document.getElementById("workshop_id");
    const computer_btn = document.getElementById("compu");
    const audio_btn = document.getElementById("audio");
    const electronics_btn = document.getElementById("tronics");
    const mechanical_btn = document.getElementById("mech");
    const wood_btn = document.getElementById("wood-work");
    const cnc_btn = document.getElementById("cnc-button");
    const computer_section = document.getElementById("compu-room");
    const audio_section = document.getElementById("audio-visual");
    const electronics_section = document.getElementById("electronics");
    const mechanical_section = document.getElementById("mechanical");
    const wood_section = document.getElementById("wood");
    const cnc_section = document.getElementById("cnc");
    const paragraphs = document.querySelectorAll(".paragraph_select");
    const sub_paragraphs = document.querySelectorAll(".paragraph_selection");
    const welcome_message = document.getElementById("welcome_remark");
    const DCIO_btn = document.getElementById("DCIO_btn");
    const DCIO_section = document.getElementById("DCIO");
    const Payment_btn = document.getElementById("Payment_btn");
    const Payment_section = document.getElementById("Payment");
    const Booking_btn = document.getElementById("Booking_btn");
    const Booking_section = document.getElementById("Booking");
    const Membership_btn = document.getElementById("Membership_btn");
    const Membership_section = document.getElementById("Membership");
    //equipment and projects
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
  if(reception){
    reception.addEventListener("click", function getreception(){
        const elements = document.querySelectorAll(".content-windows");
        const elements_b = document.querySelectorAll(".windows");
        if(sub_workshop.style.display==="block"){
          sub_workshop.style.display= "none";
      }
        if(left_main.style.visibility === "hidden"){
            
        left_main.style.visibility = "visible";
        }
      
        if(addReceptionist.style.display==="none"){
            addReceptionist.style.display= "block";
        }
        if(addReceptionist.style.display==="block"){
            addWorkshop.style.display= "none";
            elements.forEach(element => {
                element.style.display = "none";
            });
            
            elements_b.forEach(element=>{
              element.style.display = "none";
            });
            welcome_message.style.display= "block";


        }

        
      } );
  }
  if(workshop){
    workshop.addEventListener("click", function getworkshop(){
      const elements = document.querySelectorAll(".content-windows");
      const elements_b = document.querySelectorAll(".windows");
        if(sub_workshop.style.display==="none"){
          sub_workshop.style.display= "block";
        }
        if(left_main.style.visibility === "hidden"){
            left_main.style.visibility = "visible";
        }
        if(addWorkshop.style.display==="none"){
            addWorkshop.style.display= "block";
        }
        if(addWorkshop.style.display==="block"){
            addReceptionist.style.display= "none";
            elements.forEach(element => {
                element.style.display = "none";
            });
            elements_b.forEach(element =>{
              element.style.display = "none"
            });
            welcome_message.style.display= "block";
        
      }
   } );
  }
  if(computer_btn){
    computer_btn.addEventListener("click", function getcomputer(){

        if(welcome_message.style.display==="block"){
          welcome_message.style.display= "none";
        }
        if(computer_section.style.display==="none"){
            computer_section.style.display= "block";
        }
        if(computer_section.style.display==="block"){
            audio_section.style.display= "none";
            electronics_section.style.display= "none";
            mechanical_section.style.display= "none";
            wood_section.style.display= "none";
            cnc_section.style.display= "none";
        }
        if(compu_equip.style.display==="none"){
            compu_equip.style.display= "block";
        }
        if(compu_equip.style.display==="block"){
            audio_equip.style.display= "none";
            tronics_equip.style.display= "none";
            mecha_equip.style.display= "none";
            wood_equip.style.display= "none";
            cnc_equip.style.display= "none";
            audio_projects.style.display= "none";
            tronics_projects.style.display= "none";
            mecha_projects.style.display= "none";
            wood_projects.style.display= "none";
            cnc_projects.style.display= "none";
        }
      });
  }
  if(audio_btn){
    audio_btn.addEventListener("click", function getaudio(){
        if(welcome_message.style.display==="block"){
          welcome_message.style.display= "none";
        }
        if(audio_section.style.display==="none"){
            audio_section.style.display= "block";
        }
        if(audio_section.style.display==="block"){
            computer_section.style.display= "none";
            electronics_section.style.display= "none";
            mechanical_section.style.display= "none";
            wood_section.style.display= "none";
            cnc_section.style.display= "none";
        }
        if(audio_projects.style.display==="none" && audio_equip.style.display==="none"){
          audio_equip.style.display= "block";  
          audio_projects.style.display= "block";
            
        }
        if(audio_projects.style.display==="block" && audio_equip.style.display==="block"){
            tronics_projects.style.display= "none";
            mecha_projects.style.display= "none";
            wood_projects.style.display= "none";
            cnc_projects.style.display= "none";
            compu_equip.style.display= "none";
            tronics_equip.style.display= "none";
            mecha_equip.style.display= "none";
            wood_equip.style.display= "none";
            cnc_equip.style.display= "none";
        }

      });
  }
  if(electronics_btn){
    electronics_btn.addEventListener("click", function getelectronics(){
        if(welcome_message.style.display==="block"){
          welcome_message.style.display= "none";
        }
        if(electronics_section.style.display==="none"){
            electronics_section.style.display= "block";
        }
        if(electronics_section.style.display==="block"){
            computer_section.style.display= "none";
            audio_section.style.display= "none";
            mechanical_section.style.display= "none";
            wood_section.style.display= "none";
            cnc_section.style.display= "none";
            
        }
        if(tronics_equip.style.display==="none" && tronics_projects.style.display==="none"){
            tronics_equip.style.display= "block";
            tronics_projects.style.display= "block";
        }
        if(tronics_equip.style.display==="block" && tronics_projects.style.display==="block"){
            compu_equip.style.display= "none";
            audio_equip.style.display= "none";
            mecha_equip.style.display= "none";
            wood_equip.style.display= "none";
            cnc_equip.style.display= "none";
            audio_projects.style.display= "none";
            mecha_projects.style.display= "none";
            wood_projects.style.display= "none";
            cnc_projects.style.display= "none";
            
        }

      });
  }
  if(mechanical_btn){
    mechanical_btn.addEventListener("click", function getmechanical(){
        if(welcome_message.style.display==="block"){
          welcome_message.style.display= "none";
        }
        if(mechanical_section.style.display==="none"){
            mechanical_section.style.display= "block";
        }
        if(mechanical_section.style.display==="block"){
            computer_section.style.display= "none";
            audio_section.style.display= "none";
            electronics_section.style.display= "none";
            wood_section.style.display= "none";
            cnc_section.style.display= "none";
        }
        if(mecha_equip.style.display==="none" && mecha_projects.style.display==="none"){
            mecha_equip.style.display= "block";
            mecha_projects.style.display= "block";
        }
        if(mecha_equip.style.display==="block" && mecha_projects.style.display==="block"){
            compu_equip.style.display= "none";
            audio_equip.style.display= "none";
            tronics_equip.style.display= "none";
            wood_equip.style.display= "none";
            cnc_equip.style.display= "none";
            audio_projects.style.display= "none";
            tronics_projects.style.display= "none";
            wood_projects.style.display= "none";
            cnc_projects.style.display= "none";
        }

      });
  }
  if(cnc_btn){
    cnc_btn.addEventListener("click", function getcnc(){
        if(welcome_message.style.display==="block"){
          welcome_message.style.display= "none";
        }
        if(cnc_section.style.display==="none"){
            cnc_section.style.display= "block";
        }
        if(cnc_section.style.display==="block"){
            computer_section.style.display= "none";
            audio_section.style.display= "none";
            electronics_section.style.display= "none";
            mechanical_section.style.display= "none";
            wood_section.style.display= "none";
        }
        if(cnc_equip.style.display==="none" && cnc_projects.style.display==="none"){
            cnc_equip.style.display= "block";
            cnc_projects.style.display= "block";
        }
        if(cnc_equip.style.display==="block" && cnc_projects.style.display==="block"){
            compu_equip.style.display= "none";
            audio_equip.style.display= "none";
            tronics_equip.style.display= "none";
            mecha_equip.style.display= "none";
            wood_equip.style.display= "none";
            audio_projects.style.display= "none";
            tronics_projects.style.display= "none";
            mecha_projects.style.display= "none";
            wood_projects.style.display= "none";
        }

      });
  }
  if(wood_btn){
    wood_btn.addEventListener("click", function getwood(){
        
        if(welcome_message.style.display==="block"){
          welcome_message.style.display= "none";
        }
        if(wood_section.style.display==="none"){
            wood_section.style.display= "block";
        }
        if(wood_section.style.display==="block"){
            computer_section.style.display= "none";
            audio_section.style.display= "none";
            electronics_section.style.display= "none";
            mechanical_section.style.display= "none";
            cnc_section.style.display= "none";
        }
        if(wood_equip.style.display==="none" && wood_projects.style.display==="none"){
            wood_equip.style.display= "block";
            wood_projects.style.display= "block";
        }
        if(wood_equip.style.display==="block" && wood_projects.style.display==="block"){
            compu_equip.style.display= "none";
            audio_equip.style.display= "none";
            tronics_equip.style.display= "none";
            mecha_equip.style.display= "none";
            cnc_equip.style.display= "none";
            audio_projects.style.display= "none";
            tronics_projects.style.display= "none";
            mecha_projects.style.display= "none";
            cnc_projects.style.display= "none";
        }

      });
  }

  if(DCIO_btn){
    DCIO_btn.addEventListener("click", function getDCIO(){
        if(welcome_message.style.display==="block"){
          welcome_message.style.display= "none";
        }
        if(DCIO_section.style.display==="none"){
            DCIO_section.style.display= "block";
        }
        if(DCIO_section.style.display==="block"){
            Payment_section.style.display= "none";
            Booking_section.style.display= "none";
            Membership_section.style.display= "none";
        }
      });
  }
  if(Payment_btn){
    Payment_btn.addEventListener("click", function getPayment(){
        if(welcome_message.style.display==="block"){
          welcome_message.style.display= "none";
        }
        if(Payment_section.style.display==="none"){
            Payment_section.style.display= "block";
        }
        if(Payment_section.style.display==="block"){
            DCIO_section.style.display= "none";
            Booking_section.style.display= "none";
            Membership_section.style.display= "none";
        }
      });
  }
  if(Booking_btn){
    Booking_btn.addEventListener("click", function getBooking(){
        if(welcome_message.style.display==="block"){
          welcome_message.style.display= "none";
        }
        if(Booking_section.style.display==="none"){
            Booking_section.style.display= "block";
        }
        if(Booking_section.style.display==="block"){
            DCIO_section.style.display= "none";
            Payment_section.style.display= "none";
            Membership_section.style.display= "none";
        }
      });
  }
  if(Membership_btn){
    Membership_btn.addEventListener("click", function getMembership(){
        if(welcome_message.style.display==="block"){
          welcome_message.style.display= "none";
        }
        if(Membership_section.style.display==="none"){
            Membership_section.style.display= "block";
        }
        if(Membership_section.style.display==="block"){
            DCIO_section.style.display= "none";
            Payment_section.style.display= "none";
            Booking_section.style.display= "none";
        }
      });
  }

  if(paragraphs){
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('click', () => {
          // Remove 'active' class from all paragraphs
          paragraphs.forEach(p => p.classList.remove('active'));
          // Add 'active' class to the clicked paragraph
          paragraph.classList.add('active');
        });
    });
  }
  if(sub_paragraphs){
    sub_paragraphs.forEach(paragraph => {
        paragraph.addEventListener('click', () => {
          // Remove 'active' class from all paragraphs
          sub_paragraphs.forEach(p => p.classList.remove('active'));
          // Add 'active' class to the clicked paragraph
          paragraph.classList.add('active');
        });
    });
  }

});
