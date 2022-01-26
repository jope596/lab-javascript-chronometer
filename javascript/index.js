const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');
function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}
function printMinutes() {
  // ... your code goes here
minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
}
function printSeconds() {
  // ... your code goes here
secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}
function printSplit() {
  // ... your code goes here
  let newLi = document.createElement('li');
  let parent = document.querySelector('#splits');
  parent.appendChild(newLi);
  let split = chronometer.split();
  newLi.innerText = split;
}
function clearSplits() {
  splitsElement.innerHTML = '';
  // ... your code goes here
}
function setStopBtn() {
  chronometer.stop();
  // ... your code goes here
}
function setSplitBtn() {
  // ... your code goes here
}
function setStartBtn() {
  // ... your code goes here
}
function setResetBtn() {
  chronometer.reset()
  printTime();
  // ... your code goes here
}
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerText === 'START') {
    btnLeftElement.innerText = 'STOP';
    btnRightElement.innerText = 'SPLIT';
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    chronometer.start(printTime);
  } else {
    btnLeftElement.innerText = 'START';
    btnRightElement.innerText = 'RESET';
    btnLeftElement.classList.toggle('start');
    btnLeftElement.classList.toggle('stop');
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    chronometer.stop();
  }
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.innerText === 'SPLIT'){
    printSplit();
  } else {setResetBtn()
    clearSplits()}
});

/* const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
printMinutes();
printSeconds();
  // ... your code goes here
}

function printMinutes() {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(getMinutes())[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(getMinutes())[1];
  // ... your code goes here
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(getSeconds())[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(getSeconds())[1];
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerHTML = 'START'
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');
  btnRightElement.innerHTML = 'RESET'
  // ... your code goes here
}

function setSplitBtn() {
  

  // ... your code goes here
}

function setStartBtn() {
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerHTML = 'STOP'
  btnRightElement.innerHTML = 'SPLIT'
  chronometer.start(printTime);
  

  
  
  // ... your code goes here
}

function setResetBtn() {

  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  console.log (`Start/Stop is being clicked`);
  if (btnLeftElement.innerHTML === 'START') {
    setStartBtn();
    
  }else {
    setStopBtn();
  }
  
  // ... your code goes here
});


// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  console.log (`Reset/Split is being clicked`);
  if (btnRightElement.innerHTML === 'RESET') {
    setResetBtn();
  }else {
    setSplitBtn();
  }
  // ... your code goes here
});
 */