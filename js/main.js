/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Joan Vallat
 * @version 0.2
 * @since   2023-09-10
 */
'use strict'; // Demande un interprétation stricte du code

/*
//EXERCICE 1
//Demande à l'utilisateur d'entrer un nombre
let degreCelcius = parseInt(prompt('Température en °C :'));

//test si la valeur est un nombre
if(isNaN(degreCelcius)){
    //Si non affiche un message d'erreur
    alert('Veuillez entrer un nombre !');
}else{
    //si oui affiche le résultat
    let degreFarenheit = degreCelcius * 9 / 5 + 32;
    prompt(`${degreCelcius}°C = ${degreFarenheit}°F`);
}
*/


//EXERCICE 2
//Partie 1

//Declare et récupère le bouton
let btCalculer = document.querySelector('button.calculer');

//Déclare et récupère le bouton réinitialiser
let btReinitialiser = document.querySelector('button.Reinitialiser');

//Déclare et récupère le paragraphe
let txtResultat = document.querySelector('strong.valeurResultat');

//Déclare et récupère la liste d'historique
let ulResultat = document.querySelector('ul.historique');

//Déclare et récupère le champ de saisie
let champsSaisie = document.querySelector('#temperature');

//Ajoute un évènement au bouton
btCalculer.addEventListener('click',()=>  {

    //Récupère la valeur inscrit dans le champ de saisie
    let degrCelcius = parseFloat(champsSaisie.value);

    //test si la valeur est un nombre
    if (isNaN(degrCelcius)) {
        //Si non, affiche un message d'erreur
        alert('Veuillez entrer un nombre !');
    } else {
        //si oui, calcul et affiche le résultat
        let degrFarenheit = degrCelcius * 9 / 5 + 32;

        //Affiche la valeur dans le paragraphe
        txtResultat.innerHTML = (`${degrFarenheit}°F`);
        //Ajoute le résultat à l'historique
        ulResultat.innerHTML += '<li>'+ (degrCelcius + '°C = ' + degrFarenheit + '°F') + '</li>';
        //Vide le champ de saisie
        champsSaisie.value = '';
    }
});
 btReinitialiser.addEventListener('click', () => {
     //Vide le champ de saisie, le résultat et l'historique
     txtResultat.innerHTML = '';
     ulResultat.innerHTML = '';
     champsSaisie.value = '';
 });

//Formule
//[°F] = [°C] x 9 / 5 + 32
