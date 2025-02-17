document.getElementById("stafflog").addEventListener("submit", function (event){
    
    event.preventDefault();

    
    const passwords = document.getElementById("Passwordset").value.trim();
    const emails = document.getElementById("Emailset").value;
    
   

    if(passwords && emails){
    
        window.location.href="main.html";
        
    }
    else {
        alert("Please fill out the form"); 
        

    }


});


form2.getElementById("staff-form").addEventListener("submit", function (event){
    
    event.preventDefault();

    
    let password = document.getElementById("Password3").value.trim();
    let confirm_password = document.getElementById("Password4").value.trim();
   

    if(password===confirm_password){
    
        window.location.href="StaffLogin.html";
        
    }
    else {
        alert("Passwords are not a match"); 
        

    }


});




