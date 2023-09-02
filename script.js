const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const userScore = document.querySelector('#score>h1');
const pcScore = document.querySelector('#pcScore>h1');
let scoreOfuser;
let scoreOfPc;
const move = document.getElementsByClassName('select');
const moves = ['rock', 'paper', 'scissors'];
const pcIcons = new Map([['rock', document.getElementById("resRock2")], ['paper', document.getElementById("resPaper2")], ['scissors', document.getElementById("resScissors2")]]);
const userIcons = new Map([['rock', document.getElementById("resRock")], ['paper', document.getElementById("resPaper")], ['scissors', document.getElementById("resScissors")]]);
if(localStorage.getItem('userScore')){
    scoreOfuser = localStorage.getItem('userScore');
 }
 else{
    localStorage.setItem('userScore', 0);
    scoreOfuser = localStorage.getItem('userScore');
 }
if(localStorage.getItem('PcScore')){
    scoreOfPc = localStorage.getItem('PcScore');
 }
 else{
    localStorage.setItem('PcScore', 0);
    scoreOfPc = localStorage.getItem('PcScore');
 }

window.onload = function() {
    pcScore.innerHTML = scoreOfPc;
    userScore.innerHTML = scoreOfuser;
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
const resText = document.getElementById("resultText1");
const resText2 = document.getElementById("resultText2");
const replayButton = document.getElementById("replayButton");
const replay = document.getElementById("replay");
function showResult(user, pc , result) {
    var winner; 
    document.getElementById("result").style.display = 'flex';
    if( result === 'win'){
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
        localStorage.setItem("userScore", (userScore.innerHTML));
        resText.innerHTML = 'YOU WON';
        resText2.innerHTML = 'AGAINST PC';
        replayButton.style.display = "block";
        replay.innerHTML = 'PLAY AGAIN';
        document.getElementById("move1").innerHTML = 'YOU PICKED';
        document.getElementById("move2").innerHTML = 'PC PICKED';
        document.getElementById("nextButton").style.display = "block";
        document.getElementById("ruleButton").style.left = '55em';
        pcIcons.get(pc).style.display = "flex";
        userIcons.get(user).style.display = "flex";
        winner = userIcons.get(user);
        makeGlow(winner);
    }
    else if( result === 'lose'){
        pcScore.innerHTML = parseInt(pcScore.innerHTML) + 1;
        localStorage.setItem('PcScore', (pcScore.innerHTML));
        resText.innerHTML = 'YOU LOSE';
        resText2.innerHTML = 'AGAINST PC';
        replayButton.style.display = "block";
        replay.innerHTML = 'PLAY AGAIN';
        document.getElementById("move1").innerHTML = 'YOU PICKED';
        document.getElementById("move2").innerHTML = 'PC PICKED';
        pcIcons.get(pc).style.display = "flex";
        userIcons.get(user).style.display = "flex";
        winner = pcIcons.get(pc);
        makeGlow(winner);
    }
    else{
        resText.innerHTML = 'TIE UP';
        resText2.innerHTML = '';
        replayButton.style.display = "block";
        replay.innerHTML = 'REPLAY';
        document.getElementById("move1").innerHTML = 'YOU PICKED';
        document.getElementById("move2").innerHTML = 'PC PICKED';
        pcIcons.get(pc).style.display = "flex";
        userIcons.get(user).style.display = "flex";
    }
    function makeGlow( winner ){
        winner.style.boxShadow = '0 0 0px 25px #3B6720';
            setTimeout(function () {
              winner.style.boxShadow = '0 0 0px 60px #1DA82BC9';
              setTimeout(function () {
                winner.style.boxShadow = '0 0 0px 30px #2E9A2563';
                    setTimeout(function(){
                    },300);
              }, 400);
            }, 300);
    }
    document.getElementById("replayButton").addEventListener('click',()=>{
        document.getElementById("result").style.display = 'none';
        document.getElementById("play").style.display = 'flex';
        pcIcons.get(pc).style.display = "none";
        userIcons.get(user).style.display = "none";
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("ruleButton").style.left = '63em';
        winner.style.boxShadow = '0 0 0px 0px #1DA82BC9';
        clearTimeout(winner);
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
