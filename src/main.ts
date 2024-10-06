import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const info: HTMLDivElement = document.createElement("div");
const upgrades: HTMLDivElement = document.createElement("div");

const gameName = "My Stinky game";
document.title = gameName;

const desc_1 = "testing github pages update";

const ratButtName = "🐀";
const wheelName = "Buy Rat Wheel";
let counter: number = 0;
let lastFrame: number = 0;
let growthRate: number = 1;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const txt = document.createElement("p");
txt.innerHTML = desc_1;
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
app.append(upgrades);

wheelButton.disabled = true;

ratButton.addEventListener("click", updateCounter);
wheelButton.addEventListener("click", () => {
    counter -= 10;
    growthRate++;
    requestAnimationFrame(animCounter);
    wheelButton.disabled = true;
});

function updateCounter() {
    counter++;
    updateDisplay();
}

function updateDisplay(){
    countTxt.innerHTML = "Rat Counter: " + counter.toFixed(2);

    if(counter >= 10){
        wheelButton.disabled = false;
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


