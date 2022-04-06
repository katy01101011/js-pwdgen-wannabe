// 1. costante: 21
const number = 21
console.log(number, typeof(number));

// 2. Chiedere nome utente
const userName = prompt('Qual\'è il tuo nome?')
console.log(userName, typeof(userName));

// 2.a Se il nome è lungo almeno 6 lettere, prendi i primi 3 caratteri pari
if (userName < 6) {
    greeting = "Good day";
  } else {
    longName = "userName";
  }

// 2.a.a Rendi il secondo carattere maiuscolo

// 2.b Altrimenti prendi tutto il nome

// 3. Chiedere cognome utente
const userSurname = prompt('Qual\'è il tuo cognome?')
console.log(userSurname, typeof(userSurname));

// 3.a Se il cognome è lungo almeno 5 lettere, prendi i primi 3 caratteri dispari
// 3.a.a Rendi il secondo carattere maiuscolo

// 3.b Altrimenti prendi tutto il cognome

// 4. Chiedere il colore preferito
const favouriteColor = prompt('Qual\'è il tuo colore preferito?')
console.log(favouriteColor, typeof(favouriteColor));

// 4.a Rendere il secondo carattere maiuscolo

// 5. Generare password: ' '
// 5.a longName + longSurname + COLOR + 21
// 5.b shortName + shortSurname + COLOR + 21
// 5.c longName + shortSurname + COLOR + 21
// 5.d shortName + longSurname + COLOR + 21

// 6. Visualizzare password sulla pagina WEB
document.getElementById('your-password').innerHTML = password


