exo08.js
function Nbr (tableau) {
    let nbr = [];
    for (let i = 0; i < tableau.length; i++){
      let nombre = tableau[i];
      let occurrences = 0;
      for (let origine = 0; origine < tableau.length; j++) {
        if (tableau[origine] === nombre) {
          occurrences++;
        }
      }
      if (occurrences === 1) {
        nbr.push(nombre);
      }
    }
    return nbr;
  }
  let tableau = [1, 2, 3, 4, 1, 2, 3];
  let nbr_uniques = nbr_uniques(tableau);
  console.log("nbr"); 