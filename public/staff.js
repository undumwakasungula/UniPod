document.addEventListener("DOMContentLoaded", function() {
    const formstaffup = document.getElementById("staff-form");
    const formstafflog= document.getElementById("stafflog");

    if(formstafflog){
        formstafflog.addEventListener("submit", function staffloginfunc(event){
            event.preventDefault();
            const email = document.getElementById("Emailset").value;
            const password = document.getElementById("Passwordset").value;
            if(email && password){
               window.location.href="/main.html";
            }
        });
    }

    if(formstaffup){
        formstaffup.addEventListener("submit", function staffsignupfunc (event){
            event.preventDefault();
    
            const password = document.getElementById("Password3").value;
            const confirm_password = document.getElementById("Password4").value;
            if(password===confirm_password){
                window.location.href="/StaffLogin.html";
            }else{
                alert("Passwords are not a match");
            }
        });
    }

});
