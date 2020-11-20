let mainImg = document.getElementById('game');
let mainScr = document.getElementById('score');
let highScr = document.getElementById('hScore');
let nameScr = document.getElementById('name-hScore');
let leftBtn = document.getElementById('left');
let upBtn = document.getElementById('up');
let rightBtn = document.getElementById('right');
let lifeImg = document.getElementById('live');

let inputShoot = ['kiri', 'tengah', 'kanan'];
let question = inputShoot[Math.floor(Math.random() * 3)];
let answer = '';
let totScore = 0;
let highScore = 0;
let heart = 0;

var bgAu = new Audio("./rsc/au/main.mp3");
var shootAu = new Audio("./rsc/au/shoot.mp3");
var loseAu = new Audio("./rsc/au/lose.mp3");
var winAu = new Audio("./rsc/au/goal.mp3");

function startButton() {
  heart = 3;

  document.getElementById('life').style.display = "inline";
  document.getElementById('btn').style.display = "none";
  highScr.style.display = "none";
  nameScr.style.display = "none";
  
  mainImg.src="./rsc/img/main.jpg";
  lifeImg.src=`./rsc/img/h${heart}.png`
    
  leftBtn.style.display = "inline";
  upBtn.style.display = "inline";
  rightBtn.style.display = "inline";

  bgAu.play();
  bgAu.loop = true;
  bgAu.volume = 0.4;
}

function score() {
  if (totScore > 9) {
    mainScr.innerText = totScore;
  } else mainScr.innerText = `0${totScore}`;
}

function goal() {
  totScore++;
  
  mainImg.src=`./rsc/img/${question}.jpg`;
  
  question = inputShoot[Math.floor(Math.random() * 3)]
  
  winAu.play();
  score();
}

function damage() {
  heart--
  mainImg.src=`./rsc/img/${question}.jpg`;

  if (heart > 0) {
    lifeImg.src=`./rsc/img/h${heart}.png`

    question = inputShoot[Math.floor(Math.random() * 3)]
  } else lose();
}

function lose() {
  lifeImg.src=`./rsc/img/h${heart}.png`
  
  bgAu.pause();
  loseAu.play();
  
  if (totScore > highScore) {
    var hasil;
    var nama = prompt("HIGH SCORE!!\nSIMPAN NAMA!!", "Nama Kamu")
    if (nama == null || nama == "") {
      hasil = "Sang Tanpa Nama";
    } else  hasil = nama;
    
    alert(`${hasil}\nKAMU HIGH SCORE!!\nDengan Score Akhir Kamu : ${totScore}`);
    
    highScore = totScore;
    highScr.innerText = totScore;
    nameScr.innerText = hasil;
  } else alert(`CUPU!!\nScore Akhir Kamu : ${totScore}\nHigh Score : ${highScore}`);
  
  document.getElementById('btn').style.display = "inline";
  document.getElementById('life').style.display = "none";
  highScr.style.display = "inline";
  nameScr.style.display = "inline";
  leftBtn.style.display = "none";
  upBtn.style.display = "none";
  rightBtn.style.display = "none";
  
  mainImg.src="./rsc/img/gawang.jpg";

  answer = '';
  totScore = 0;

  score();
}

function addAnswer(id) {
  if (id == 'left') {
    answer = 'kiri';
  } else if (id == 'up') {
    answer = 'tengah';
  } else if (id == 'right') answer = 'kanan';

  shootAu.play();
  shootAuvolume = 1.4;

  // apabila ingin melihat [arah kamu menembak bola] , [arah bergerak penjaga gawang] , [sisa nyawa kamu]
  // alert(`${answer} dan ${question} dan ${heart}`)

  if (answer) {
    if (heart > 0) {
      if (answer !== question) {
        goal();
      } 
      else if (answer === question) damage(); 
    } 
  }
}








