
document.addEventListener("DOMContentLoaded", function() {

    
    const left_main_board = document.getElementById("left-main_board");
    const reception = document.getElementById("reception");
    const workshop = document.getElementById("workshop");

    
    const sub_workshops = document.getElementById("workshops_subsection");
    
    const addReceptionists = document.getElementById("receptions_id");
    
    const addWorkshops = document.getElementById("workshops_id");
    const computer_btnd = document.getElementById("compud");
    const audio_btnd = document.getElementById("audiod");
    const electronics_btnd = document.getElementById("tronicsd");
    const mechanical_btnd = document.getElementById("mechd");
    const wood_btnd = document.getElementById("wood-workd");
    const cnc_btnd = document.getElementById("cnc-buttond");
    const computer_section = document.getElementById("compu-room");
    const audio_section = document.getElementById("audio-visual");
    const electronics_section = document.getElementById("electronics");
    const mechanical_section = document.getElementById("mechanical");
    const wood_section = document.getElementById("wood");
    const cnc_section = document.getElementById("cnc");

    const welcome_message = document.getElementById("welcome_remark");
    const DCIO_btnd = document.getElementById("DCIO_btnd");
    const DCIO_section = document.getElementById("DCIO");
    const Payment_btnd = document.getElementById("Payment_btnd");
    const Payment_section = document.getElementById("Payment");
    const Booking_btnd = document.getElementById("Booking_btnd");
    const Booking_section = document.getElementById("Booking");
    const Membership_btnd = document.getElementById("Membership_btnd");
    const Membership_section = document.getElementById("Membership");
    //equipment and projects
    const compu_equipd = document.getElementById("compu-equipd");
    const audio_equipd = document.getElementById("audio-equipd");
    const tronics_equipd = document.getElementById("tronics-equipd");
    const mecha_equipd = document.getElementById("mech-equipdd");
    const wood_equipd = document.getElementById("wood-equipd");
    const cnc_equipd= document.getElementById("cnc-equipd");
    const audio_projectsd = document.getElementById("audio-projectsd");
    const tronics_projectsd = document.getElementById("tronics-projectsd");
    const mecha_projectsd = document.getElementById("mech-projectsd");
    const wood_projectsd = document.getElementById("wood-projectsd");
    const cnc_projectsd = document.getElementById("cnc-projectsd");

  if(reception){
    reception.addEventListener("click", function getreception(){
        const elements = document.querySelectorAll(".content-windows");
        const elements_b = document.querySelectorAll(".windows");
        if(sub_workshops.style.display==="block"){
          sub_workshops.style.display= "none";
      }
        if(left_main_board.style.visibility === "hidden"){
            
        left_main_board.style.visibility = "visible";
        }
      
        if(addReceptionists.style.display==="none"){
          
            addReceptionists.style.display= "block";
        }
        if(addReceptionists.style.display==="block"){
            addWorkshops.style.display= "none";
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
    workshop.addEventListener("click", function getworkshopopen(){
      const elements = document.querySelectorAll(".content-windows");
      const elements_b = document.querySelectorAll(".windows");
        if(sub_workshops.style.display==="none"){
          
          sub_workshops.style.display= "block";
        }
        if(left_main_board.style.visibility === "hidden"){
            left_main_board.style.visibility = "visible";
        }
        if(addWorkshops.style.display==="none"){
            addWorkshops.style.display= "block";
        }
        if(addWorkshops.style.display==="block"){
            addReceptionists.style.display= "none";
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



  if(computer_btnd){
    computer_btnd.addEventListener("click", function getcomputer(){

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
        if(compu_equipd.style.display==="none"){
            compu_equipd.style.display= "block";
        }
        if(compu_equipd.style.display==="block"){
            audio_equipd.style.display= "none";
            tronics_equipd.style.display= "none";
            mecha_equipd.style.display= "none";
            wood_equipd.style.display= "none";
            cnc_equipd.style.display= "none";
            audio_projectsd.style.display= "none";
            tronics_projectsd.style.display= "none";
            mecha_projectsd.style.display= "none";
            wood_projectsd.style.display= "none";
            cnc_projectsd.style.display= "none";
        }
      });
  }
  if(audio_btnd){
    audio_btnd.addEventListener("click", function getaudio(){
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
        if(audio_projectsd.style.display==="none" && audio_equipd.style.display==="none"){
          audio_equipd.style.display= "block";  
          audio_projectsd.style.display= "block";
            
        }
        if(audio_projectsd.style.display==="block" && audio_equipd.style.display==="block"){
            tronics_projectsd.style.display= "none";
            mecha_projectsd.style.display= "none";
            wood_projectsd.style.display= "none";
            cnc_projectsd.style.display= "none";
            compu_equipd.style.display= "none";
            tronics_equipd.style.display= "none";
            mecha_equipd.style.display= "none";
            wood_equipd.style.display= "none";
            cnc_equipd.style.display= "none";
        }

      });
  }
  if(electronics_btnd){
    electronics_btnd.addEventListener("click", function getelectronics(){
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
        if(tronics_equipd.style.display==="none" && tronics_projectsd.style.display==="none"){
            tronics_equipd.style.display= "block";
            tronics_projectsd.style.display= "block";
        }
        if(tronics_equipd.style.display==="block" && tronics_projectsd.style.display==="block"){
            compu_equipd.style.display= "none";
            audio_equipd.style.display= "none";
            mecha_equipd.style.display= "none";
            wood_equipd.style.display= "none";
            cnc_equipd.style.display= "none";
            audio_projectsd.style.display= "none";
            mecha_projectsd.style.display= "none";
            wood_projectsd.style.display= "none";
            cnc_projectsd.style.display= "none";
            
        }

      });
  }
  if(mechanical_btnd){
    mechanical_btnd.addEventListener("click", function getmechanical(){
        
        if(welcome_message.style.display==="block"){
          welcome_message.style.display= "none";
        }
        if(mechanical_section.style.display==="none"){
            alert("hello");
            mechanical_section.style.display= "block";
        }
        if(mechanical_section.style.display==="block"){
            computer_section.style.display= "none";
            audio_section.style.display= "none";
            electronics_section.style.display= "none";
            wood_section.style.display= "none";
            cnc_section.style.display= "none";
        }
        if(mecha_equipd.style.display==="none" && mecha_projectsd.style.display==="none"){
            mecha_equipd.style.display= "block";
            mecha_projectsd.style.display= "block";
        }
        if(mecha_equipd.style.display==="block" && mecha_projectsd.style.display==="block"){
            compu_equipd.style.display= "none";
            audio_equipd.style.display= "none";
            tronics_equipd.style.display= "none";
            wood_equipd.style.display= "none";
            cnc_equipd.style.display= "none";
            audio_projectsd.style.display= "none";
            tronics_projectsd.style.display= "none";
            wood_projectsd.style.display= "none";
            cnc_projectsd.style.display= "none";
        }

      });
  }
  if(cnc_btnd){
    cnc_btnd.addEventListener("click", function getcnc(){
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
        if(cnc_equipd.style.display==="none" && cnc_projectsd.style.display==="none"){
            cnc_equipd.style.display= "block";
            cnc_projects.style.display= "block";
        }
        if(cnc_equipd.style.display==="block" && cnc_projectsd.style.display==="block"){
            compu_equip.style.display= "none";
            audio_equipd.style.display= "none";
            tronics_equipd.style.display= "none";
            mecha_equipd.style.display= "none";
            wood_equipd.style.display= "none";
            audio_projectsd.style.display= "none";
            tronics_projectsd.style.display= "none";
            mecha_projectsd.style.display= "none";
            wood_projectsd.style.display= "none";
        }

      });
  }
  if(wood_btnd){
    wood_btnd.addEventListener("click", function getwood(){
        
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
        if(wood_equipd.style.display==="none" && wood_projectsd.style.display==="none"){
            wood_equipd.style.display= "block";
            wood_projectsd.style.display= "block";
        }
        if(wood_equipd.style.display==="block" && wood_projectsd.style.display==="block"){
            compu_equipd.style.display= "none";
            audio_equipd.style.display= "none";
            tronics_equipd.style.display= "none";
            mecha_equipd.style.display= "none";
            cnc_equipd.style.display= "none";
            audio_projectsd.style.display= "none";
            tronics_projectsd.style.display= "none";
            mecha_projectsd.style.display= "none";
            cnc_projectsd.style.display= "none";
        }

      });
  }

  if(DCIO_btnd){
    
    DCIO_btnd.addEventListener("click", function getDCIO(){
      
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
  if(Payment_btnd){
    Payment_btnd.addEventListener("click", function getPayment(){
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
  if(Booking_btnd){
    Booking_btnd.addEventListener("click", function getBooking(){
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
  if(Membership_btnd){
    Membership_btnd.addEventListener("click", function getMembership(){
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


});
