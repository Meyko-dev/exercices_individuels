function maxDaysInMonth(){
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31 , 30, 31]
    return daysInMonth
};


function isValidDate(dateString){
       // Expression régulière pour le format dd/mm/aaaa
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateString.match(dateRegex);
    if (!match) {
        return false;
}
}

const day = parseInt(match[1],10);
const month = parseInt(match[2], 10);
const year = parseInt(match[3], 10);

//Verifie les contraintes d'années
if (year < 1000 || year > 9999) {
        return false;
    }
    
    // Vérifier le mois (1-12)
    if (month < 1 || month > 12) {
        return false;
    }

    //
    function isPalindrome(dateString) {
    if (!isValidDate(dateString)) {
        return false;
    }
    
//   Enlever les "/" pour avoir une chaîne de chiffres
     const digitsOnly = dateString.replace(/\//g, '');
    
// Vérifier si c'est un palindrome
    const reversed = digitsOnly.split('').reverse().join('');
    
    return digitsOnly === reversed;
    }

    function getPalindrome(){
    const years_1000_9999 = [];
    for (let i = 1000; i <= 9999; i++) {
        years_1000_9999.push(i);
    }
    
    // Vérifier si dateString est un palindrome
    if (isPalindrome(dateString)) {
        return dateString;
    } else {
        return "Error, this is not a palindrome";
    }
}

