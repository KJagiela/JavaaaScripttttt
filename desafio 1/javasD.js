const questions = [
    {
        question: "Qual é o nome da gangue da qual Arthur Morgan faz parte?",
        answers: [
            "Gangue O'Driscoll",
            "Gangue Lemoyne Raiders",
            "Gangue Van der Linde",
            "Gangue Del Lobo"
        ],
        correct: 2
    },
    {
        question: "Quem é o líder da gangue de Arthur Morgan?",
        answers: [
            "Hosea Matthews",
            "Dutch van der Linde",
            "John Marston",
            "Micah Bell"
        ],
        correct: 1
    },
    {
        question: "Em qual jogo Arthur Morgan é o protagonista principal?",
        answers: [
            "Red Dead Revolver",
            "Red Dead Redemption",
            "Grand Theft Auto V",
            "Red Dead Redemption 2"
        ],
        correct: 3
    },
    {
        question: "Qual doença Arthur Morgan contrai durante a história?",
        answers: [
            "Pneumonia",
            "Cólera",
            "Tuberculose",
            "Gripe Espanhola"
        ],
        correct: 2
    },
    {
        question: "Qual é a profissão principal de Arthur Morgan no início do jogo?",
        answers: [
            "Xerife",
            "Caçador de recompensas",
            "Fazendeiro",
            "Fora da lei"
        ],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("startBtn");

const quizElement = document.getElementById("quiz");
const progress = document.getElementById("progress");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

function showQuestion() {

    const question = questions[currentQuestion];

    progress.textContent =
        `Pergunta ${currentQuestion} de ${questions.length}`;

    questionElement.textContent = question.question;

    answersElement.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;
        button.classList.add("answer-btn");

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex, button) {

    const correctIndex = questions[currentQuestion].correct;
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(btn => btn.disabled = true);

    buttons[correctIndex].classList.add("correct");

    if (selectedIndex !== correctIndex) {
        button.classList.add("wrong");
    } else {
        score++;
    }

    setTimeout(() => {

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            currentQuestion = nextQuestion;
            showQuestion();
        } else {
            showResult();
        }

    }, 1000);
}
    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }

    }, 1000);


function showResult() {

    quizElement.classList.add("hidden");
    resultElement.classList.remove("hidden");

    scoreElement.textContent =
        `Você acertou ${score} de ${questions.length} perguntas.`;

    if (score <= 2) {
        messageElement.textContent =
            "Continue praticando!";
    } else if (score <= 4) {
        messageElement.textContent =
            "Bom trabalho!";
    } else {
        messageElement.textContent =
            "Perfeito! 🎉";
    }
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    resultElement.classList.add("hidden");
    startScreen.classList.remove("hidden");
}

startBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");
    quizElement.classList.remove("hidden");

    showQuestion();
});

restartBtn.addEventListener("click", restartQuiz);