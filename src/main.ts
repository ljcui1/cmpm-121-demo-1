import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const info: HTMLDivElement = document.createElement("div");

const gameName = "My Stinky game";
document.title = gameName;

const desc_1 = "testing github pages update";

const ratButtName = "🐀";
let counter: number = 0;
let lastFrame: number = 0;
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

ratButton.addEventListener("click", updateCounter);

function updateCounter() {
  counter++;
  countTxt.innerHTML = "Rat Counter: " + counter;
}

function animCounter(){
    const curr = Date.now();
    if(lastFrame === 0){
        lastFrame = curr;
    }
    
    const elapsed = curr - lastFrame;
    console.log(elapsed);

    counter += (elapsed / 1000);
    countTxt.innerHTML = "Rat Counter: " + counter.toFixed(2);

    lastFrame = curr;
    requestAnimationFrame(animCounter);
};

requestAnimationFrame(animCounter);

