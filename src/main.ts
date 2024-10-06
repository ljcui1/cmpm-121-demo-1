import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const countInfo: HTMLDivElement = document.createElement("div");

const upgrades: HTMLDivElement = document.createElement("div");
const upgradeInfo: HTMLDivElement = document.createElement("div");

interface Item {
  label: string;
  cost: number;
  rate: number;
  amount: number;
  desc: string;
}

const gameName = "Rat Gains Clicker";
document.title = gameName;

const availableItems: Item[] = [
  {
    label: "Buy Rat Wheel",
    cost: 10,
    rate: 0.1,
    amount: 0,
    desc: "a rat treadmill used to train cardiovascular health",
  },
  {
    label: "Buy Lab Blocks",
    cost: 100,
    rate: 2,
    amount: 0,
    desc: "lab-created blocks of food and all necessary nutrition for an adult rat",
  },
  {
    label: "Buy Rat-Sized Barbells",
    cost: 1000,
    rate: 50,
    amount: 0,
    desc: "barbell weights for muscle gainz",
  },
  {
    label: "Buy Rat Creatine",
    cost: 10000,
    rate: 100,
    amount: 0,
    desc: "supplement for optimal muscle growth",
  },
  {
    label: "Buy Rat Steroids",
    cost: 1000000,
    rate: 5000,
    amount: 0,
    desc: "bro you're too far gone...",
  },
];

const ratButtName = "🐀";
const wheel = availableItems[0];
const block = availableItems[1];
const bar = availableItems[2];
const creatine = availableItems[3];
const steroids = availableItems[4];

let counter: number = 0;
let lastFrame: number = 0;
let growthRate: number = 0;

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
countTxt.innerHTML = "Rat Gainz Counter: " + counter;
countInfo.append(countTxt);
app.append(countInfo);

const wheelButton: HTMLButtonElement = document.createElement("button");
wheelButton.innerHTML = wheel.label + " $" + wheel.cost.toFixed(2);
wheelButton.title = wheel.desc;
upgrades.append(wheelButton);
const wheelCount = document.createElement("h3");
wheelCount.innerHTML = "# of Wheels: " + wheel.amount;
upgradeInfo.append(wheelCount);

const blockButton: HTMLButtonElement = document.createElement("button");
blockButton.innerHTML = block.label + " $" + block.cost.toFixed(2);
blockButton.title = block.desc;
upgrades.append(blockButton);
const blockCount = document.createElement("h3");
blockCount.innerHTML = "# of Blocks: " + block.amount;
upgradeInfo.append(blockCount);

const barButton: HTMLButtonElement = document.createElement("button");
barButton.innerHTML = bar.label + " $" + bar.cost.toFixed(2);
barButton.title = bar.desc;
upgrades.append(barButton);
app.append(upgrades);
const barCount = document.createElement("h3");
barCount.innerHTML = "# of Barbells: " + bar.amount;
upgradeInfo.append(barCount);

const crButton: HTMLButtonElement = document.createElement("button");
crButton.innerHTML = creatine.label + " $" + creatine.cost.toFixed(2);
crButton.title = creatine.desc;
upgrades.append(crButton);
app.append(upgrades);
const crCount = document.createElement("h3");
crCount.innerHTML = "# of Creatine: " + creatine.amount;
upgradeInfo.append(crCount);

const stButton: HTMLButtonElement = document.createElement("button");
stButton.innerHTML = steroids.label + " $" + steroids.cost.toFixed(2);
stButton.title = steroids.desc;
upgrades.append(stButton);
app.append(upgrades);
const stCount = document.createElement("h3");
stCount.innerHTML = "# of Steroids: " + steroids.amount;
upgradeInfo.append(stCount);
app.append(upgradeInfo);

wheelButton.disabled = true;
blockButton.disabled = true;
barButton.disabled = true;
crButton.disabled = true;
stButton.disabled = true;

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
  blockButton.disabled = true;
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
  barButton.disabled = true;
});

crButton.addEventListener("click", () => {
  creatine.amount++;
  crCount.innerHTML = "# of Creatine: " + creatine.amount;
  counter -= creatine.cost;
  growthRate += creatine.rate;
  txt.innerHTML = "Rat Growth Rate: " + growthRate.toFixed(1) + " gains/sec";
  creatine.cost *= 1.15;
  crButton.innerHTML = creatine.label + " $" + creatine.cost.toFixed(2);
  requestAnimationFrame(animCounter);
  crButton.disabled = true;
});

stButton.addEventListener("click", () => {
  steroids.amount++;
  stCount.innerHTML = "# of Steroids: " + steroids.amount;
  counter -= steroids.cost;
  growthRate += steroids.rate;
  txt.innerHTML = "Rat Growth Rate: " + growthRate.toFixed(1) + " gains/sec";
  steroids.cost *= 1.15;
  stButton.innerHTML = steroids.label + " $" + steroids.cost.toFixed(2);
  requestAnimationFrame(animCounter);
  stButton.disabled = true;
});

function updateCounter() {
  counter++;
  updateDisplay();
}

function updateDisplay() {
  countTxt.innerHTML = "Rat Counter: " + counter.toFixed(2);

  if (counter >= wheel.cost) {
    wheelButton.disabled = false;
  } else {
    wheelButton.disabled = true;
  }

  if (counter >= block.cost) {
    blockButton.disabled = false;
  } else {
    blockButton.disabled = true;
  }

  if (counter >= bar.cost) {
    barButton.disabled = false;
  } else {
    barButton.disabled = true;
  }

  if (counter >= creatine.cost) {
    crButton.disabled = false;
  } else {
    crButton.disabled = true;
  }

  if (counter >= steroids.cost) {
    stButton.disabled = false;
  } else {
    stButton.disabled = true;
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
