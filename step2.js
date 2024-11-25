// 틀린 문제들 저장
let incorrectAnswers = JSON.parse(localStorage.getItem('incorrectAnswers')) || [];

// 결과 보여주기 위한 함수
function displayResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    if (incorrectAnswers.length === 0) {
        resultsContainer.innerHTML = '<h2>모든 문제를 맞췄습니다! 🎉</h2>';
    } else {
        // 틀린 문제 표시
        let resultHtml = '<h2>틀린 문제들:</h2><ul>';
        incorrectAnswers.forEach(question => {
            resultHtml += `<li>${question.text} 정답: ${question.answer}</li>`;
        });
        resultHtml += '</ul>';
        resultsContainer.innerHTML = resultHtml;
    }
}

// 초기화 작업
function initialize() {
    // 페이지 로드 시 결과 표시
    displayResults();
}

// 문서 로드 시 초기화
document.addEventListener('DOMContentLoaded', initialize);
