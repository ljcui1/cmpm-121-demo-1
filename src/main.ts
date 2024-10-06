import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My Stinky game";
document.title = gameName;

const desc_1 = "testing github pages update";

const ratButtName = "🐀";

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const txt = document.createElement("p");
txt.innerHTML = desc_1;
app.append(txt);

const ratButton = document.createElement("button");
ratButton.innerHTML = ratButtName;
app.append(ratButton);