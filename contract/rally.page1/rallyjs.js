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

function showInfo(topic) {
    const infoCard = document.getElementById('infoCard');
    const infoText = document.getElementById('infoText');
        switch (topic) {
                case 'pilots':
            infoText.innerHTML = "os nossos pilotos!!!!.<br>Seguindo o rank de expêrincias temos:<br>1.";
            break;
                case 'patreon':
            infoText.innerHTML = "oi";
            break;
                case 'team':
            infoText.innerHTML = "bb";
            break;
            case 'purchase':
                infoText.innerHTML = "vv";
                break;
                case 'nextEvent':
            infoText.innerHTML = "dd";
            break;
            case 'contact':
                infoText.innerHTML = "ss";
                break;
                case 'workWithUs':
            infoText.innerHTML = "ee";
            break;
            case 'consumeOfUser':
                infoText.innerHTML = "rr";
                break;
            
        }
     
        infoCard.classList.add('show');   
            if (infoCard.classList.contains('show')) {
            }
    
    }