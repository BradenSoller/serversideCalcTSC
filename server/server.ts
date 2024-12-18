


const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

//array to store math
let calculations = [];
 
//doing the math
function orderOfOperations(numOne:any, numTwo:any, operator:any) {
  console.log('ran orderOfOperations()');//
  console.log('numOne: ', numOne);
  console.log('numTwo: ', numTwo);
  console.log('operation: ', operator);

  if (operator === "/")
    return parseFloat(numOne / numTwo)
  else if (operator === '+')
    return parseFloat(numOne +numTwo)
  else if (operator === "-")
    return parseFloat(numOne - numTwo)
  else if (operator === "*")
    return parseFloat(numOne * numTwo)
}

