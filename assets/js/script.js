/**
 * to start the game when we click on start button
 */
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
startButton.addEventListener("click", startGame);

function startGame() {
    console.log("started");
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}
/**
 * to set the next question when we click on next button
 */
function setNextQuestion() {

}

/**
 * select an answer
 */

function selectAnswer() {

}

const questions [
    {
        question: "What is 2 + 2?",
        answers: [
            { text:"4", correct: true }
            { text: "22", correct: false }
        ]
    }
]