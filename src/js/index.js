const users = [
    {user: "admin", password: "password"},
    {user: "user", password: "pass"}
];

document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    const loggedUser = users.find(x => x.user === user && x.password === password);

    if (loggedUser)
    {
        window.location.href = "./pages/home.html";
    }
    else
    {
        const form = document.getElementById("login-form")

        const message = document.createElement("p");
        message.classList.add("login-message")

        form.appendChild(message);

        message.textContent = "Usuário ou senha incorretos";
    }
})