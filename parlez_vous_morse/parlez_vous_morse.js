// // Function to translate a Latin character to Morse code

// const latinToMorse = {
// 	'A':'.-',
// 	'B':'-...',
// 	'C':'-.-.',
// 	'D':'-..',
// 	'E':'.',
// 	'F':'..-.',
// 	'G':'--.',
// 	'H':'....',
// 	'I':'..',
// 	'J':'.---',
// 	'K':'-.-',
// 	'L':'.-..',
// 	'M':'--',
// 	'N':'-.',
// 	'O':'---',
// 	'P':'.--.',
// 	'Q':'--.-',
// 	'R':'.-.',
// 	'S':'...',
// 	'T':'-',
// 	'U':'..-',
// 	'V':'...-',
// 	'W':'.--',
// 	'X':'-..-',
// 	'Y':'-.--',
// 	'Z':'--..'
// }

// const text =[ "H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d" ]

// function translatemorsecode(code){
// 	return latinToMorse[code.toUpperCase()] || ''  ;
// }
// console.log(translatemorsecode('C'))


// function getLatinCharacterList(text) {
//     for (let code = 0; code < text.length; i++) {
//        return latinToMorse[text[code].toUpperCase()] || '';
//    } 
// }
// console.log(getLatinCharacterList(text));



// // Function to translate a Morse code to a Latin character
// const morseToLatin = {
//   '-': "T",
//   '--': "M",
//   '---': "O",
//   '--.': "G",
//   '--.-': "Q",
//   '--..': "Z",
//   '-.': "N",
//   '-.-': "K",
//   '-.--': "Y",
//   '-.-.': "C",
//   '-..': "D",
//   '-..-': "X",
//   '-...': "B",
//   '.': "E",
//   '.-': "A",
//   '.--': "W",
//   '.---': "J",
//   '.--.': "P",
//   '.-.': "R",
//   '.-..': "L",
//   '..': "I",
//   '..-': "U",
//   '..-.': "F",
//   '...': "S",
//   '...-': "V",
//   '....': "H"
// }


// //function getmorseCharacterList(string,) { 
//    //return morseToLatin[string] || '';
// //}
// //console.log(getmorseCharacterList('..-.'))

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function getLatinCharacterList(text){
    return Array.from(text).map(char => latinToMorse[char.toUpperCase()] || '')
    .join(' ');
}console.log(getLatinCharacterList("Hello, world"));


//////

function translateLatinCharacter(character){
    return latinToMorse[character.toUpperCase()] || '';
}
console.log(translateLatinCharacter('A'));


///

// function encode(prompt){
//     return prompt.split('').map(char => latinToMorse[char.toUpperCase()] || '').join(' ');
// }
// console.log(encode(prompt=''))
const translateButton = document.getElementById("translateButton")

translateButton.addEventListener("click", () => { 
    const inputText = document.getElementById("inputText").value;
    const morseCode = getLatinCharacterList(inputText);
    document.getElementById("output").innerText = morseCode;
});
