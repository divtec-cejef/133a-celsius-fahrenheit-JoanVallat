/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Joan Vallat
 * @version 0.2
 * @since   2019-08-19
 */
'use strict'; // Demande un interprétation stricte du code

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

//Formule
//[°F] = [°C] x 9 / 5 + 32