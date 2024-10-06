import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const countInfo: HTMLDivElement = document.createElement("div");

const upgrades: HTMLDivElement = document.createElement("div");
const upgradeInfo: HTMLDivElement = document.createElement("div");

interface Item{
    label: string,
    cost: number,
    rate: number,
    amount: number
};

const gameName = "Rat Gains Clicker";
document.title = gameName;

const availableItems : Item[] = [
    {label: "Buy Rat Wheel", cost: 10, rate: 0.1, amount: 0},
    {label: "Buy Lab Blocks", cost: 100, rate: 2, amount: 0},
    {label: "Buy Rat-Sized Barbells", cost: 1000, rate: 50, amount: 0}
];

const ratButtName = "🐀";
const wheel = availableItems[0];
const block = availableItems[1];
const bar = availableItems[2];

let counter: number = 0;
let lastFrame: number = 0;
let growthRate: number = 1;

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
countInfo.append(countTxt);
app.append(countInfo);

const wheelButton: HTMLButtonElement = document.createElement("button");
wheelButton.innerHTML = wheel.label + " $" + wheel.cost.toFixed(2);
upgrades.append(wheelButton);
const wheelCount = document.createElement("h3");
wheelCount.innerHTML = "# of Wheels: " + wheel.amount;
upgradeInfo.append(wheelCount);

const blockButton: HTMLButtonElement = document.createElement("button");
blockButton.innerHTML = block.label + " $" + block.cost.toFixed(2);
upgrades.append(blockButton);
const blockCount = document.createElement("h3");
blockCount.innerHTML = "# of Blocks: " + block.amount;
upgradeInfo.append(blockCount);

const barButton: HTMLButtonElement = document.createElement("button");
barButton.innerHTML = bar.label + " $" + bar.cost.toFixed(2);
upgrades.append(barButton);
app.append(upgrades);
const barCount = document.createElement("h3");
barCount.innerHTML = "# of Barbells: " + bar.amount;
upgradeInfo.append(barCount);
app.append(upgradeInfo);

wheelButton.disabled = true;
blockButton.disabled = true;
barButton.disabled = true;

ratButton.addEventListener("click", updateCounter);
wheelButton.addEventListener("click", () => {
  wheel.amount++;
  wheelCount.innerHTML = "# of Wheels: " + wheel.amount;
  counter -= wheel.cost;
  growthRate += wheel.rate;
  txt.innerHTML = "Rat Growth Rate: " + growthRate.toFixed(1) + " gains/sec";
  wheel.cost *= 1.15;
  wheelButton.innerHTML = wheel.label + " $" + wheel.cost.toFixed(2);
  requestAnimationFrame(animCounter);
  wheelButton.disabled = true;
});

blockButton.addEventListener("click", () => {
  block.amount++;
  blockCount.innerHTML = "# of Blocks: " + block.amount;
  counter -= block.cost;
  growthRate += block.rate;
  txt.innerHTML = "Rat Growth Rate: " + growthRate.toFixed(1) + " gains/sec";
  block.cost *= 1.15;
  blockButton.innerHTML = block.label + " $" + block.cost.toFixed(2);
  requestAnimationFrame(animCounter);
  wheelButton.disabled = true;
});

barButton.addEventListener("click", () => {
  bar.amount++;
  barCount.innerHTML = "# of Barbells: " + bar.amount;
  counter -= bar.cost;
  growthRate += bar.rate;
  txt.innerHTML = "Rat Growth Rate: " + growthRate.toFixed(1) + " gains/sec";
  bar.cost *= 1.15;
  barButton.innerHTML = bar.label + " $" + bar.cost.toFixed(2);
  requestAnimationFrame(animCounter);
  wheelButton.disabled = true;
});

function updateCounter() {
  counter++;
  updateDisplay();
}

function updateDisplay() {
  countTxt.innerHTML = "Rat Counter: " + counter.toFixed(2);

  if (counter >= wheel.cost) {
    wheelButton.disabled = false;
  }

  if (counter >= block.cost) {
    blockButton.disabled = false;
  }

  if (counter >= bar.cost) {
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
