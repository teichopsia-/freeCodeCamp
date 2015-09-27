/* Return true if given string is a palindrome
          false otherwise
          Strips out all alphanumeric characters and spaces
*/

// @jones-codes freecodecamp user 

function palindrome(str) {
    // toLocaleLowerCase may be preffered
    // http://stackoverflow.com/questions/154862/convert-javascript-string-to-be-all-lower-case
    var er = /[\_\W\s]/gi
    str = str.toLowerCase().replace(er, '');
    console.log(str)
    var index = 0;
    var last = str.length -1
    while (index < str.length) {
        if (str[index] == str[last - index]) {
            index++;
            if (index == last) {
            return true;
            }
        }
        else {
            return false;
            }
        }
    }


palindrome("eye");    
