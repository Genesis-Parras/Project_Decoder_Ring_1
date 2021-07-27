// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

 const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // if no alphabet return false, alphabet must be 26 characters long otherwise, return false.
    if(!alphabet || alphabet.length !== 26) return false;
    // split up the actual alphabet so its accesable
    const realAbcs = "abcdefghijklmnopqrstuvwxyz ".split("")
    // create an array to hold the alphabet given as I check for duplicates
    let checkingAbcs = [];
    // loop through the alphabet given
    for (let i = 0; i < alphabet.length; i++){
      let letter = alphabet[i];
      // check if the letter is in the array already
      if (checkingAbcs.includes(letter)){
        return false;
      }
      // push non duplicate letter into array
      checkingAbcs.push(letter) 
    }
    // console.log("checkingAbcs --->", checkingAbcs, "<---")
    let alteredAbcs = [...alphabet, " "];
    input = input.toLowerCase().split('');
    // console.log("altabcs -->", alteredAbcs, "<---")

    // check for encoding
    if (encode === true) {
      // use map to create a copy array of our following callback function
      return input.map((letter) => {
        // will be returning the character from alteredAbcs at that index of our real abcs
        return alteredAbcs[realAbcs.indexOf(letter)]
        // join the characters
      }).join('')
    } else {
      // to decode just reverse the proccess of above essentially
      return input.map((letter) => {
        return realAbcs[alteredAbcs.indexOf(letter)]
      }).join('')
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
