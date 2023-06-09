exo04.js
function NombreMax(tableau){
  let max = tableau[0];
  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
      max = tableau[i];
    }
  }
  return max;
}
const tableau = [7, 2, 10, 5, 1, 9];
const nombreMax = trouverNombreMax(tableau);
console.log(nombreMax);// Affiche 10