import { isString } from './helpers.js';

const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

function countGivenCharactersInString(str, characters) {
  if (!isString(str)) {
    return 0;
  }

  const splitStr = split(str, '');

  let count = 0;

  for (const char of splitStr) {
    if (characters.includes(char)) {
      count += 1;
    }
  }

  return count;
}

export function consonants(str) {
  return countGivenCharactersInString(str, CONSONANTS);
}