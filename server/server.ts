


const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

//array to store math
let calculations:any = [];
 
//doing the math
function orderOfOperations(numOne:number, numTwo:number, operator:string) {
  console.log('ran orderOfOperations()');//
  console.log('numOne: ', numOne);
  console.log('numTwo: ', numTwo);
  console.log('operation: ', operator);


  if (operator === "/")
    return Number(numOne) / Number(numTwo)
  else if (operator === '+')
    return Number(numOne) + Number(numTwo)
  else if (operator === "-")
    return Number(numOne) - Number(numTwo)
  else if (operator === "*")
    return Number(numOne) * Number(numTwo)
}

console.log(orderOfOperations(2, 2, "*"));

app.get('/calculations', (req:any, res:any) => {
  console.log('GET request received!',calculations);
  console.log('req.body: ', req.body);
  res.send(calculations);
});

app.post('/calculations', (req:any, res:any) => {
  console.log('Post request recieved');
  let newCalculation = req.body
  console.log(newCalculation);
  //puts data in array
  calculations.push(newCalculation)

//gets the last object property
let newAnwser = calculations[calculations.length-1];

//MATH!!!!!!
newAnwser.result = orderOfOperations(newAnwser.numOne, newAnwser.numTwo, newAnwser.operator);

console.log('expected result', newAnwser.result);
console.log('calulation Arr', calculations);

  res.sendStatus(201)
});
