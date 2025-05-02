const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

function clockTick() {
    const date = new Date();
    
    // Get fractions for smooth motion
    const seconds = (date.getSeconds() + date.getMilliseconds() / 1000) / 60;
    const minutes = (date.getMinutes() + seconds) / 60;
    const hours = (date.getHours() % 12 + minutes) / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

// Initialize immediately
clockTick();

// Update every frame (~60 fps) for smooth motion
setInterval(clockTick, 1000 / 60);
