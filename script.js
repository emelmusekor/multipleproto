// STEP1에서 사용할 스크립트
let answers = [];
let currentQuestion = 0;

function submitAnswer() {
    const input = document.getElementById('answerInput');
    answers[currentQuestion] = input.value;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        window.location.href = 'step2.html';
    }
}

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').innerText = question.problem + ' = ';
    document.getElementById('answerInput').value = '';
}
