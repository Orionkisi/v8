import { isString } from "./helpers.js";

export function palindrome(str) {
    if (!isString(str) || str === '') {
        return false;
    }

    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}

console.assert(palindrome('rotator') === true, 'palindrome true');
console.assert(palindrome('rotating') === false, 'palindrome false');
console.assert(palindrome('') === false, 'palindrome false');