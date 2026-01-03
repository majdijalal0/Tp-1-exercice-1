
function checkEmail(){
   //recuperation de l'email
     const element = document.getElementById("email");
     const email=element.value;
    
    const affichage = document.getElementById("emailornot");    
    //sepecifaction de la format d'email souhaitee
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //verification de la validite de l'email avec la methode test et affcihage du resultat
    if(regex.test(email)){
        affichage.innerHTML="Valid email";
    }else{
        affichage.innerHTML="Invalid email";
    } 
}