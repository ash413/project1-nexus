function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    location.reload();
}

function signup() {
    let newUsername = document.getElementById("newUsername").value;
    let newPassword = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(newPassword !== confirmPassword){
        alert("Passwords do not match!")
        return;
    }

    alert("Thanks for signing up! Enjoy your stay :)");

    location.reload();
}