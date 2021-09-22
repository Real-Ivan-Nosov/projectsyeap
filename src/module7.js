// 1 exercise

// let time = document.getElementById('time');
// let starter = document.getElementById('starter');
// let display = document.getElementById('display');

// let interval;

// let run = () => {
//     if (display.textContent > 0) {
//         display.textContent--;
//     }
// }

// let runTimer = () => {
//     display.textContent = time.value;
//     if (interval) {clearInterval(interval)}
//     interval = setInterval(run, 1000);  
// }

// starter.addEventListener("click", runTimer);

// 2 exercise

let createText = () => {
    let text = document.createElement("input");
    text.id = "textInput";
    document.body.append(text);
};

let createH2 = () => {
    let h2 = document.createElement("h2");
    h2.id = "header";
    document.body.append(h2);
};

createText();
createH2();

let text = document.getElementById("textInput");
let h2 = document.getElementById("header");

let handler;

let changeHeader = () => {
    if (handler) {clearTimeout(handler)};
    handler = setTimeout(addText, 2000)
};

let addText = () => {
    h2.textContent = text.value;
}

text.addEventListener("change", changeHeader)