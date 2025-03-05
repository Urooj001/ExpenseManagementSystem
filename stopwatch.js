let startTime, updatedTime, difference, t;
let running = false;

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        t = setInterval(updateDisplay, 1000);
        running = true;
    }
}

function stopStopwatch() {
    clearInterval(t);
    running = false;
}

function resetStopwatch() {
    clearInterval(t);
    running = false;
    difference = 0;
    document.getElementById('display').innerHTML = "00:00:00";
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('display').innerHTML =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}