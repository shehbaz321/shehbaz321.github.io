 <!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Instant Math Quiz</title>
 <link rel="stylesheet" href="styles.css">
</head>
<body>
 <div class="container">
 <h1>Instant Math Quiz</h1>
 <div id="operation">
 <label for="operation-select">Choose an operation:</label>
 <select id="operation-select">
 <option value="+">Addition (+)</option>
 <option value="-">Subtraction (-)</option>
 <option value="×">Multiplication (×)</option>
 <option value="÷">Division (÷)</option>
 </select>
 </div>
 <div id="questions">
 <label for="num-questions">Number of Questions:</label>
 <input type="number" id="num-questions" min="1" value="5">
 </div>
 <button onclick="startQuiz()">Start Quiz</button>
 <div id="quiz"></div>
 <div id="result"></div>
 </div>
 <script src="script.js"></script>
</body>
</html>
 body {
 font-family: Arial, sans-serif;
}
.container {
 max-width: 600px;
 margin: 0 auto;
 text-align: center;
}
h1 {
 color: #333;
}
#operation, #questions {
 margin-bottom: 20px;
}
#operation-select {
 padding: 5px;
}
button {
 padding: 10px 20px;
 background-color: #007bff;
 color: #fff;
 border: none;
 cursor: pointer;
}
button:hover {
 background-color: #0056b3;
}
JAVA SCRIPT (script.js)
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
 const { question, answer } = …
 break;
 }
 }
 const scorePercentage = (correctAnswers / numQuestions) * 100;
 const resultText = You answered ${correctAnswers} out of ${numQuestions} questions correctly. Your score: ${scorePercentage.toFixed(2)}%;
 document.getElementById("result").innerText = resultText;
}
