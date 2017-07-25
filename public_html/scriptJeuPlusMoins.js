
function nombre(min, max) {
    var random = (Math.floor((20 - 10) * Math.random()) + 10);
    var compteur = 0;
    alert(random);
    do {
    var message = prompt("Entrer un nombre entre 10 et 20");
    compteur++;
    
        if (random > message) {
            alert("Ce chiffre est trop bas");
            
            

        } else if (random < message) {
            alert("Ce chiffre Est trop élever");
            
            
        }
    } while (random != message);
    
    
    alert("T'es le meilleur ! Tu as fini en " + compteur);
}





