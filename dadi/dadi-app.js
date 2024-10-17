//Gioco dei dadi
//Generare un numero random da 1 a 6 per il giocatore
//Generare un numero random da 1 a 6 per il computer
//  SE il numero uscito al giocatore è più alto
//      -stampa 'Congratulazioni! Hai vinto!'
//  ALTRIMENTI SE il numero uscito al computer è più alto
//      -stampa 'Oh no! Hai perso...ritenta un'altra volta!'


const min = 1
const max = 6

const randomUser = Math.floor (Math.random () * (max - min + 1) + min)
console.log( randomUser, 'Numero Utente')

const randomPc = Math.floor (Math.random () * (max - min + 1) + min)
console.log( randomPc, 'Numero Computer')

if (randomUser > randomPc){
    console.log('Congratulazioni! Hai vinto!')
} else {
    console.log("Oh no! Hai perso...ritenta un'altra volta!")
} 

