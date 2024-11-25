// STEP2에서 사용할 스크립트
let incorrectAnswers = []; // 틀린 문제 저장
let timeStart = Date.now();

function submitAnswer() {
    const input = document.getElementById('answerInput').value;
    const question = questions[currentQuestion];

    if (input != question.answer) {
        incorrectAnswers.push(question);
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').innerText = question.problem + ' = ';
    document.getElementById('answerInput').value = '';
}

function displayResult() {
    const timeTaken = (Date.now() - timeStart) / 1000; // 초 단위
    document.getElementById('result').innerText = `틀린 문제 개수: ${incorrectAnswers.length}, 소요 시간: ${timeTaken}초`;
}
