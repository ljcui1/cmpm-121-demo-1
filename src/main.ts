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
    label: "Buy Rat Wheels",
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

let counter: number = 0;
let lastFrame: number = 0;
let growthRate: number = 0;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const txt = document.createElement("p");
txt.innerHTML = "Rat Growth Rate: 0 gains/sec";
app.append(txt);

const ratButton: HTMLButtonElement = document.createElement("button");
ratButton.innerHTML = "🐀";
app.append(ratButton);

const countTxt = document.createElement("h2");
countTxt.innerHTML = "Rat Gainz Counter: 0";
countInfo.append(countTxt);
app.append(countInfo);

app.append(upgrades);
app.append(upgradeInfo);

const buttons = availableItems.map(createUpgradeButtons);

ratButton.addEventListener("click", () => {
  counter++;
  updateDisplay();
});

function createUpgradeButtons(item: Item) {
  const button = document.createElement("button");
  button.innerHTML = `${item.label} $${item.cost.toFixed(2)}`;
  button.title = item.desc;
  button.disabled = true;

  const itemCounter = document.createElement("h3");
  itemCounter.innerHTML = `# of ${item.label.split(" ").slice(1).join(" ")}: ${item.amount}`;

  button.addEventListener("click", () => {
    item.amount++;
    itemCounter.innerHTML = `# of ${item.label.split(" ").slice(1).join(" ")}: ${item.amount}`;
    counter -= item.cost;
    growthRate += item.rate;
    item.cost *= 1.15;
    updateButtonDisplay(button, item);
    updateDisplay();
    requestAnimationFrame(animCounter);
  });

  upgrades.append(button);
  upgradeInfo.append(itemCounter);
  return button;
}

function updateButtonDisplay(button: HTMLButtonElement, item: Item) {
  button.innerHTML = `${item.label} $${item.cost.toFixed(2)}`;
  button.disabled = counter < item.cost;
}

function updateDisplay() {
  countTxt.innerHTML = `Rat Gainz Counter: ${counter.toFixed(2)}`;
  txt.innerHTML = `Rat Growth Rate: ${growthRate.toFixed(1)} gains/sec`;

  buttons.forEach((button, index) => {
    const item = availableItems[index];
    button.disabled = counter < item.cost;
  });
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
