// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    
    // setting data in an acceseable manner
    // alphabet values and reitering an empty space to be valued as an empty space
      const alphabet = {                                                                     
        a: "11", b: "21", c: "31", d: "41", e: "51",
        f: "12", g: "22", h: "32", i: "42", j: "42", k: "52",
        l: "13", m: "23", n: "33", o: "43", p: "53",
        q: "14", r: "24", s: "34", t: "44", u: "54",
        v: "15", w: "25", x: "35", y: "45", z: "55", [' ']: " "                            
      };
      
    // alphabet decoded. swapping the values of the alphabet
      const alphDecoded = {                                                                    
       11: "a", 12: "f", 13: "l", 14: "q", 15: "v", 21: "b", 22: "g", 23: "m", 
       24: "r", 25: "w", 31: "c", 32: "h", 33: "n", 34: "s", 35: "x", 41: "d", 
       42: "(i/j)", 43: "o", 44: "t", 45: "y", 51: "e", 52: "k", 53: "p",
       54: "u", 55: "z", [' ']: " "
      };
      
      // return early if not a sting 
      if(typeof input !== 'string') return false;   
      // reassign input to be an input with all lowercase                                         
      input = input.toLowerCase()                                            
  
      // enconding here so use the alphabet data
      if(encode) {                              
        // split our input into individal letters. Then use map to have a copy array of our return                                         
        return input.split('').map((letter) => {
          // returning that alphabets value to our copy array                                   
          return alphabet[letter]
          // join the data back together since we split it earlier                                                              
        }).join('')
        // now on to decoding: will use alphDecoded data set                                                                          
      } else {
        /* The character length should be an even number since each letter has a double digit value, if not return false.
          Also want to get rid of the spaces before checking the length. Replace will return the new string after the spaces have been removed
          \s metacharacter is used to match the whitespaces 
          the g flag is a modifer used to perform global match so it will find all the matches rather than stop at the first */
        if(input.replace(/\s/g,'').length % 2 !== 0) return false
        /* match retrieves the result of matching a string agaisnt a regular expression, either a 2 digit number or a space.
           Then use map to create a copt array of our retrun */
        return input.match(/[0-9]{2}|\s/g).map((number) => { 
          // returning the alphDecoded value(letter) that corresponds the number
          return alphDecoded[number] 
          // join the data back together after split that was done earlier
        }).join('')                                  
      }
    }
  
    return {
      polybius,
    };
  })();



module.exports = { polybius: polybiusModule.polybius };
