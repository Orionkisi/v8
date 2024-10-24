import { isString, splitOnWhitespace } from "./helpers.js";

export function longest(str) {
    if (isString(str)){
      const split = splitOnWhitespace(str);
      a = '';
      for (const word of split)
        if (word.length > a.length){
          a = word;
        }
      return a;
    }
    return null
  }
  console.assert(longest('autumn is cold') === 'autumn', 'longest normal')
  console.assert(longest(1) === null, 'longest number')
  console.assert(longest('') === '', 'longest empty')