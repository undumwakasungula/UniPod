document.addEventListener("DOMContentLoaded", function() {
    const down = document.getElementById("external-form");
    const downset = document.getElementById("externForm");

    if(downset){
        downset.addEventListener("submit", function externalloginfunc(event){
            event.preventDefault();
            const email = document.getElementById("Emailsett").value;
            const password = document.getElementById("Passwordsett").value;
            if(email && password){
                window.location.href="main.html";
            }
        });
    }

    if(down){
        down.addEventListener("submit", function externalsignupfunc (event){
            event.preventDefault();
    
            const password = document.getElementById("Password1").value;
            const confirm_password = document.getElementById("Password2").value;
            if(password===confirm_password){
                window.location.href="ExternalLogin.html";
            }else{
                alert("Passwords are not a match");
            }
        });
    }


 
});
