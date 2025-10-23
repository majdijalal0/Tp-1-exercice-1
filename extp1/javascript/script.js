//On créer un objet qui contient les réponses justes avec lequel on va comparer
const rightanswers = {
   Q1 : ['HTML','Javascript'] ,
   Q2 : ['let','var'],
   Q3 : ['String'] ,
   Q4 : ['grid', 'flexbox'] ,
   Q5 : ['body']
};

 //La fonction getAnswers récupère les réponses de l'utilisateur
function getAnswers(){
    //on sélectionne tous les inputs
    const inputs=document.querySelectorAll("input")
    //useranswers l'objet qui va contenir les réponses de l'utilisateur
    const useranswers = {
        Q1 : [] ,
        Q2 : [],
        Q3 : [],
        Q4 : [],
        Q5 : []
    }
    //on remplit l'objet useranswers avec les réponses cochées par l'utilisateur
    inputs.forEach(input => {
        if(input.checked){
            useranswers[input.name].push(input.value)
        }
    }
    )
    return useranswers;
}

//La fonction checkAnswers compare les réponses de l'utilisateur avec les bonnes réponses
function checkAnswers(){
    const useranswers=getAnswers();
    //L'objet resultats va contenir pour chaque question si la réponse est juste ou fausse
    const resultats = {};
    //Comparaison des réponses avec loop for
    for(let i=1;i<=5;i++){
        //stringify pour rendre les objets en string donc on puisse comparer sans problèmes et sort pour éviter les problèmes d'ordre des réponses
        if(JSON.stringify(useranswers["Q" + i].sort()) === JSON.stringify(rightanswers["Q" + i].sort())){
           resultats["Q" + i]=true //Les éléments de l'objet sont de la forme Q1,Q2... donc on utilise "Q"+i pour indiquer l'element qu'on veut modifier

        }else{
           resultats["Q" + i]=false
        }
    }
  return resultats;
}
//On stock les résultats avec localStorage pour qu'on puisse les afficher dans la page de suivi
function sauvegarderResultats(resultats){
    localStorage.setItem('resultats', JSON.stringify(resultats));
    window.location.href='followup1.html'
}
//La fonction afficherResultas permet l'affichage dans la page de suivi
function afficherResultats(){
    //On récupère les résultats depuis le localStorage
    const resultas = localStorage.getItem('resultats');
     if(resultas){
        //On rend les resultats en un objet
        const resultats = JSON.parse(resultas);
        //On affiche un message selon la réponse (juste ou fausse) 
        for (let i = 1; i <= 5; i++) {

        const isCorrect = resultats["Q" + i];
        const correction = isCorrect ? "La réponse de la question Q" + i + " est juste" : "La réponse de la question Q" + i + " est fausse";
        //Les id des paragraphes dans lesquels on veut afficher les résultats sont de la forme qt1, qt2... donc on utilise "qt"+i pour indiquer l'element qu'on veut modifier
        document.getElementById("qt" + i).innerText = correction;
        }
    }

}
