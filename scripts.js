let timer = 0;
let timerInterval;

let ms = document.getElementById('milli_seconds');
let second = document.getElementById('main_second');
let minute = document.getElementById('main_min');

// start

function start() {
    timerInterval = setInterval(function () {
        timer += 1 / 60;

        let msVal = Math.floor((timer - Math.floor(timer)) * 100);
        let secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
        let minuteVal = Math.floor(timer / 60);

        ms.textContent = msVal < 10 ? "0" + msVal.toString() : msVal;
        second.textContent = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
        minute.textContent = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;

    }, 1000 / 60)
}

function stop() {
    clearInterval(timerInterval);
}

function reset() {
    stop();
    timer = 0;
    ms.textContent = '00';
    second.textContent = '00';
    minute.textContent = '00';
}