import { isString } from "./helpers.js";

export function consonants(str) {
    if (isString(str)){
      const split = str.split('');
      a = 0;
      for (const letter of split)
        for (const consonant of CONSONANTS)
          if (letter == consonant){
            a = ++a;
          }
    }
    return a;
  }
  console.assert(consonants('queueing') === 3, 'consonants word')
  console.assert(consonants('') === 0, 'consonants empty')
  console.assert(consonants(1) === 0, 'consonants not word')