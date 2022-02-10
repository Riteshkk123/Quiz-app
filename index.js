const quizData = [
    {
        question:'what is my name ?',
        a:'Ritesh',
        b:'john',
        c:'vivek',
        d:'divya',
        correct:'a'
    },
    {
        question:'how is next PM of Big Indian ',
        a:'Narendra Damodardas Modi',
        b:'Yogi Adityanath',
        c:'Rahul Gandhi',
        d:'Sonia Gandhi',
        correct:'a'
    },

    {
        question:'most used programming language in 2021',
        a:'java',
        b:'Python',
        c:'javascript',
        d:'C++',
        correct:'c'
    },
    {
        question:'What is one of the big differences between traditional media and social media?',
        a:'participatory production',
        b:'social media reaches only a few people at a time',
        c:'the management structure of the companies',
        d:'traditional media offers no way for audiences to communicate with media producers',
        correct:'a'
    },
    {
        question:'Two increasingly important ethical aspects of social media are',
        a:'ratings and traffic',
        b:'transparency and privacy',
        c:'identity and honesty',
        d:'virtue and virality',
        correct:'d'
        
        
    },
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});