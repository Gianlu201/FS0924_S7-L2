const timeCounter = document.getElementById('timeCounter');
let time = 1;

document.addEventListener('load', init());

function init() {
  updateNameSpace();
  startTimer();
}

function updateNameSpace() {
  let myName = JSON.parse(localStorage.getItem('name'));
  if (myName) {
    document.getElementById('nameSpace').innerText = `Ciao, ${myName}!`;
  } else {
    document.getElementById('nameSpace').innerText = `Nessun dato trovato!`;
  }
}

document.getElementById('addName').addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  if (name.value) {
    localStorage.setItem('name', JSON.stringify(name.value));
    updateNameSpace();
    document.getElementById('form').reset();
  }
});

document.getElementById('removeName').addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('name');
  updateNameSpace();
});

function startTimer() {
  setInterval(() => {
    time++;
    updateTimer();
  }, 1000);
}

function updateTimer() {
  timeCounter.innerText = time;
  saveTimeInSessionStorage();
}

function saveTimeInSessionStorage() {
  sessionStorage.setItem('time', JSON.stringify(time));
}
