
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

const questionScreen = document.getElementById("questionScreen");
const letterScreen = document.getElementById("letterScreen");
const openLetterBtn = document.getElementById("openLetterBtn");
const letterContent = document.getElementById("letterContent");

const messages = [
    "excuse meeee??????? 😭",
    "Di na ko ninyo love?",
    "SURENESS??????",
    "Ayaw na, di najud ko ninyo lab",
    "HUUUUYYYYY",
    "ka bad ninyu uy nyenyenye",
    "NO?! sige ana man mo",
    "na ambot uy tch!!",
    "nyenyenyenye",
    "ayw nalang uy",
    "AAAAAHHHHHHHHH",
    "AYW NA, SIGE NALANG",
    "Ka bad ninyo uych"
];

let messageIndex = 0;
let clickCount = 0;

// NO BUTTON
noBtn.addEventListener("click", () => {

    clickCount++;

    message.textContent = messages[messageIndex];

    messageIndex = (messageIndex + 1) % messages.length;

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    const randomSize = Math.random() * 20 + 10;
    noBtn.style.fontSize = randomSize + "px";

    const rotation = Math.random() * 60 - 30;
    noBtn.style.transform = `rotate(${rotation}deg)`;

    const colors = [
        "#ff75a9",
        "#ff1493",
        "#d63384",
        "#ff4d6d",
        "#c9184a"
    ];

    noBtn.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    noBtn.style.color = "white";

    if (clickCount >= 5) {
        noBtn.textContent = "NO?!";
    }

    if (clickCount >= 10) {
        noBtn.textContent = "STOPPPP";
        noBtn.style.animation = "shake 0.15s infinite";
    }

    if (clickCount >= 15) {
        noBtn.textContent = "IMPOSSIBLE";
    }

});

// YES BUTTON - OPEN SECRET SCREEN
yesBtn.addEventListener("click", () => {

    questionScreen.style.display = "none";
    letterScreen.style.display = "block";

});

// OPEN THE SECRET LETTER
openLetterBtn.addEventListener("click", () => {

    openLetterBtn.style.display = "none";

    letterContent.style.display = "block";

});

