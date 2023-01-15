/* El Haddad Nassim */

/* reset réinitialise la page */
function reset() {
  /* remet la valeur des cadres inputs à 0 */
  document.getElementById("adultes").value = 0;
  document.getElementById("enfants").value = 0;
  document.getElementById("chambres").value = 0;

  /* décoche la case en bas du tableau */
  document.getElementById("voyage") = "unchecked";
}

/* plus ajoute 1 à la valeur dans un cadre input 
   id est le nom d'un id */
function plus(id) {
  /* ajoute 1 au cadre input d'id correspondant à la variable id */
  document.getElementById(id).value++;

  /* si on ajoute à la case "Enfants", on lance la fonction age */
  if (id == "enfants")
    age("plus");
}

/* moins retire 1 à la valeur dans un cadre input 
   id est le nom d'un id */
function moins(id) {
  /* si la valeur du cadre input d'id correspondant à la variable id n'est pas 0 */
  if (document.getElementById(id).value > 0) {

    /* on retire 1 au cadre input */
    document.getElementById(id).value--;

    /* si on retire à la case "Enfants", on lance la fonction age */
    if (id == "enfants")
      age("moins");
  }
}

/* age rajoute ou retire une case pour l'age d'un enfant e, bas du tableau
   pom a la valeur "plus" ou "moins" */
function age(pom) {
  /* t est le tableau */
  var t = document.getElementById('t');

  /* si pom a la valeur "plus", on rajoute une case âge au tableau */
  if (pom == "plus")
    t.insertAdjacentHTML('beforeend', '<tr class="age"> <td colspan="2"><input type="text" name="ageEnfant" class="nb"></td></tr>');

  /* sinon, on enlève la dernière case d'âge du tableau*/
  else
    t.removeChild(t.lastChild);
}

/* verif assure le respect des contraintes d'utilisation */
function verif() {
  /* deb et fin sont les valeurs des dates */
  var deb = document.getElementById("datedeb").value;
  var fin = document.getElementById("datefin").value;

  /* On vérifie que la date de début du séjour est antérieure à celle de fin du séjour*/
  if (deb > fin)
    /* si les dates ne sont pas conformes, on envoie une alerte */
    alert("ATTENTION : Dates invalides");

  /* sinon on conyinue les vérifications */
  else {
    /* a et c sont le nombre d'adultes et de chambres */
    var a = document.getElementById("adultes").value;
    var c = document.getElementById("chambres").value;

    /* si y a au moins un adulte et une chambre de réservés, on lance la fonction affiche */
    if (a > 0 && c > 0)
      affiche();
    else
      /* sinon on envoie une alerte */
      alert("ATTENTION : Vous n'avez pas d'adulte et/ou de chambre");
  }

}

/* affiche affiche un texte selon les valeurs mises dans le tableau */
function affiche() {
  /* deb et fin sont les valeurs des dates */
  var deb = document.getElementById("datedeb").value;
  var fin = document.getElementById("datefin").value;

  /* a, e et c sont le nombre d'adultes, d'enfants et de chambres */
  var a = document.getElementById("adultes").value;
  var e = document.getElementById("enfants").value;
  var c = document.getElementById("chambres").value;

  /* f est le formulaire */
  var f = document.getElementById("form");

  /* on affiche le texte après la fin du formulaire */
  f.insertAdjacentHTML('afterend', '<h3>VOTRE RECHERCHE A BIEN ÉTÉ PRISE EN COMPTE</h3><p id="aff">Veuillez patienter...<br><br>' + a + ' adulte(s)&nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;&nbsp;' + e + ' enfant(s)&nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;&nbsp;' + c + ' chambre(s)<br><br><br></p>');
}