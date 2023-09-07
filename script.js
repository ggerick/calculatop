const sum =  (num1, num2) => num1 + num2;
const subs = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const divi = (num1, num2) => num1 / num2;
const resultado = document.getElementById("result");
let displayValue = 0;
let nu1;
let operator = '';
let nu2;

 const operate = (op, num1, num2) => {
     if (op === '+') return sum(num1,num2);
     else if (op === '-') return subs(num1,num2);
     else if (op === '/') return divi(num1,num2);
     else if (op === '*') return multi(num1,num2);
 }


// console.log(operate('*',2,4));

const number = (numero) => {
    displayValue = numero;
    resultado.textContent = numero;
    if(isNaN(numero)) {
        operator = numero;
        console.log(operator);
    }
    else {
        if(!nu1) {
        nu1 = numero;
        console.log('HOLA -> ' + nu1);
    }
    else {
        nu2 = numero;
        console.log('ADIOS -> ' + nu2);
    }
    }
    
}

// const operatorValue = (a) => {
//     operator = a;

//     resultado.textContent = a;
    
// }