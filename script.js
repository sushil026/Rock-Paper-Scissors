const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const userScore = document.querySelector('#score>h1');
const pcScore = document.querySelector('#pcScore>h1');
const move = document.getElementsByClassName('select');
const moves = ['rock', 'paper', 'scissors'];
const pcIcons = new Map([['rock', document.getElementById("resRock2")], ['paper', document.getElementById("resPaper2")], ['scissors', document.getElementById("resScissors2")]]);
const userIcons = new Map([['rock', document.getElementById("resRock")], ['paper', document.getElementById("resPaper")], ['scissors', document.getElementById("resScissors")]]);

window.onload = function() {
    userScore.innerHTML = localStorage.getItem('userScore');
    pcScore.innerHTML = localStorage.getItem('pcScore');
}

function yourMove(id) {
    document.getElementById("play").style.display = 'none';
    var pcMove = Math.floor(Math.random() * 3);
    const pc = moves[pcMove];
    score(id, pc);
}
function score(user, pc){
    if( user === 'rock' && pc === 'scissors'){
        showResult(user, pc, 'win');
    }
    else if( user === 'paper' && pc === 'rock'){
        showResult(user, pc, 'win');
    }
    else if( user === 'scissors' && pc === 'paper'){
        showResult(user, pc, 'win');
    }
    else if( user === 'rock' && pc === 'paper'){
        showResult(user, pc, 'lose');
    }
    else if( user === 'paper' && pc === 'scissors'){
        showResult(user, pc, 'lose');
    }
    else if( user === 'scissors' && pc === 'rock'){
        showResult(user, pc, 'lose');
    }
    else{
        showResult( user , pc, 'draw');
    }
}
function showResult(user, pc , result) {
    document.getElementById("result").style.display = 'flex';
    if(  result === 'win'){
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
        localStorage.setItem("userScore", userScore.innerHTML);
        document.getElementById("resultText").innerHTML = 'YOU WIN <br> AGAINST PC';
        document.getElementById("replayButton").style.display = "block";
        document.getElementById("replay").innerHTML = 'PLAY AGAIN';
        document.getElementById("move1").innerHTML = 'YOU PICKED';
        document.getElementById("move2").innerHTML = 'PC PICKED';
        document.getElementById("nextButton").style.display = "block";
        document.getElementById("ruleButton").style.left = '55em';
        pcIcons.get(pc).style.display = "flex";
        userIcons.get(user).style.display = "flex";
    }
    else if( result === 'lose'){
        pcScore.innerHTML = parseInt(pcScore.innerHTML) + 1;
        localStorage.setItem('pcScore', pcScore.innerHTML);
        document.getElementById("resultText").innerHTML = 'YOU LOSE <br> AGAINST PC';
        document.getElementById("replayButton").style.display = "block";
        document.getElementById("replay").innerHTML = 'PLAY AGAIN';
        document.getElementById("move1").innerHTML = 'YOU PICKED';
        document.getElementById("move2").innerHTML = 'PC PICKED';
        pcIcons.get(pc).style.display = "flex";
        userIcons.get(user).style.display = "flex";
    }
    else{
        document.getElementById("resultText").innerHTML = 'TIE UP';
        document.getElementById("replayButton").style.display = "block";
        document.getElementById("replay").innerHTML = 'REPLAY';
        document.getElementById("move1").innerHTML = 'YOU PICKED';
        document.getElementById("move2").innerHTML = 'PC PICKED';
        pcIcons.get(pc).style.display = "flex";
        userIcons.get(user).style.display = "flex";
    }
    document.getElementById("replayButton").addEventListener('click',()=>{
        document.getElementById("result").style.display = 'none';
        document.getElementById("play").style.display = 'flex';
        pcIcons.get(pc).style.display = "none";
        userIcons.get(user).style.display = "none";
    })
}
function openFile(file) {
    window.location.href = file;
}
document.querySelector('#ruleButton').addEventListener('click',()=>{
    var x = document.getElementById("rules");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})
document.querySelector('#cross').addEventListener('click',()=>{
    document.getElementById("rules").style.display = "none";
})