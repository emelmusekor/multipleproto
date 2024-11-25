// 문제 리스트 정의
const questions = [
    { text: "6 x 7 = ?", answer: 42 },
    { text: "6 x 4 = ?", answer: 24 },
    { text: "6 x 5 = ?", answer: 30 },
    { text: "6 x 1 = ?", answer: 6 },
    { text: "6 x 7 = ?", answer: 42 },
    { text: "6 x 6 = ?", answer: 36 },
    { text: "5 x 4 = ?", answer: 20 },
    { text: "6 x 2 = ?", answer: 12 },
    { text: "5 x 2 = ?", answer: 10 },
    { text: "5 x 7 = ?", answer: 35 },
    { text: "3 x 8 = ?", answer: 24 },
    { text: "6 x 3 = ?", answer: 18 },
    { text: "6 x 4 = ?", answer: 24 },
    { text: "6 x 7 = ?", answer: 42 },
    { text: "5 x 9 = ?", answer: 45 },
    { text: "4 x 9 = ?", answer: 36 },
    { text: "5 x 2 = ?", answer: 10 },
    { text: "6 x 2 = ?", answer: 12 },
    { text: "6 x 7 = ?", answer: 42 },
    { text: "4 x 3 = ?", answer: 12 }
];

let currentQuestionIndex = 0; // 현재 질문 인덱스
let incorrectAnswers = []; // 틀린 문제 저장

// 문제 보여주는 함수
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('questionContainer').innerText = question.text;
}

// 제출 버튼 이벤트 리스너
document.getElementById('submitAnswer').addEventListener('click', () => {
    const userAnswer = parseInt(document.getElementById('answer').value); // 사용자가 입력한 답

    if (userAnswer === questions[currentQuestionIndex].answer) { // 정답 확인
        currentQuestionIndex++;
    } else {
        incorrectAnswers.push(questions[currentQuestionIndex]); // 틀린 문제 저장
        currentQuestionIndex++;
    }

    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // 다음 질문 로드
    } else {
        // 모든 문제를 푼 경우, 결과 페이지로 이동
        window.location.href = 'step2.html'; // Step 2로 이동
    }
});

// 페이지 로드 시 첫 번째 질문 보여주기
window.onload = loadQuestion;
