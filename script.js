function generateQuestion(operation) { 
  let num1 = Math.floor(Math.random() * 10) + 1;
 let num2 = Math.floor(Math.random() * 10) + 1;
 let question, answer;
 switch (operation) {
 case '+':
 answer = num1 + num2;
 question = What is ${num1} + ${num2}?;
 break;
 case '-':
 answer = num1 - num2;
 question = What is ${num1} - ${num2}?;
 break;
 case '×':
 answer = num1 * num2;
 question = What is ${num1} × ${num2}?;
 break;
 case '÷':
 while (num1 % num2 !== 0) {
 num1 = Math.floor(Math.random() * 10) + 1;
 num2 = Math.floor(Math.random() * 10) + 1;
 }
 answer = num1 / num2;
 question = What is ${num1} ÷ ${num2}?;
 break;
 }
 return { question, answer };
}
function startQuiz() {
 const operation = document.getElementById("operation-select").value;
 const numQuestions = parseInt(document.getElementById("num-questions").value);
 let correctAnswers = 0;
 let quizContent = "";
 for (let i = 0; i < numQuestions; i++) {
 const { question, answer } = generateQuestion(operation);
 const userAnswer = prompt(question);
 if (userAnswer !== null) {
 const parsedUserAnswer = parseInt(userAnswer);
 if (!isNaN(parsedUserAnswer) && parsedUserAnswer === answer) {
 correctAnswers++;
 }
 } else {
 break;
 }
 }
 const scorePercentage = (correctAnswers / numQuestions) * 100;
 const resultText = You answered ${correctAnswers} out of ${numQuestions} questions correctly. Your score: ${scorePercentage.toFixed(2)}%;
 document.getElementById("result").innerText = resultText;
}
