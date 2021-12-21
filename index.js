const quizData = [
    { question: "How old is Andrei?",
    a: "Andrei is 18 years old.",
    b: "Andrei is 20 years old.",
    c: "Andrei is 22 years old.",
    correct: "c"
    },
    { question: "What is the programming language Andrei likes the most ?",
    a: "Javascript",
    b: "Ruby",
    c: "C++",
    correct: "a"
    },
    { question: "Will Andrei get a job as a developer in the next year?",
    a: "Yes",
    b: "Of course",
    c: "Sure",
    correct: "a"
    },
    { question: "Will You have a great day today?",
    a: "Yes",
    b: "Of course",
    c: "Sure",
    correct: "c"
     },
    { question: "What is Andrei's favorite animal?",
a: "Dog",
b: "Cat",
c: "Wolf",
correct: "b"
    }
];

let container = document.querySelector(".hero-container")
let question = document.querySelector(".question");
let a_1 = document.getElementById("answer1");
let b_2 = document.getElementById("answer2");
let c_3 = document.getElementById("answer3");
let btn = document.querySelector(".btn");
let chosen = document.querySelectorAll(".select");
let error = document.querySelector(".error");
let scoreBox = document.querySelector(".score-box");
let scoreText = document.querySelector(".score");

let score = 0;
let decision = undefined;
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

function scoreNumber () {
    chosen.forEach(function(inputs){
        if(inputs.checked) {
            decision = inputs.id;     
        }
    });
    return decision;
    }



btn.addEventListener("click", () => {
       
        let clientDecision = scoreNumber();    
        if(clientDecision === quizData[currentQuestion].correct) {
            score++;
        }       
        currentQuestion++;
         blockBtn();
     

        if(currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            container.style.display = "none";
            scoreBox.style.display = "block";
            scoreText.innerHTML = `You have answered correctly to ${score} out of 5 questions!`
                     }
         
        
});