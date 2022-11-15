const userWord = prompt("inserisci una parola");

var parolaDivisa = userWord.split('');
console.log(parolaDivisa);

var parolaDivisa = parolaDivisa.reverse();
console.log(parolaDivisa);

var parolaInversa = invertiParola(userWord);

if(userWord === parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}

