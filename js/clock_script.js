(function updateClock() {
    var clockElement = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Pad single-digit hours, minutes, and seconds with leading zeros
    hours = (hours < 10 ? '0' + hours : hours);
    minutes = (minutes < 10 ? '0' + minutes : minutes);
    seconds = (seconds < 10 ? '0' + seconds : seconds);

    // Set the content of the clock element
    clockElement.textContent = hours + ':' + minutes;

    // Schedule the next update
    setTimeout(updateClock, 1000);
})();


