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

 
