const userAnswers = [];

function confirmExample(description) {
  return confirm(description);
}

function promptExample(description) {
  return prompt(description);
}

function father(description, callback) {
  const result = callback(description);
  userAnswers.push(result);
}

father("¿Estás seguro?", confirmExample);
father("¿Cuál es tu nombre?", promptExample);
father("¿Cuál es tu edad?", promptExample);

console.log(userAnswers);