/* global document */

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
}
//console.log(getLatinCharacterList("Hello, world"));


///

function translateLatinCharacter(character){
    return latinToMorse[character.toUpperCase()] || '';
}
console.log(translateLatinCharacter('A'));


///

// function encode(prompt){
//     return prompt.split('').map(char => latinToMorse[char.toUpperCase()] || '').join(' ');
// }
// console.log(encode(prompt=''))
//const translateButton = document.getElementById("translateButton")

translateButton = document.getElementById("translateButton");

translateButton.addEventListener("click", () => { 
    console.log("Button clicked");
    
    const inputText = document.getElementById("inputText").value;
    console.log("recup text:", inputText);
    
    const morseCode = getLatinCharacterList(inputText);
    console.log("function result", morseCode);
    
    document.getElementById("output").innerText = morseCode;
});
