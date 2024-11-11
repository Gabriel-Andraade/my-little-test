const register = document.getElementById("register");
document.getElementById("selectType").addEventListener("change", function () {
    const selectedPilot = document.getElementById("pilotOptions");

    if (this.value === "Piloto") {
            selectedPilot.style.display = "block";
        } else {
            selectedPilot.style.display = "none";
        }

    })

    document.getElementById("selectType").addEventListener("change", function () {
        const selectedMechanic = document.getElementById("mechanicOptions");
    
        if (this.value === "Mecânico") {
            selectedMechanic.style.display = "block";
        } else {
            selectedMechanic.style.display = "none";
            }
        });

    register.addEventListener("submit", (event) => {
        event.preventDefault();
        
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const selectType = document.getElementById("selectType").value;

        if (password === confirm) {
            console.log("userData", { name, lastName, email, number, password, selectType });
            const userData = { name, lastName, email, number, selectType };
            localStorage.setItem("userData", JSON.stringify(userData));
            
            window.location.href = "rally.page1/rally.pg1.html";
        } else {
            alert("As senhas não são iguais!");
        }
    });
    

