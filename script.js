function fakeLogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Dummy credentials
    const dummyUser = {
        email: "test@example.com",
        password: "123456"
    };

    if (email === dummyUser.email && password === dummyUser.password) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
}

