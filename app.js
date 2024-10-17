//Mail
//Chiedere all’utente la sua email, 
//  SE è presente nella lista di chi può accedere, 
//    -stampare un messaggio 'il tuo nome è in lista'
//  ALTRIMENTI SE non è presente nella lista,
//    -stampare un messaggio 'Mi dispiace ma non sei nella lista'



const mailingList = ['carlotta@yhaoo.it', 'davidino@gmail.com', 'fiorealice@libero.com',]
// console.log(mailingList)

let userMail = prompt('Inserisci qui la tua e-mail')
// console.log(userName)


if (mailingList.includes(userMail)) {
    console.log('Sei nella lista! Prego, puoi accedere.')

} else {
    console.log('Accesso negato, non sei nella lista')

}

















//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.