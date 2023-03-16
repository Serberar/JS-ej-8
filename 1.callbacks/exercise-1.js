const numbersList = [];

function sum(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function father(a, b, callback){
  const resultado = callback(a, b);
  numbersList.push(resultado);
}

father(8, 4, sum);
father(8, 4, subtract);
console.log(numbersList);
