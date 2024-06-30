let inputArea = document.getElementById('input-area');
let computerNum = 0;
let playBtn = document.getElementById('play-button');
let result = document.getElementById('result');
let imgDesign = document.getElementById('img-design');
let img = document.querySelector('img');
let resetBtn = document.getElementById('restet-button');
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById('chance-area');
let history = [];

//img넣고 싶었고 해당 이미지 chances가 줄어들면 opacity, 불투명도 올리기위해서 일단 0으로 설정
imgDesign.style.opacity = '0';

resetBtn.addEventListener('click', reset);
playBtn.addEventListener('click', play);
inputArea.addEventListener('keydown', handleKeyDown);
// focus로 input창 초기화
inputArea.addEventListener('focus', () => {
  inputArea.value = '';
});
function randomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
}

function handleKeyDown(event) {
  if (event.key === 'Enter') {
    play();
    //enter도 따로 이렇게 초기화
    inputArea.value = '';
  }
}

function reset() {
  inputArea.value = '';
  randomNum();
  result.textContent = '하쉴?';
  chances = 5;
  gameOver = false;
  playBtn.disabled = false;
  chanceArea.textContent = '';
  //opacity값 0으로 설정하여 다시 화면상에서 안 보이도록
  imgDesign.style.opacity = '0';
  history = [];
  //img를 원래 이미지로 다시 설정해주어야하기에 img다시 설정
  img.src =
    'https://ojsfile.ohmynews.com/CRI_T_IMG/2018/0813/A0002462761_T.jpg';
}

function play() {
  let inputValue = inputArea.value;
  if (inputValue < 1 || inputValue > 100) {
    result.textContent = '1~100사이';
    return;
  }
  if (history.includes(inputValue)) {
    result.textContent = '중복되는 숫자!!';
    return;
  }

  chances--;
  chanceArea.textContent = `남은기회: ${chances}번`;

  if (inputValue < computerNum) {
    result.textContent = '업업';
  } else if (inputValue > computerNum) {
    result.textContent = '다운다운';
  } else {
    result.textContent = '맞음';
    //숫가자 맞으면 img를 변경해주어야 하기때문에 img도 변수선언하여 이렇게 가져오기
    img.src =
      'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/7YmD/image/rfz9SSvcbysKDLNtM9ZkR2C0_m4.jpg';
  }

  history.push(inputValue);

  //imgDesign.style.opacity로 현재 값을 가져온다 (0), parseFloat()를 사용하여 현재 값을 소수점으로 변경 0은 0.0, 여기에 0.15씩 더하여
  //불투명도값을 올린다
  imgDesign.style.opacity = parseFloat(imgDesign.style.opacity) + 0.16;

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playBtn.disabled = true;
    result.textContent = '끝났습니다...';
  }
}

randomNum();
