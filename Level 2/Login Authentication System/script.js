function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Simple check for demonstration
    if (username === "admin" && password === "password") {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid username or password!";
        message.style.color = "red";
    }
}
