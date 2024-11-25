const correctAnswers = ["정답1", "정답2"]; // 문제에 대한 정답 배열

function submitAnswers() {
    const answers = [
        document.getElementById('question1').value,
        document.getElementById('question2').value
    ];

    let score = 0;
    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `맞힌 문제 수: ${score} / ${correctAnswers.length}`;
    // 추가적인 로직으로 시간을 측정할 수 있습니다.
}
