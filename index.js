const quizData = [
    { question: "How old is Andrei?",
    a: "Andrei is 18 years old.",
    b: "Andrei is 20 years old.",
    c: "Andrei is 22 years old.",
    correct: "Andrei is 22 years old."
    },
    { question: "What is the programming language Andrei likes the most ?",
    a: "Javascript",
    b: "Ruby",
    c: "C++",
    correct: "Javascript"
    },
    { question: "Will Andrei get a job as a developer in the next year?",
    a: "Yes",
    b: "Of course",
    c: "Sure",
    correct: "Yes"
    },
    { question: "Will You have a great day today?",
    a: "Yes",
    b: "Of course",
    c: "Sure",
    correct: "Sure"
    }
];

let container = document.querySelector(".hero-container")
let question = document.querySelector(".question");
let a_1 = document.getElementById("a");
let b_2 = document.getElementById("b");
let c_3 = document.getElementById("c");
let btn = document.querySelector(".btn");
let chosen = document.querySelectorAll(".select");
let error = document.querySelector(".error");

let currentQuestion = 0;
btn.disabled = true;
let checkArray = [];
loadQuiz();
blockBtn();


function deselectAnswers() {
    chosen.forEach(function(inputs){
        inputs.checked = false;
    })
}
function blockBtn() {
    chosen.forEach(function(inputs){
        inputs.addEventListener("click", () => {
        let results = checkArray.push(inputs.value);
        if(checkArray.includes("true")) {
            btn.disabled = false;
        }
    })
    checkArray = [];
    if(checkArray = []) {
btn.disabled = true;
    }

    })
}


function loadQuiz() {
    deselectAnswers();
let currentData = quizData[currentQuestion];
question.innerHTML = currentData.question;
a_1.innerHTML = currentData.a;
b_2.innerHTML = currentData.b;
c_3.innerHTML = currentData.c; 
}


btn.addEventListener("click", () => {
        currentQuestion++;
        blockBtn();
         loadQuiz();
});