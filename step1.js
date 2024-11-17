document.addEventListener('DOMContentLoaded', function() {
    const selectionPage = document.getElementById('selection-page');
    const problemPage = document.getElementById('problem-page');
    const problemList = document.getElementById('problem-list');
    const currentDan = document.getElementById('current-dan');
    const submitBtn = document.getElementById('submit-btn');

    // 각 단 버튼에 이벤트 리스너 추가
    for(let i = 1; i <= 9; i++) {
        const button = document.getElementById(`dan${i}`);
        button.addEventListener('click', () => showProblems(i));
    }
    document.getElementById('danAll').addEventListener('click', () => showProblems('all'));

    function showProblems(dan) {
        selectionPage.style.display = 'none';
        problemPage.style.display = 'block';
        currentDan.textContent = dan === 'all' ? '1~9단' : `${dan}단`;

        problemList.innerHTML = '';

        if(dan === 'all') {
            // 1~9단에서 랜덤하게 5문제 생성
            for(let i = 0; i < 5; i++) {
                const num1 = Math.floor(Math.random() * 9) + 1;
                const num2 = Math.floor(Math.random() * 9) + 1;
                createProblem(num1, num2);
            }
        } else {
            // 선택한 단의 1~9까지 문제 생성
            for(let i = 1; i <= 9; i++) {
                createProblem(dan, i);
            }
        }
    }

    function createProblem(num1, num2) {
        const problemDiv = document.createElement('div');
        problemDiv.className = 'problem-item';
        problemDiv.innerHTML = `
            ${num1} × ${num2} = <input type="number" data-answer="${num1 * num2}">
        `;
        problemList.appendChild(problemDiv);
    }

    submitBtn.addEventListener('click', checkAnswers);

    function checkAnswers() {
        let correct = 0;
        const inputs = problemList.querySelectorAll('input');
        inputs.forEach(input => {
            const userAnswer = parseInt(input.value);
            const correctAnswer = parseInt(input.dataset.answer);
            if(userAnswer === correctAnswer) {
                correct++;
                input.style.backgroundColor = '#e8f5e9';
            } else {
                input.style.backgroundColor = '#ffebee';
            }
        });

        alert(`${inputs.length}문제 중 ${correct}문제 맞았습니다!`);

        // 3초 후 선택 페이지로 돌아가기
        setTimeout(() => {
            selectionPage.style.display = 'block';
            problemPage.style.display = 'none';
        }, 3000);
    }
});