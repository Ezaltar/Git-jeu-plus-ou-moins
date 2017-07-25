
function nombre(min, max) {
    var message = prompt("Entrer un nombre entre 10 et 20");
    var random = Math.floor((max - min) * Math.random() + 1);
   // compteur = 0 nombre d'essai//
    
    if (random > message){
    alert("Ce chiffre est trop bas");
            return;
    } else if (random < message){
    alert("Ce chiffre Est trop élever");
            return;
    }

    }


