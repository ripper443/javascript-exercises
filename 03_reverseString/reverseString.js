const reverseString = function(word) {
    // word[4] = o (last letter)
let num = word.length-1;            // word[5] = undefined
let arr = [];
let newarr = [];
for (let i = num; i >= 0; i--){
arr.push( word[i]);           
}

for (let i = arr.length-1; i >= 0; i--){ // converts letter back to normal(unnecessary)
newarr.push(arr[i]);
}

let latest = arr.join("");
return latest;

};

// Do not edit below this line
module.exports = reverseString;


/**
 * 1. store a value to the variable old
 * let old = word;
 * 2. count number of letters, store in a variable indexOld
 * let indexOld = old.length;
 * let updatedWord = [];
 * 3. loop starts from indexOld to lowest(array indexing),
 * store it in updatedWord
 * for (let i = indexOld; i<=0 ; i--){
 *  updatedWord += old[i];
 * }
 * 
 * let latest = '';
 * 4. use for loop to loop through updatedWord += store it in an array
 * for (let up of updatedWord){
 *  latest += up
 * }
 * 
 * 
 * 5. convert array to string assign latest  --- no need?
 * 6. return latest
 




arr = ["o","l","l","e","h"];
arr.length -1;

newarr = ["h","e","l","l","o"];
newarr.join("");
 **/
   