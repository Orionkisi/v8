import { isString } from "./helpers.js";

export function reverse(str) {
    if (isString(str)) {
      const split = str.split('');
        const reversed = split.reverse()
        return reversed.join('')
    }
    return(null);
  }
  console.assert(reverse('hjörtur') === 'rutröjh', 'reverse string')
  console.assert(reverse(false) === null, 'reverse false')