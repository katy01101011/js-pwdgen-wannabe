// Costanti:
const userName = prompt('Qual\'è il tuo nome?')
console.log(userName, typeof(userName));

const userSurname = prompt('Qual\'è il tuo cognome?')
console.log(userSurname, typeof(userSurname));

const favouriteColor = prompt('Qual\'è il tuo colore preferito?')
console.log(favouriteColor, typeof(favouriteColor));

const userBirth = prompt('Qual\'è il tuo anno di nascita? es. 1994')
console.log(userBirth, typeof(userBirth));

const number = 21;
console.log(number, typeof(number));

// Costanti da generare

let passName = '';
console.log(passName);

let passSurname = '';
console.log(passSurname);

// Genera passName
  // Prendi il carattere pari n. 1
  const n1 = userName.substring(1, 2);

  // Prendi il carattere pari n. 2
    const n2 = userName.substring(3, 4);

  // Rendi maiuscolo il carattere n2
    const n2u = n2.toUpperCase();

  // Prendi il carattere pari n. 3
    const n3 = userName.substring(5, 6);

  // Genera la sequenza del longName con l'ordine n2u+n3+n1
    const longName = n2u + n3 + n1;
    console.log(longName);

    // passName
    if (userName.length >= 6) {
        passName = longName;
      } else {
        passName = userName;
      }
    console.log(passName);

// Genera passSurname
  // Prendi il carattere dispari n. 1
    const s1 = userSurname.substring(0, 1);

  // Prendi il carattere dispari n. 2
    const s2 = userSurname.substring(2, 3);

  // Prendi il carattere dispari n. 3
    const s3 = userSurname.substring(4, 5);

  // Genera la sequenza del longName con l'ordine s3+s1+s2
    const longSurname = s3 + s1 + s2;
    console.log(longSurname);

    if (userSurname.length >= 5) {
        passSurname = longSurname;
      } else {
        passSurname = userSurname;
      }
    console.log(passSurname);

// Genera passColor
  // Rendi tutti i caratteri maiuscoli
  let passColor = favouriteColor.toUpperCase();
  console.log(passColor);

// Genera passBirth
  // Prendi gli ultimi due numeri
  const yearBirth = userBirth.substring(2, 4);
  console.log(yearBirth, typeof(yearBirth));

  // Converti la stringa di numeri in numeri
  const numberBirth = parseInt(yearBirth);
  console.log(numberBirth, typeof(numberBirth));

  // Prendi il number e sommalo a yearBirth
  const passBirth = number + numberBirth;
  console.log(passBirth, typeof(passBirth));
  
// Genera Password
const password = passName + passSurname + passColor + passBirth;
console.log(password, typeof(password));

// Visualizza password in HTML
document.getElementById('your-password').innerHTML = password;