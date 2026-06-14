const questions = [
    {
        question: "What's your main goal right now?",
        options: ["Earn extra cash on the side", "Find a better paying job abroad", "Save money on shopping", "Learn new skills"],
        emoji: "🎯"
    },
    {
        question: "Desired monthly extra income?",
        options: ["$100 - $500", "$500 - $1,500", "$1,500 - $3,000", "$3,000+"],
        emoji: "💰"
    },
    {
        question: "Which excites you most?",
        options: ["Remote work jobs", "Gift card rewards", "Paid surveys", "Shopping cashback"],
        emoji: "✨"
    },
    {
        question: "Weekly time commitment?",
        options: ["< 5 hours", "5 - 15 hours", "15 - 30 hours", "30+ hours"],
        emoji: "⏰"
    },
    {
        question: "What's holding you back?",
        options: ["Not sure where to begin", "Worried about scams", "Lack of time", "Need guaranteed results"],
        emoji: "🚀"
    }
];

let currentStep = 0;

function initQuiz() {
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentStep];
    const progress = ((currentStep) / questions.length) * 100;
    
    document.getElementById('progress-bar-fill').style.width = `${progress}%`;
    document.getElementById('question-emoji').innerText = q.emoji;
    document.getElementById('question-text').innerText = q.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => handleSelect(idx, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleSelect(idx, btn) {
    btn.classList.add('selected');
    
    setTimeout(() => {
        if (currentStep < questions.length - 1) {
            currentStep++;
            renderQuestion();
        } else {
            showResults();
        }
    }, 400);
}

function showResults() {
    document.getElementById('progress-bar-fill').style.width = `100%`;
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
}

function startExperience() {
    const overlay = document.getElementById('quiz-overlay');
    overlay.classList.add('fade-out');
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 500);
}

// Block scrolling while quiz is active
document.body.style.overflow = 'hidden';
window.onload = initQuiz;
