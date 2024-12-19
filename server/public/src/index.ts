console.log('hello')
import axios from "axios";

let result = 0;
let operator = '';
//gets history AKA culculations results // we set the newCalculation object = to the response body
function getHistory() {
    axios({
        url: '/calculations',
        method: 'GET'
      }).then((response:any) => {
        let calculations = response.data 
       // renderCalulation(calculations)
        console.log('this data is being rendered', calculations);
                         
    });
}
