import { isString, splitOnWhitespace } from "./helpers.js";

export function shortest(str) {
    if (isString(str)){
      const split = splitOnWhitespace(str);
      a = split[0];
      for (const word of split)
        if (word.length < a.length){
          a = word;
        }
      return a;
    }
    return null
  }
  console.assert(shortest('autumn is cold') === 'is', 'shortest normal')
  console.assert(shortest(1) === null, 'shortest number')
  console.assert(shortest('') === '', 'shortest  empty')