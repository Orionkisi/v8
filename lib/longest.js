import { isString } from './helpers.js';


export function longest(str) {
    if (!isString(str)) {
      return null;
    }
  
    const words = str.split(' ');
  
    let longestWord = '';
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }