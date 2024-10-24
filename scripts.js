/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from './lib/helpers.js';
import { reverse } from './lib/reverse.js';
import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { palindrome } from './lib/palindrome.js';
import { vowels } from './lib/vowels.js';
import { consonants } from './lib/consonants.js';

const test = isString('hæ');
console.log('test er strengur?', test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

function submitHandler(event) {
    event.preventDefault();
    const { target } = event;
    const textareaElement = target.querySelector('textarea');

    const inputElement = document.querySelector('.input');
    inputElement.textContent = textareaElement.value;

    const longestElement = document.querySelector('.longest');
    longestElement.textContent = longest(textareaElement.value);

    const reversedElement = document.querySelector('.reversed');
    reversedElement.textContent = reverse(textareaElement.value);

    const shortestElement = document.querySelector('.shortest');
    shortestElement.textContent = shortest(textareaElement.value);

    const vowelsElement = document.querySelector('.vowels');
    vowelsElement.textContent = vowels(textareaElement.value);

    const consonantsElement = document.querySelector('.consonants');
    consonantsElement.textContent = consonants(textareaElement.value);

    const palindromeElement = document.querySelector('.palindrome');
    const palindromes = palindrome(textareaElement.value);

    if (palindromes == true) {
        palindromeElement.textContent = '';
    }
    else {
        palindromeElement.textContent = 'ekki';
    }

    console.log(textareaElement.value);
}

const formElement = document.querySelector('form')
formElement.addEventListener('submit', submitHandler)

function removeHidden(el){
    el.classList.remove('hidden');
}

const outputElement = document.querySelector('.output')

if (outputElement) {
    removeHidden(outputElement);
}