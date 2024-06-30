let inputArea = document.getElementById('input-area');
let computerNum = 0;
let playBtn = document.getElementById('play-button');
let result = document.getElementById('result');

playBtn.addEventListener('click', play);
inputArea.addEventListener('keydown', handleKeyDown);
function randomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
  console.log(computerNum);
}

function handleKeyDown(event) {
  if (event.key === 'Enter') {
    play();
  }
}

function play() {
  let inputValue = inputArea.value;
  if (inputValue < computerNum) {
    result.textContent = 'up';
  } else if (inputValue > computerNum) {
    result.textContent = 'down';
  } else {
    result.textContent = '맞음';
  }
}

randomNum();
