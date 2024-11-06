document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        document.getElementById("name").textContent = userData.name;
        document.getElementById("lastName").textContent = userData.lastName;
        console.log("Dados do Usuário:", userData);
    
} else 
    {

        console.log("Nenhum dado encontrado.");
    
}

});
                                                                                                                 

function pilots () {
    document.getElementById("pilots").innerHTML = "em breve nossos pilotos.";
}

function patreon () {
    document.getElementById("patreon").innerHTML = "bbbb";
}

function team () {
    document.getElementById("team").innerHTML = "ccccc";
}

function purchase () {
    document.getElementById("purchase").innerHTML = "ddddd"; 
}

function nextEvent () {
    document.getElementById("nextEvent").innerHTML = "eeeee"
}

function contact () {
    document.getElementById("contact").innerHTML = "fffff"
}

function workWithUs () {
    document.getElementById("workWithUs").innerHTML = "ggggggggg"
}

function consumeOfUser() {
    document.getElementById("consumeOfUser").innerHTML = "hhhhhhhhhhhh"
}
