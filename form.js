


document1.getElementById("signIn-form").addEventListener("submit", function (event){
    event.preventDefault();
    


    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    if(email && password) {
        window.location.href="main.html";
    }

});

document2.getElementById("sign-up-label").addEventListener("click", function(){
    
    window.location.href="selector.html";
});

function  gotoStudent(){
    
    window.location.href="StudentSignup.html";
};

function gotoStaff(){
    
    window.location.href="staffSignup.html";
};

function gotoExternal(){
    window.location.href="externalsignup.html";
};


upform.getElementById("signUpform").addEventListener("submit", function (event){
    
    event.preventDefault();

    
    let password = document.getElementById("password").value.trim();
    let confirm_password = document.getElementById("confPassword").value.trim();
   

    if(password===confirm_password){
    
        window.location.href="studentLogin.html";
        
    }
    else {
        alert("Passwords are not a match"); 
        

    }


});