// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
// defining shift so it will always be present
  function caesar(input, shift = 0, encode = true) {
    // where our encoded or decoded message will store
    let result = "";
    // If the shift value is not present (irrelevenat since shift was defined), equal to 0, less than -25, or greater than 25, the function should return false.
    if(shift === 0 || shift < -25 || shift > 25) return false;
   // if decoding then multiply by -1, essentially make it a neg # that way it shifts to the left
    if(!encode) shift *= -1;

    // convert the input into lower case letters
    input = input.toLowerCase();
    
    // loop through the input
    for (let i =0; i < input.length; i++){
      // create a new var that holds the unicode value of the input
      let inputChar = input.charCodeAt(i);
      // check condition: check that the character code is in the lower case range 96 - 123
      if (inputChar < 123 && inputChar > 96) {
        // now take that character value and add the shift amount to it
        let shiftedInput = inputChar + shift;
        // check for special cases: if the shiftedInput lower than 96 then it has to do a wrap of our alaphabet
        if (shiftedInput < 97) {
          // make the characters less than 97 wrap around back to 123
          shiftedInput = 123 + (shiftedInput - 97)
        } else if (shiftedInput > 122) {
         // check for special cases: if the shiftedInput higher than 122 then it has to do a wrap of our alaphabet
          shiftedInput = (shiftedInput % 122) + 96;
        }
        // want to convert our character codes into a string
        result += String.fromCharCode(shiftedInput)
      } else {
        result += input[i];
      }
    }
    // return the new string made
    return result;
  }
    return {
      caesar,
    };
})();


module.exports = { caesar: caesarModule.caesar };
