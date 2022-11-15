
let btnPari = document.getElementById('pari');
let btnDispari = document.getElementById('dispari');
let UserNumber = parseInt(prompt("inserisci un numero da 1 a 5"));


btnPari.addEventListener('click', function() {

    function rollDice() {

        let dice1 = UserNumber;
        let dice2 = Math.floor(Math.random() * 5) + 1;
    
        document.getElementById("dice").innerHTML = dice1 + " , " + dice2;
    
        return (dice1 + dice2);
    }

    const somma = rollDice( );

    if ( somma % 2 ) {
        document.getElementById('vincitore').innerHTML = `Hai perso`
    } else {
        document.getElementById('vincitore').innerHTML = `Hai vinto`
    }

});

btnDispari.addEventListener('click', function() {

    function rollDice() {

        let dice1 = UserNumber;
        let dice2 = Math.floor(Math.random() * 5) + 1;
    
        document.getElementById("dice").innerHTML = dice1 + " , " + dice2;
    
        return (dice1 + dice2);
    }

    const somma = rollDice( );

    if ( somma % 2 === 1) {
        document.getElementById('vincitore').innerHTML = `Hai Vinto`
    } else {
        document.getElementById('vincitore').innerHTML = `Hai perso`
    }

});