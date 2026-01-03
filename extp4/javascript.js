
function afficher(){
    //On selectionne les heures,les minutes et les secondes 
const sprsommer= document.querySelectorAll('.seconde');
const hprsommer= document.querySelectorAll('.heure');
const mprsommer= document.querySelectorAll('.minute');

//on convertit en secondes puis on fait la somme
let sommeheure=0;
hprsommer.forEach(element => { 
    //si l'input est vide on ajoute 0
    sommeheure +=  (Number(element.value) || 0) * 3600;
});
//Sommer les minutes
let sommeminute=0;
mprsommer.forEach(element => { 
    sommeminute += (Number(element.value) || 0) * 60;
});

//Sommer les secondes
let sommeseconde=0;
sprsommer.forEach(element => { 
    sommeseconde += (Number(element.value) || 0);
});

//La somme totale de tous les inputs en secondes
let total = 0
total = sommeheure + sommeminute + sommeseconde;

//conversion en jours, heures, minutes, secondes
let jours = Math.floor(total / 86400);
total %= 86400;
let heures = Math.floor(total / 3600);
total %= 3600;
let minutes = Math.floor(total / 60);
let secondes = total % 60;

//affichage
document.getElementById("Sjour").value = jours;
document.getElementById("Sheure").value = heures;
document.getElementById("Sminute").value = minutes;
document.getElementById("Sseconde").value = secondes;
}



