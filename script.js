/*
- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

const number1 = Number(prompt('Digite o primeiro número:'));
const number2 = Number(prompt('Digite o segundo número:'));

function sum(num1, num2) {
  let sum = num1 + num2;
  return alert(`A soma dos dois números é ${sum}`)
}

function sub(num1, num2) {
  let sub = num1 - num2;
  return alert(`A subtração dos dois números é: ${sub}`)
}

function mult(num1, num2) {
  let mult = num1 * num2;
  return alert(`A multiplicação dos dois números é: ${mult}`)
}

function div(num1, num2) {
  let div = num1 / num2;
  return alert(`A divisão dos dois números é: ${div}`)
}

function rest(num1, num2) {
  let rest = num1 % num2;
  return alert(`O resto dos dois números é: ${rest}`)
}

function checkPair(num1, num2) {
  if(((num1 + num2) % 2) !== 0) {
    alert('A soma dos dois números é ÍMPAR')
  } else {
    alert('A soma dos dois números é PAR')    
  }
}

function checkIfEqual(num1, num2) {
  if(num1 !== num2) {
    alert('Os dois números são DIFERENTES!')
  } else {
    alert('Os números são IGUAIS!')    
  }
}

sum(number1, number2);
sub(number1, number2);
mult(number1, number2);
div(number1, number2);
rest(number1, number2);
checkPair(number1, number2);
checkIfEqual(number1, number2);