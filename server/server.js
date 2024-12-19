"use strict";
const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.static('server/public'));
//array to store math
let calculations = [];
//doing the math
function orderOfOperations(numOne, numTwo, operator) {
    console.log('ran orderOfOperations()'); //
    console.log('numOne: ', numOne);
    console.log('numTwo: ', numTwo);
    console.log('operation: ', operator);
    if (operator === "/")
        return Number(numOne) / Number(numTwo);
    else if (operator === '+')
        return Number(numOne) + Number(numTwo);
    else if (operator === "-")
        return Number(numOne) - Number(numTwo);
    else if (operator === "*")
        return Number(numOne) * Number(numTwo);
}
console.log(orderOfOperations(2, 2, "*"));
//# sourceMappingURL=server.js.map