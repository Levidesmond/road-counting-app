/*
1. This is a program that helps us to keep track of a number. 
2. We store the number in a variable called 'count'. 
3. We also have a variable called 'countEl' which stores the element on the webpage with the id "count-el". 
4. The function 'increment' helps us increase the number in the variable 'count' by one every time we call it. 
5. Lastly, the program updates the webpage so that it shows the new number.
*/

// store the html id="count-el" in a model representation called countEl
let countEl = document.getElementById("count-el");
//set the value of count = 0
let count = 0;
// use a fuction called increment to increase the count value
function increment() {
  count += 1;
  countEl.textContent = count;
}

let decrementEl = document.getElementById("decrement-el")

function decrement() {
  count -= 1
  countEl.innerText = count

}
// to add a save key inorder to save your count
// store the save-el in a variable called seveEl

let saveEl = document.getElementById("save-el");

// create a function, save(),
function save() {
  // create another variable called countstring that contain both the count and dash seperator i.e 12-34-11
  let countstring = count + " - ";

  // render the varable using saveEl using innertext

  saveEl.textContent += countstring;
  /* Note 1 : we used the (saveEl.textcontent) instead of the (saveEl.innertext) to show
    hidden space in the HTML file  chec MDN for better understanding 
  Note 2: if you use ( saveEl.textcontent = countstring ) the existing content of the paragraph
  // will be deleted
  */

  // write the code to take count back to 0
  countEl.textContent = 0;
  count = 0;
}
