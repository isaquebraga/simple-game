const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseInt(window.getComputedStyle(mario).bottom.replace("px", ""));

    if (pipePosition <= 120 && pipePosition > 10 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = pipePosition.toString()+"px";

        mario.style.animation = "none";
        mario.style.bottom = marioPosition.toString()+"px";

        mario.src = "assets/img/game-over.png";
        mario.style.width = "70px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
        clearInterval(loopScore);
    }
}, 10)

var score = 0;

const loopScore = setInterval(() => {
    score += 1;
    stringScore = score.toString();
    if (score < 10) document.getElementById("value").textContent = "0" + stringScore;
    else document.getElementById("value").textContent = stringScore;
}, 1000)

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);