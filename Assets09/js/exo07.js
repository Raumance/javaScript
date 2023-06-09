exo07.js
function calcul(tab){
    let Caracteres = 0;
    for (let i = 0; i < tableau.length; i++){
      Caracteres += tab[i].length;
    }
    return Caracteres;
  }
  let tableau = ["soiree","economie","depense"];
  let nbrCaracteres = calculCaracteres(tab);
  console.log(nbrCaracteres);