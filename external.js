down.getElementById("external-form").addEventListener("submit", function (event){
    
    event.preventDefault();

    
    let password = document.getElementById("Password1").value.trim();
    let confirm_password = document.getElementById("Password2").value.trim();
   

    if(password===confirm_password){
    
        window.location.href="externallogin.html";
        
    }
    else {
        alert("Passwords are not a match"); 
        

    }


});

downset.getElementById("externForm").addEventListener("submit", function (event){
    
    event.preventDefault();

    const nation = document.getElementById("Nationalsett").value
    const password = document.getElementById("Password1").value.trim();
    const email = document.getElementById("Emailsett").value

    
   

    if(nation && password && email){
    
        window.location.href="main.html";
        
    }
    else {
        alert("Please fill out the form"); 
        

    }


});

