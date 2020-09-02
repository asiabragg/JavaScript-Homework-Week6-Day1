//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, lst){
  lower_case_string = str.toLowerCase();
  lower_case_array = lst.map(word => word.toLowerCase());
    for (let words of lower_case_array) {
      let index = lower_case_string.indexOf(words);
      if(index !== -1) {
        console.log(`Matched ${words}`);
      } else {
        console.log("No Match");
      }
    }
}

//Call method here with parameters
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
console.log(replaceEvens(arr))