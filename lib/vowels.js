import { isString } from "./helpers.js";

export function vowels(str) {
    if (isString(str)){
      const split = str.split('');
      a = 0;
      for (const letter of split)
        for (const vowel of VOWELS)
          if (letter == vowel){
            a = ++a;
          }
    }
    return a;
  }
  console.assert(vowels('queueing') === 5, 'vowels word')
  console.assert(vowels('') === 0, 'vowels empty')
  console.assert(vowels(1) === 0, 'vowels not word')