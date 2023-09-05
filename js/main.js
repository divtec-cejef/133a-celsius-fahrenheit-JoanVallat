/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Joan Vallat
 * @version 0.2
 * @since   2019-08-19
 */
'use strict'; // Demande un interprétation stricte du code


let degreCelcius = parseInt(prompt('Température en °C :'));

if(isNaN(degreCelcius)){
    alert('Veuillez entrer un nombre !');
}else{
    let degreFarenheit = degreCelcius * 9 / 5 + 32;
    prompt(`${degreCelcius}°C = ${degreFarenheit}°F`);
}


//[°F] = [°C] x 9 / 5 + 32