const btnStartTimer = document.getElementById("start");
const btnTimer = document.getElementById("timer-pomodoro");
const btnShortBreak = document.getElementById("break-short");
const btnLongBreak = document.getElementById("break-long");
const container = document.querySelector(".content-timer-pomodoro");
const pTask = document.getElementById("info-task");
const taskPomodoro = document.getElementById("task-pomodoro");
const taskShort = document.getElementById("task-short");
const taskLong = document.getElementById("task-long");

let pomodori = 0;
let pauseCorte = 0;
let pauseLunghe = 0;
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
    intervalId = setInterval(startTimer, 1000);
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
    if (flag === 1) {
      pomodori++;
      console.log(pomodori);
      let newDiv = document.createElement("div");
      newDiv.classList.add("pomodoro-aggiunto");
      taskPomodoro.appendChild(newDiv);
      newDiv.textContent = pomodori;
      document.getElementById("pomodoriCompletati").textContent = pomodori;
      const pomodoriInOre = (pomodori * 25) / 60;
      if (pomodori < 3) {
        document.getElementById("oreDiFocus").textContent = `${
          pomodori * 25
        } Minuti`;
      } else {
        document.getElementById(
          "oreDiFocus"
        ).textContent = `${pomodoriInOre.toFixed(2)} Ore`;
      }
    } else if (flag === -1) {
      pauseCorte++;
      console.log(`Le Pause Corte sono ${pauseCorte}`);
      let newDiv = document.createElement("div");
      newDiv.classList.add("pausa-corta-aggiunto");
      taskShort.appendChild(newDiv);
      document.getElementById("pauseCortePrese").textContent = pauseCorte;

      const pauseCorteInOre = (pauseCorte * 5) / 60;

      if (pauseCorte < 12) {
        document.getElementById("oreDiPauseCorte").textContent = `${
          pauseCorte * 5
        } Minuti`;
      } else {
        document.getElementById(
          "oreDiPauseCorte"
        ).textContent = `${pauseCorteInOre.toFixed(2)} Ore `;
      }
    } else {
      pauseLunghe++;
      console.log(`Le Pause Lunghe sono  ${pauseLunghe}`);
      let newDiv = document.createElement("div");
      newDiv.classList.add("pausa-lunga-aggiunto");
      taskLong.appendChild(newDiv);
      document.getElementById("pauseLunghePrese").textContent = pauseLunghe;

      const pauseLungheInOre = (pauseLunghe * 15) / 60;

      if (pauseLunghe < 4) {
        document.getElementById("oreDiPauseLunghe").textContent = `${
          pauseLunghe * 15
        } Minuti`;
      } else {
        document.getElementById(
          "oreDiPauseLunghe"
        ).textContent = `${pauseLungheInOre.toFixed(2)} Ore `;
      }
    }

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
    pTask.textContent = "Pomodori completati :";

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
    pTask.textContent = "Pause corte completate :";

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
  taskPomodoro.style.display = "flex";
  const arrTask = [taskShort, taskLong];
  arrTask.forEach((x) => {
    x.style.display = "none";
  });
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
  taskShort.style.display = "flex";
  const arrTask = [taskPomodoro, taskLong];
  arrTask.forEach((x) => {
    x.style.display = "none";
  });
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
  taskLong.style.display = "flex";
  const arrTask = [taskPomodoro, taskShort];
  arrTask.forEach((x) => {
    x.style.display = "none";
  });
  corpo.classList.add("bactive2");
});

//

//
//
//
//
//
//
//
//
//
//
//
//

//

const btnInfo = document.getElementById("btn-info");

btnInfo.addEventListener("click", () => {
  const banner = document.querySelector(".banner");
  banner.style.display = "flex";
  const btnRemoveBanner = document.getElementById("btn-close-info");
  btnRemoveBanner.addEventListener("click", () => {
    banner.style.display = "none";
  });
});

//
///
///
///
//

const btnReport = document.getElementById("btn-report");

btnReport.addEventListener("click", () => {
  const bannerReport = document.querySelector(".banner-report");
  bannerReport.style.display = "flex";
  const btnRemoveBanner = document.getElementById("btn-close-report");
  btnRemoveBanner.addEventListener("click", () => {
    bannerReport.style.display = "none";
  });
});
