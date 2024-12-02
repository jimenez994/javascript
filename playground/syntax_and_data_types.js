// var is a function block scope that variable lives in 
// this set up wouldn't work if using let or const 

function printFirstName(first_name) {
  if (first_name != "") { 
    var person1_name = first_name
  }
  console.log(person1_name);  
  
}
printFirstName("Jonathan")



// let only lives withing the block scope that is in 
function printLastName(last_name) {
  if (last_name != "") {
    let person2 = last_name
    console.log(person2);
    person2 = "Jackson"
    console.log(person2);
    
  }
}
printLastName("Jimenez")



// const lives withing the block and cannot be changed  d
const person = {
  first_name: "",
  last_name: ""
}

person.first_name = "Jonathan"
console.log(person);

const social = "693"
console.log(social);




