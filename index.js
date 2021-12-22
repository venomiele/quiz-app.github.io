const quizData = [
    { question: "How old is Andrei ?",
    a: "A: Andrei is 18 years old.",
    b: "B: Andrei is 20 years old.",
    c: "C: Andrei is 22 years old.",
    correct: "c"
    },
    { question: "What is the programming language Andrei likes the most ?",
    a: "A: Javascript",
    b: "B: Ruby",
    c: "C: C++",
    correct: "a"
    },
    { question: "Will Andrei get a job as a developer in the next year ?",
    a: "A: Yes",
    b: "B: Of course",
    c: "C: Sure",
    correct: "a"
    },
    { question: "Will You have a great day today ?",
    a: "A: Absolutely",
    b: "B: Indeed",
    c: "C: Yep",
    correct: "c"
     },
    { question: "What is Andrei's favorite animal ?",
a: "A: Dog",
b: "B: Cat",
c: "C: Wolf",
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
let section = document.querySelector(".rows");
let colored = document.getElementById("answers")
let errorMsg = document.querySelector(".error");
let correctionsBtn = document.querySelector(".corrections");
let dropDown = document.querySelector(".dropdown-row");
let animateStart = document.querySelector(".animation-start");


let score = 0;
let currentQuestion = 0;
let decision = undefined;
btn.disabled = true;
let checkArray = [];
let radioValue = undefined;
loadQuiz();
blockBtn();
populate(quizData);

// Start animation
window.addEventListener("DOMContentLoaded", () => {
setTimeout(animatedStart,1000);
})

function animatedStart() {
    animateStart.style.animationPlayState = "running";
}

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

  // Populating the right answers 


    function populate(Items) {
        let populateItems = Items.map(function(item) {
            return `<div id="dropdown">
            <div class="dropdown-row">
            <div class="dropdown-answers">
                <h2 class="question-answers">${item.question}</h2>
    </div>
          <p id="answers">The correct answer was ${item.correct}.</p>
        </div>
        </div>`
        })
        populateItems = populateItems.join("");
        dropDown.innerHTML = populateItems;
    }

    function errorFunct() {
        errorMsg.style.display = "block";
        errorMsg.style.color = "red";
        errorMsg.innerHTML = `The correct answer was ${quizData[currentQuestion - 1].correct} !`;   
    }
    
    function clearError() {
        errorMsg.style.display = "none";
    }

function lastQuestionAnswer() {
    container.style.display = "none";
    scoreBox.style.display = "block";
    scoreText.innerHTML = `You have answered correctly to ${score} out of 5 questions!`
}


btn.addEventListener("click", () => {
       
        let clientDecision = scoreNumber();    
        if(clientDecision === quizData[currentQuestion].correct) {
            score++;
            errorMsg.style.display = "block";
            errorMsg.style.color = "lightgreen";
            errorMsg.innerHTML = `Your answer was correct !`
            setTimeout(clearError,1800);         
        } else {
            setTimeout(errorFunct,0);
            setTimeout(clearError,1800);
        }
    
         currentQuestion++;
         blockBtn();
     

        if(currentQuestion < quizData.length) {
            loadQuiz();
        } else if(currentQuestion === quizData.length) {
            setTimeout(lastQuestionAnswer,3000);
    }        
});
