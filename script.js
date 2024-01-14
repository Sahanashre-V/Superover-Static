let scoreteam1 = document.getElementById("score-team1");
let scoreteam2 = document.getElementById("score-team2");
let wicketsteam1 = document.getElementById("wickets-team1");
let wicketsteam2 = document.getElementById("wickets-team2");
let strike = document.getElementById("strike");
let reset = document.getElementById("reset");
let wicket1 = 0;
let wicket2 = 0;
let ball1 = 0;
let ball2 = 0;
let score1 = 0;
let score2 = 0;

let team1Balls = document.querySelectorAll("#team1balls .ball");
let team2Balls = document.querySelectorAll("#team2balls .ball"); // Corrected the selector

Possibilities = [0, 1, 2, 3, 4, 5, 6, 'W'];
let over = 1;
let StrikeAudio = new Audio("http://bit.ly/so-ball-hit");
let GameoverAudio = new Audio("http://bit.ly/so-crowd-cheer");

strike.addEventListener("click", function () {
    StrikeAudio.play();
    let randomNum = Math.floor(Math.random() * Possibilities.length)
    let RandomRun = Possibilities[randomNum]
    if (over == 1) {
        if (RandomRun == "W") {
            wicket1 += 1;
            wicketsteam1.innerText = wicket1;
            team1Balls[ball1].innerText = RandomRun;
        } 
        else if (ball1 == 6 || wicket1 == 2) {
            over = 2;
        }
         else {
            team1Balls[ball1].innerText = RandomRun;
            score1 += RandomRun;
            scoreteam1.innerText = score1;
        }
        ball1++;
    } 
    else if (over == 2) {
        if (RandomRun == "W") {
            wicket2 += 1;
            wicketsteam2.innerText = wicket2;
            team2Balls[ball2].innerText = RandomRun;
        } 
        else if (ball2 == 6 || wicket2 == 2 || score2 > score1) {
            over = 3;
        }
         else {
            team2Balls[ball2].innerText = RandomRun;
            score2 += RandomRun;
            scoreteam2.innerText = score2;
        }
        ball2++;
    }

    else if (over == 3) {
        GameoverAudio.play();
        alert("Game Over");
        if (score1 > score2) {
            alert("IND WON");
        } 
        else if (score2 > score1) {
            alert("PAK WON");
        } 
        else {
            alert("IT'S DRAW");
        }
    }
});

reset.addEventListener("click", function () {
    // location.reload();
    window.location.href = "./index.html";
});
