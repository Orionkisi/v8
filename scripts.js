/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)){
    const split = str.split(' ');
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

function shortest(str) {
  if (isString(str)){
    const split = str.split(' ');
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

function reverse(str) {
  if (isString(str)) {
    const split = str.split('');
      const reversed = split.reverse()
      return reversed.join('')
  }
  return(null);
}
console.assert(reverse('hjörtur') === 'rutröjh', 'reverse string')
console.assert(reverse(false) === null, 'reverse false')

function palindrome(str) {
  const split = str;
  if (split == reverse(split) && split != ''){
    return true
  }
  return false
}
console.assert(palindrome('rotator') === true, 'palindrome true')
console.assert(palindrome('rotating') === false, 'palindrome false')
console.assert(palindrome('') === false, 'palindrome false')

function vowels(str) {
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

function consonants(str) {
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

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  let hasChoice = false;
  do {
    const hjörtur = prompt ('input')
    long = longest(hjörtur)
    short = shortest(hjörtur)
    rev = reverse(hjörtur)
    pal = palindrome(hjörtur)
    vow = vowels(hjörtur)
    con = consonants(hjörtur)
    
    hasChoice = true
  } while (hasChoice == false);
  alert("longest = " + long + "\nshortest = " + short + "\nreversed = " + rev + "\npalindromed = " + pal + "\nnumber of vowels = "
     + vow + "\nnumber of consonants = " + con)
    return('')
}
