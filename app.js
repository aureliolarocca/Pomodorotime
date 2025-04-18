const btnStartTimer = document.getElementById("start");
const btnTimer = document.getElementById("timer-pomodoro");
const btnShortBreak = document.getElementById("break-short");
const btnLongBreak = document.getElementById("break-long");
const container = document.querySelector(".content-timer-pomodoro");
let flag = 1;
let newFlag = true;

let minutiDisplay = document.getElementById("minuti");
let secondiDisplay = document.getElementById("secondi");
let minutiJs = minutiDisplay.textContent;
let secondiJs = secondiDisplay.textContent;
let intervalId;

btnStartTimer.addEventListener("click", () => {
  console.log(flag);
  if (btnStartTimer.textContent === "Start") {
    btnStartTimer.textContent = "Pause";
    btnStartTimer.classList.remove("active");
    console.log("if");
    intervalId = setInterval(startTimer, 10);
  } else {
    btnStartTimer.classList.add("active");
    clearInterval(intervalId);
    btnStartTimer.textContent = "Start";
    console.log("else");
  }
});

function startTimer() {
  if (minutiJs === 0 && secondiJs === 0) {
    alert("finito");
    newFlag = false;
    clearDisplay();
  }
  if (secondiJs == "00") {
    minutiJs--;
    secondiJs = 60;
  }
  secondiJs--;
  minutiDisplay.textContent = minutiJs;
  secondiDisplay.textContent = String(secondiJs).padStart(2, "0");
  console.log(minutiJs);
  console.log(secondiJs);
}

function clearDisplay() {
  clearInterval(intervalId);
  btnStartTimer.textContent = "Start";
  if (flag === 1) {
    if (newFlag === true) {
      minutiDisplay.textContent = 25;
      secondiDisplay.textContent = "00";
      minutiJs = minutiDisplay.textContent;
      secondiJs = secondiDisplay.textContent;
      newFlag = false;
    } else {
      minutiDisplay.textContent = 25;
      secondiDisplay.textContent = "01";
      minutiJs = minutiDisplay.textContent;
      secondiJs = secondiDisplay.textContent;
      newFlag = true;
    }
  } else if (flag === -1) {
    if (newFlag === true) {
      minutiDisplay.textContent = 5;
      secondiDisplay.textContent = "00";
      minutiJs = minutiDisplay.textContent;
      secondiJs = secondiDisplay.textContent;
      newFlag = false;
    } else {
      minutiDisplay.textContent = 5;
      secondiDisplay.textContent = "01";
      minutiJs = minutiDisplay.textContent;
      secondiJs = secondiDisplay.textContent;
      newFlag = true;
    }
  } else {
    if (newFlag === true) {
      minutiDisplay.textContent = 15;
      secondiDisplay.textContent = "00";
      minutiJs = minutiDisplay.textContent;
      secondiJs = secondiDisplay.textContent;
      newFlag = false;
    } else {
      minutiDisplay.textContent = 15;
      secondiDisplay.textContent = "01";
      minutiJs = minutiDisplay.textContent;
      secondiJs = secondiDisplay.textContent;
      newFlag = true;
    }
  }
}

btnTimer.addEventListener("click", (e) => {
  flag = 1;
  newFlag = true;
  clearDisplay();
  console.log(e);
  console.log(flag);
  const arrBtn = [btnShortBreak, btnLongBreak];
  arrBtn.forEach((x) => {
    if (x.classList.contains("active")) {
      x.classList.remove("active");
    }
  });
  btnTimer.classList.add("active");
  const corpo = document.querySelector("body");
  console.log(corpo);
  if (corpo.classList.contains("bactive1")) {
    corpo.classList.remove("bactive1");
  }
  if (corpo.classList.contains("bactive2")) {
    corpo.classList.remove("bactive2");
  }
  corpo.classList.add("bactive3");
});

///

//

btnShortBreak.addEventListener("click", (e) => {
  console.log(e);
  newFlag = true;
  flag = -1;
  clearDisplay();
  console.log(flag);
  const arrBtn = [btnTimer, btnLongBreak];
  arrBtn.forEach((x) => {
    if (x.classList.contains("active")) {
      x.classList.remove("active");
    }
  });
  btnShortBreak.classList.add("active");
  const corpo = document.querySelector("body");
  console.log(corpo);
  if (corpo.classList.contains("bactive2")) {
    corpo.classList.remove("bactive2");
  }
  if (corpo.classList.contains("bactive3")) {
    corpo.classList.remove("bactive3");
  }
  corpo.classList.add("bactive1");
});
////
///
//
btnLongBreak.addEventListener("click", (e) => {
  console.log(e);
  newFlag = true;
  flag = -2;
  clearDisplay();
  console.log(flag);
  const arrBtn = [btnTimer, btnShortBreak];
  arrBtn.forEach((x) => {
    if (x.classList.contains("active")) {
      x.classList.remove("active");
    }
  });
  btnLongBreak.classList.add("active");
  const corpo = document.querySelector("body");
  console.log(corpo);
  if (corpo.classList.contains("bactive1")) {
    corpo.classList.remove("bactive1");
  }
  if (corpo.classList.contains("bactive3")) {
    corpo.classList.remove("bactive3");
  }
  corpo.classList.add("bactive2");
});
