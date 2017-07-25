
function nombre(min, max) {
    var compteur = 0;
    var compteur2 = 0;
    do {
        compteur2++;
        var random = (Math.floor((20 - 10) * Math.random()) + 10);

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
        alert("T'es le meilleur ! Tu as fini en " + compteur + " coups " + "et tu as fait " + compteur2 + " parties");


        var t = confirm("Voulez vous rejouez ?");
        if (t == true) {
        } else {
            alert("A bientôt");
        }
    } while (t == true);
}
    