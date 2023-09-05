/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Joan Vallat
 * @version 0.2
 * @since   2019-08-19
 */
'use strict'; // Demande un interprétation stricte du code


//EXERCICE 1
//Demande à l'utilisateur d'entrer un nombre
let degreCelcius = parseInt(prompt('Température en °C :'));

//test si la veleur est un nombre
if(isNaN(degreCelcius)){
    //Si non affiche un message d'erreur
    alert('Veuillez entrer un nombre !');
}else{
    //si oui affiche le résultat
    let degreFarenheit = degreCelcius * 9 / 5 + 32;
    prompt(`${degreCelcius}°C = ${degreFarenheit}°F`);
}

//EXERCICE 2
//Partie 1

//Récupère le bouton
let btCalculer = document.querySelector('button.calculer');
let txtResultat = document.querySelector('p.resultat');

//Ajoute un évenement au bouton
btCalculer.addEventListener('click',()=> {

    //Récupère la valeur inscrit dans le champs de saisie
    let degrCelcius = parseFloat(document.querySelector('#temperature').value);

    //test si la veleur est un nombre
    if (isNaN(degrCelcius)) {
        //Si non affiche un message d'erreur
        alert('Veuillez entrer un nombre !');
    } else {
        //si oui affiche le résultat
        let degrFarenheit = degrCelcius * 9 / 5 + 32;
        prompt(`${degrCelcius}°C = ${degrFarenheit}°F`);
    }
});


//Affiche la valeur du champs de saisie dans la console
//ulArticles.innerHTML += "<li>" + txtArticle.value + "</li>";
//Vide la console
//txtArticle.value = "";


//Formule
//[°F] = [°C] x 9 / 5 + 32
