/* Return true if given string is a palindrome
          false otherwise
          Strips out all alphanumeric characters and spaces
*/


// no need to escape _ when at begginning or end of [ ]
//  /[_\W\s]/gi

// toLocaleLowerCase may be preffered
// http://stackoverflow.com/questions/154862/convert-javascript-string-to-be-all-lower-case

function palindrome(str) {
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


palindrome("eye");    //true
palindrome("not a palindrome"); //false
palindrome("0_0 (: /-\ :) 0-0"); //true
palindrome("1 eye for of 1 eye."); //false
palindrome("My age is 0, 0 si ega ym."); //true
palindrome("My age is 0, 0 si ega ym."); //true


/*
Other solutions

function palindrome(str) {
  str = str.replace(/[\W_]/ig, "").toLowerCase();
  return str == str.split('').reverse().join('');
}

*/


