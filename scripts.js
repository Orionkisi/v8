/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from './lib/helpers.js';

const test = isString('hæ');
console.log('test er strengur?', test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);







const formElement = document.querySelector('form')

function submitHandler(event) {
    event.preventDefault();
    const { target } = event;
    const textareaElement = target.querySelector('textarea');
    const longestElement = document.querySelector('.longest');
    longestElement.textContent = reverse(textareaElement.value);
    console.log(textareaElement.value);
}

formElement.addEventListener('submit', submitHandler)

if (longestElement) {
    longestElement.textContent = 'eitthvað annað'
} 





/**
*
*@param {Element} el 
*/
function removeHidden(el) {
    el.classList.remove('hidden');
}
const outputElement = document.querySelector('.output');

if (outputElement) {
    removeHidden(outputElement);
}