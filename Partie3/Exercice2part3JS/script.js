//la fonction pour le bouton afficher
function show(){
  document.getElementById('text').style.visibility="visible";
}
//la fonction pour masquer
function hide(){
  document.getElementById('text').style.visibility="hidden";
}
//masquer la page principalement
document.getElementById('text').style.display='none';
//ça peut servir pour cacher les commentaires ou les trucs comme ça.
//visibility ça reste présent mais pas visible
//si on fait display none alors ça disparaît donc visibility et hide c'est différend.
