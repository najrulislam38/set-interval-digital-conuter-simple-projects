const displayElement = document.getElementById('display-time');
const displayString = displayElement.innerText;
const display = parseInt(displayString);

let num = display;
let interval;
const getStart = () => {
    clearInterval(interval);
    interval = setInterval(startTime, 500);
}

const getStop = () => {
    clearInterval(interval);
}

const getReset = () => {
    clearInterval(interval);
    num = 0;
    displayElement.innerText = num;
}


function startTime(){
    num++;
    displayElement.innerText = num;
    // console.log(num);
}
