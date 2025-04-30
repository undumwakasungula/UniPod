document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    if (username) {
        document.getElementById("account-name").textContent = username;
    } else {
        document.getElementById("account-name").textContent = "Unknown Name";
    }

    if (role) {
        document.getElementById("account-type").textContent = role;
    } else {
        document.getElementById("account-type").textContent = "Unknown Role";
    }
});
