// What is Hoisting in JavaScript? 
// In JS we can use function before they are initialized.


// We are able to console.log getName function because when the JS code is running
// In the first phase (Memory Creation Phase).JS will allocate or reserve memory to all the variable and function
// for variable it is stored as undefined
// function will have whole code 

getName();
console.log(x); // logs undefined
console.log(getName);
var x = 5;

function getName() {
  console.log("jai shree ram");
}


//In the second phase of JS (Code Execution Phase).JS will run again line by line
// start allocating real value of variable to it 


// ()=>  function will be treated as variable 
// calling the function before initialization will throw error

//Uncaught ReferenceError: Cannot access 'getName2' before initialization
//at index.js:22:1

getName2()
const getName2 =()=>{
    console.log("arrow Function")
}