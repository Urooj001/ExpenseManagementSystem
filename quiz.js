const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Markup Language", correct: false },
            { text: "Hyperlink and Text Markup Language", correct: false },
            { text: "Hyper Textual Markup Language", correct: false }
        ]
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        answers: [
            { text: "<title>", correct: true },
            { text: "<head>", correct: false },
            { text: "<meta>", correct: false },
            { text: "<link>", correct: false }
        ]
    },
    {
        question: "Which attribute is used to specify inline styles in HTML?",
        answers: [
            { text: "style", correct: true },
            { text: "styles", correct: false },
            { text: "class", correct: false },
            { text: "font", correct: false }
        ]
    },
    {
        question: "Which HTML element is used to create a line break?",
        answers: [
            { text: "<lb>", correct: false },
            { text: "<break>", correct: false },
            { text: "<br>", correct: true },
            { text: "<linebreak>", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to create a list?",
        answers: [
            { text: "<list>", correct: false },
            { text: "<ul>", correct: true },
            { text: "<ol>", correct: false },
            { text: "<dl>", correct: false }
        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: [
            { text: "<br>", correct: true },
            { text: "<break>", correct: false },
            { text: "<lb>", correct: false },
            { text: "<newline>", correct: false }
        ]
    },
    {
        question: "Which HTML element is used for the largest heading?",
        answers: [
            { text: "<h6>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<head>", correct: false },
            { text: "<heading>", correct: false }
        ]
    },
    {
        question: "What does the `<a>` tag in HTML define?",
        answers: [
            { text: "An anchor", correct: true },
            { text: "A paragraph", correct: false },
            { text: "An image", correct: false },
            { text: "A division", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "<link>", correct: false },
            { text: "<a>", correct: true },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false }
        ]
    },
    {
        question: "Which HTML attribute is used to specify the destination of a link?",
        answers: [
            { text: "src", correct: false },
            { text: "href", correct: true },
            { text: "link", correct: false },
            { text: "url", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const isCorrect = answer.correct;
    if (isCorrect) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        questionContainer.style.display = 'none';
        scoreContainer.style.display = 'block';
        scoreElement.innerText = score;
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
});

restartButton.addEventListener('click', startQuiz);

// Start the quiz the first time
startQuiz();