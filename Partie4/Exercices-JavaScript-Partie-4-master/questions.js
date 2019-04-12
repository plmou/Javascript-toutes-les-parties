/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length; //lenght = une propriété, nous renvoi le nombre de caractère qu'il y'a dans le texte
}
var remplaceECar = function (texte) {
    return texte.replace('e', ' '); //on va remplacer le premier de la chaine de caractère par un espace
}
var concatString = function (texte1, texte2) {
    return texte1+texte2; //on aurait pu faire aussi texte1.concat(texte2) surtour si c'est des chiffres sinon
    //ça peut additionner.
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);// vu qu'on commence le tableau ou un index on enlève un, car l'index
    //commence à 0.
}
var afficher9Car = function (texte) {
    return texte.substring(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.replace(/^\s+|\s+$/g,''); //supprimer les espaces, il vaut mieux utiliser trim
}
var IsString = function (texte) {
    if (typeof texte == 'string'){
      var result = true;
    }
    return result;
}
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
var NombreEspaceString = function (texte) { //compter le nombre d 'espace,pas de fonction déjà faites
//on aurait pu use le text.match.regex pour déterminer le nombre d'esapce.
    return spaceCount = (texte.split(" ").length - 1);
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) { //al valeur abslolue d'un nombre c'est ce qui le sépare de 0
//exemple val abs 5 = 5 et var absolue de -5 = 5 aussi.
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array){ // il y'a avait le point .map   on utilise pas les parenthèse de la fonction qu'on utilise avec le .map qui est une
  for(var i=0; i<array.length; i++) {
  	array[i] = Math.sqrt((array[i] * array[i]));
  }
  return array;
}
var sufaceCercle = function (rayon) {
    return  Math.ceil(Math.pow(rayon,2)*Math.PI);
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt(Math.pow(ab,2)+Math.pow(ac,2));
}
var calculIMC = function (poids, taille) {
    var result = poids/(Math.pow(taille,2));
    result = result*100;
    result = Math.round(result);
    result = result/100;
    return result;
}
