import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const info: HTMLDivElement = document.createElement("div");

const upgrades: HTMLDivElement = document.createElement("div");
const upgradeInfo: HTMLDivElement = document.createElement("div");

const gameName = "Rat Gains Clicker";
document.title = gameName;

const ratButtName = "🐀";
const wheelName = "Buy Rat Wheel";
const blockName = "Buy Lab Blocks";
const barName = "Buy Rat-Sized Barbells";

let counter: number = 0;
let lastFrame: number = 0;
let growthRate: number = 1;

let wheelNum = 0;
let blockNum = 0;
let barNum = 0;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const txt = document.createElement("p");
txt.innerHTML = "Rat Growth Rate: " + growthRate + " gains/sec";
app.append(txt);

const ratButton: HTMLButtonElement = document.createElement("button");
ratButton.innerHTML = ratButtName;
app.append(ratButton);

const countTxt = document.createElement("h2");
countTxt.innerHTML = "Rat Counter: " + counter;
info.append(countTxt);
app.append(info);

const wheelButton: HTMLButtonElement = document.createElement("button");
wheelButton.innerHTML = wheelName;
upgrades.append(wheelButton);
const wheelCount = document.createElement("h3");
wheelCount.innerHTML = "# of Wheels: " + wheelNum;
upgradeInfo.append(wheelCount);

const blockButton: HTMLButtonElement = document.createElement("button");
blockButton.innerHTML = blockName;
upgrades.append(blockButton);
const blockCount = document.createElement("h3");
blockCount.innerHTML = "# of Blocks: " + blockNum;
upgradeInfo.append(blockCount);

const barButton: HTMLButtonElement = document.createElement("button");
barButton.innerHTML = barName;
upgrades.append(barButton);
app.append(upgrades);
const barCount = document.createElement("h3");
barCount.innerHTML = "# of Barbells: " + barNum;
upgradeInfo.append(barCount);
app.append(upgradeInfo);

wheelButton.disabled = true;
blockButton.disabled = true;
barButton.disabled = true;

ratButton.addEventListener("click", updateCounter);
wheelButton.addEventListener("click", () => {
  wheelNum++;
  wheelCount.innerHTML = "# of Wheels: " + wheelNum;
  counter -= 10;
  growthRate += 0.1;
  txt.innerHTML = "Rat Growth Rate: " + growthRate.toFixed(1) + " gains/sec";
  requestAnimationFrame(animCounter);
  wheelButton.disabled = true;
});

blockButton.addEventListener("click", () => {
  blockNum++;
  blockCount.innerHTML = "# of Blocks: " + blockNum;
  counter -= 100;
  growthRate += 2;
  txt.innerHTML = "Rat Growth Rate: " + growthRate.toFixed(1) + " gains/sec";
  requestAnimationFrame(animCounter);
  wheelButton.disabled = true;
});

barButton.addEventListener("click", () => {
  barNum++;
  barCount.innerHTML = "# of Barbells: " + barNum;
  counter -= 1000;
  growthRate += 50;
  txt.innerHTML = "Rat Growth Rate: " + growthRate.toFixed(1) + " gains/sec";
  requestAnimationFrame(animCounter);
  wheelButton.disabled = true;
});

function updateCounter() {
  counter++;
  updateDisplay();
}

function updateDisplay() {
  countTxt.innerHTML = "Rat Counter: " + counter.toFixed(2);

  if (counter >= 10) {
    wheelButton.disabled = false;
  }

  if (counter >= 100) {
    blockButton.disabled = false;
  }

  if (counter >= 1000) {
    barButton.disabled = false;
  }
}

function animCounter() {
  const curr = Date.now();
  if (lastFrame === 0) {
    lastFrame = curr;
  }

  const elapsed = curr - lastFrame;
  //console.log(elapsed);

  counter += growthRate * (elapsed / 1000);
  updateDisplay();

  lastFrame = curr;
  requestAnimationFrame(animCounter);
}
