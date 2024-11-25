// 문제 리스트 정의
const questions = [
    { text: "6 x 7 = ?", answer: 42 },
    { text: "6 x 4 = ?", answer: 24 },
    { text: "6 x 5 = ?", answer: 30 },
    { text: "6 x 1 = ?", answer: 6 },
    { text: "6 x 6 = ?", answer: 36 },
    { text: "5 x 4 = ?", answer: 20 },
    { text: "6 x 2 = ?", answer: 12 },
    { text: "5 x 2 = ?", answer: 10 },
    { text: "5 x 7 = ?", answer: 35 },
    { text: "3 x 8 = ?", answer: 24 },
    { text: "6 x 3 = ?", answer: 18 },
    { text: "4 x 9 = ?", answer: 36 },
    { text: "5 x 9 = ?", answer: 45 },
    { text: "4 x 3 = ?", answer: 12 },
    { text: "8 x 2 = ?", answer: 16 },
    { text: "7 x 3 = ?", answer: 21 },
    { text: "9 x 1 = ?", answer: 9 },
    { text: "8 x 3 = ?", answer: 24 },
    { text: "6 x 2 = ?", answer: 12 },
    { text: "5 x 10 = ?", answer: 50 }
];

let incorrectAnswers = []; // 틀린 문제 저장

// 문제 보여주는 함수
function loadQuestions() {
    const container = document.getElementById('questionContainer');
    container.innerHTML = ''; // 기존 내용 초기화

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <label>${question.text}</label>
            <input type="number" id="answer${index}" required>
        `;
        container.appendChild(questionElement);
    });
}

// 제출 버튼 이벤트 리스너
document.getElementById('submitAnswer').addEventListener('click', () => {
    questions.forEach((question, index) => {
        const userAnswer = parseInt(document.getElementById(`answer${index}`).value); // 사용자가 입력한 답
        if (userAnswer !== question.answer) { // 틀린 문제인가 확인
            incorrectAnswers.push(question); // 틀린 문제 저장
        }
    });

    if (incorrectAnswers.length > 0) {
        // 틀린 문제가 있으면 Step 2로 이동
        window.localStorage.setItem('incorrectAnswers', JSON.stringify(incorrectAnswers));
        window.location.href = 'step2.html'; // Step 2로 이동
    } else {
        alert("모든 문제를 정답으로 풀었습니다!"); // 모든 문제를 맞춘 경우
    }
});

// 페이지 로드 시 질문 로드
window.onload = loadQuestions;
