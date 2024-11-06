const register = document.getElementById("register");

    register.addEventListener("submit", (event) => {
        event.preventDefault();
        
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
        if (password === confirm) {
            console.log("userData", { name, lastName, email, number, password });
            const userData = { name, lastName, email, number };
            localStorage.setItem("userData", JSON.stringify(userData));
            
            window.location.href = "rally.page1/rally.pg1.html";
        } else {
            alert("As senhas não são iguais!");
        }
    });
    

