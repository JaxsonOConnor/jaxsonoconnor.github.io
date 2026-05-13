const questions = [
    "What does 'CPR' stand for?",
    "What is the U.S. Emergency number?",
    "What is the first thing you should\ncheck before helping somebody?",
    "Where should chest compressions be performed?",
    "What is the safe chest compression rate for adults?",
    "What is the purpose of an AED (Defribulator)?",
    "If someone is choking and cannot speak\nor breathe, what should you do?",
    "If someone is unconscious but still\nbreathing, what should you do?",
    "How do you control severe bleeding?",
    "What is the first step in treating a minor burn?",
    "What are the two common signs of shock?",
    "If someone is having a seizure, what should you do?",
    "What should you do if a person may have a spinal injury?",
    "What should you do for a nosebleed?",
    "What does the recovery position prevent?",
    "What is the goal of first aid?"
];
const answers = [
    "Cardiopulmonary Resuscitation",
    "911",
    "Environment safety",
    "Center of the chest/Sternum",
    "100-120 BPM",
    "Restart normal heart rhythm",
    "Abdominal thrusts/Heimlich maneuver",
    "Lay them on their sides/Recovery Position",
    "Direct pressure",
    "Cool it with running water",
    "Confusion and pale skin",
    "Protect them from nearby hazards",
    "Keep them as still as possible",
    "Lean forward. Pinch nose.",
    "Choking",
    "Immediate care until professional help arrives."
];

let leftScore = 0;
let rightScore = 0;

let index = 0;

function updateQuestion() {
    let element = document.getElementById("question");
    index = Math.floor(Math.random() * questions.length);
    element.innerText = questions[index];
}

function hideQuestion() {
    document.getElementById("question").innerText = "";
}

function showAnswer() {
    let question = questions[index];
    document.getElementById("answer").innerText = answers[index];
}

function hideAnswer() {
    document.getElementById("answer").innerText = "";
}

function increaseLeftScore() {
    leftScore++;
    document.getElementById("left-score").innerText = leftScore;
}

function increaseRightScore() {
    rightScore++;
    document.getElementById("right-score").innerText = rightScore;
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let stage = 0;
let hasPlayerPressed = false;

document.body.onkeydown = async function (event) {
    if (event.keyCode == 32) {
        hasPlayerPressed = false;
        if (stage == 0) {
            await sleep(1000);
            updateQuestion();
            stage = 1;
        } else if (stage == 1) {
            showAnswer();
            stage = 2;
        } else if (stage == 2) {
            hideQuestion();
            hideAnswer();
            stage = 0;
        } 
    }
};

document.getElementById("left-button").addEventListener("mouseup", () => { increaseLeftScore() });
document.getElementById("right-button").addEventListener("mouseup", () => { increaseRightScore() });

document.addEventListener("keydown", (event) => {
    // apostrophe
    if (event.key == "'") {
        document.body.style.backgroundImage = "linear-gradient(to right, white 0%, 80%, red)";
    } else if (event.key == "a") {
        // a key
        document.body.style.backgroundImage = "linear-gradient(to left, white 0%, 80%, blue)";
    }
})