function askNumber() {
    const givenNumber = Number(prompt("saisir un nombre")) // pour faire comprendre de n'afficher que des nombres
    return givenNumber
}
console.log(givenNumber)

/*function didIwin(givenNumber, a) {
    if (givenNumber > a) {
        console.log(false === 'Plus petit');
    } else if (givenNumber < 22) {
        console.log(false === "Plus grand");
    } else {
        console.log(true === "Bravo! Vous avez trouver le nom ");
    }
}*/

function didIWin(givenNumber) {
    if (givenNumber < 22) {
        return false
    }
    else if (givenNumber > 22) {
        return false
    }
    return true
}
//alert(didIWin(askNumber()))


function gamePlay(askNumber, didIWin) {
let givenNumber = askNumber();
let didIWin = false
    while (givenNumber !== 22)
        {
            // if (asknumber =/= 22) {result asknumber }
            console.log("Recommencez")
            
            //input++
            //console.log("état", input)
        }
        // win
        console.log("Gagné !")
}
gamePlay()


/*function gamePlay() {
    let a 
    do{ 
        a=askNumber() 
        if(didIWin(a)===false)
     alert(didIWin(a))
    }while(didIWin(a) !== true)
}*/


/*function _gamePlay() {
    let a;
    let result;

    do {
        a = askNumber();         // On demande un nombre
        result = didIWin(a);     // On vérifie s’il est bon

        if (result === false) {
            alert(result);       // Affiche "false" si ce n’est pas bon
        }

    } while (result !== true);   // On recommence tant qu’on n’a pas gagné
}*/

// function __gamePlay() {

//     while (askNumber =/= 22)
//         {
//             if (asknumber =/= 22) {result asknumber }
            
//         }


//         // win
// }




//const = playernumber1
//const = playernumber2
//function twoPlayernumber (playernumber1, playernumber2)




// Exemple : Deviner un nombre
/*let nombreSecret = 7
let tentative = 0 ; 
while((tentative !== nombreSecret)) { {
tentative = Math.floor( (Math.random()* 10) )+ 1;
console.log ( ("Tentative: " + tentative) );
} }
 console.log ("Trouvé !")



horoscope.forEach((item) => {
  container.innerHTML += `
    <div>
      <h2>${item.givenNumber} </h2>
     
    </div>
  `;
});


function gamePlay(givenNumber, didWin)*/