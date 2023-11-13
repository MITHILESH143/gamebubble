

var timer = 60;
var increaseScore = 0;
var hitRandomBall;
var pball = document.querySelector("#pball");
    
function updateHitBall() {
    var clutter = "";
for (var i = 0; i <= 167; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="hitBall"> ${rn}</div>`;
        pball.innerHTML = clutter;
    }

}

function increaseTime() {
    let runingTime = setInterval(() => {
        if (timer != -1) {
            document.querySelector("#time").textContent = timer;
            timer--;
        } else {
            clearInterval(runingTime);
            pball.innerHTML= `<h1>Game Over</h1>`;
        }

    }, 1000);

}
function score() {

    increaseScore += 5;
    document.querySelector("#score").textContent = increaseScore;
}
function updateHit() {
     hitRandomBall = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitRandomBall;
}
pball.addEventListener('click', function (details) {
   var randomNumber = Number(details.target.textContent);
   if (randomNumber == hitRandomBall){
    updateHitBall();
    score();
    updateHit();
    
   }
})
updateHitBall();
updateHit();
increaseTime();
